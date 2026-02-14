'use client';

import { createContext, useContext, useEffect, useState } from "react";

type User = { // same as interface User {} sans =
    id: string
    email: string   
    username: string
    token: string
}

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    isLoading: boolean
}

const AuthContext = createContext<AuthContextType|null>(null); // file tsx required

export function useAuthContext() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('user not logged')
    }

    return context;
} 

export default function AuthProvider ({children}: {children: React.ReactNode}) { // line updated, how to check vercel approval ?
    const [user, setUser] = useState<User|null>(null)
    const [isLoading, setIsLoading] = useState(true) // catch appel entrant

    useEffect(()=>{
        const storedUser = localStorage.getItem('user')   // user peut revenir le lendemain, il est logged 
        if(storedUser) {
            setUser(JSON.parse(storedUser))
            console.log('ici', JSON.parse(storedUser))
        } else {
            console.log('user pas found ici')
        }
        setIsLoading(false)
    },[]);

    const login = async (email: string, password: string) => {
        try{
            const response = await fetch('/api/login', {
                method: 'POST', 
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            })
            if(!response.ok) {
                throw new Error('login failed')
            }

            const data:any = await response.json();
            if(!data.userReturned) {
                throw new Error(data.message || 'login failed')
            }
            // console.log(data.user)
            const userReturned = data.userReturned;
            setUser(userReturned)
            localStorage.setItem('user', JSON.stringify(userReturned))
            // setIsLoading(true)
        } 
        catch (error) {
            console.error(error)
        }
    }

    const logout = () => {
        try{
            setUser(null)
            localStorage.removeItem('user')
        }
        catch (error) {
            console.error(error)
        }
    }
    
    return (
        <AuthContext.Provider value={{user, login, logout, isLoading}}>
            {children}  
        </AuthContext.Provider>
    )
};