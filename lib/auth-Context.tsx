'use client';

import { createContext, useState } from "react";

type User = { // same as interface User {} sans =
    id: string
    email: string   
    username: string
}

type AuthContextType = {
    user: User | null
    login: (email: string, password: string) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType|null>(null); // file tsx required

export default function AuthProvider ({children}) {

    const [user, setUSer] = useState<User|null>(null)

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

            const data:any = response.json();
            setUSer(data.user);
            localStorage.setItem('user', JSON.stringify(user))
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