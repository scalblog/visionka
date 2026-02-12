'use client';

import { error } from "console";
import { createContext, useContext, useEffect, useState } from "react";

type User = { // same as interface User {} sans =
    id: string
    email: string   
    username: string
}

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
    isLogged: boolean
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

    const [user, setUSer] = useState<User|null>(null)
    const [isLogged, setIsLogged] = useState(true)

    useEffect(()=>{
        const storedUser = localStorage.getItem('user')   
        if(storedUser) {
            setUSer(JSON.parse(storedUser))
            console.log('ici', JSON.parse(storedUser))
        } else {
            console.log('user pas found ici')
        }
        setIsLogged(false)
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

            if(!response) {
                throw new Error('login failed')
            }

            const data:any = await response.json(); // await car typeof : Object
            console.log(data.user)
            localStorage.setItem('user', JSON.stringify(data.user))
            // setUSer(JSON.parse(localStorage.getItem('user')));
            setUSer(data.user)
            setIsLogged(true)
        } 
        catch (error) {
            console.error(error)
        }
    }

    const logout = () => {
        try{
            setUSer(null)
            localStorage.removeItem('user')
        }
        catch (error) {
            console.error(error)
        }
    }
    
    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}  
        </AuthContext.Provider>
    )
};