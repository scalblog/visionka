"use client";

import { useAuthContext } from "@/lib/auth-Context"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
    const {user, isLoading, logout} = useAuthContext();
    const router = useRouter();

    useEffect(() => {
        if (!isLoading && !user) {
            router.push('/login');
        }
    }, [isLoading, user, router]);

    if (isLoading) {
        return <p>Chargement...</p>;
    }

    if (!user) {
        return null;
    }

    return(
        <div className="p-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <button
                    onClick={() => {
                        logout();
                        router.push('/login');
                    }}
                    className="px-4 py-2 rounded-md text-sm bg-zinc-900 text-white hover:bg-zinc-700 transition-colors"
                >
                    Se déconnecter
                </button>
            </div>
            <p>Bienvenue, {user.username || user.email}</p>
        </div>
    )
}
