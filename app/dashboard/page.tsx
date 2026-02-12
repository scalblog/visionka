"use client";

import { useAuthContext } from "@/lib/auth-Context"
import { useRouter } from "next/navigation"; // dans navigation
import { useEffect } from "react";

export default function Dashboard() {

    
    const {user, isLogged, logout} = useAuthContext();
    const Router = useRouter();
    console.log('user dashboard', user)
    useEffect(()=>{
        if (!user && !isLogged) {
            console.log('user not found', user)
            Router.push('/login')
        }

    }, [Router, user, isLogged])

    // if(!user) {
    //     Router.push('/login');
    // }
    
    return(
        <>
        test
        </>
    )
}