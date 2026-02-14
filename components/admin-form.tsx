"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { Label } from './ui/label';
import { useAuthContext } from '@/lib/auth-Context';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const formSchema = z.object({
  email: z.string().email("Veuillez saisir un email valide"),
  password: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
})

type FormData = z.infer<typeof formSchema>

const AdminForm = () => {
  const { login } = useAuthContext();
  const router = useRouter();
  const [loginError, setLoginError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setLoginError(null);
      await login(data.email, data.password);
      router.push('/dashboard');
    } catch (error) {
      setLoginError("Email ou mot de passe incorrect");
    }
  }

  return (
    <>
      <div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-2xl border border-zinc-200 duration-200'>
        <h1 className='mb-6'>Connectez-vous au Dashboard</h1>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 ">
            <Label htmlFor="email">Email</Label>
            <input {...register("email")} type="email" className='flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all' placeholder='Email'></input>
            {errors.email && (<span className="text-xs text-red-500">{errors.email.message}</span>)}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="password">Mot de passe</Label>
            <input {...register("password")} type="password" className='flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all' placeholder='Mot de passe'></input>
            {errors.password && (<span className="text-xs text-red-500">{errors.password.message}</span>)}
          </div>
          {loginError && (<span className="text-xs text-red-500">{loginError}</span>)}
          <div className="flex justify-end pt-4">
            <Button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded-md text-sm font-md hover:bg-zinc-100 transition-color">
              {isSubmitting ? "Connexion..." : "Se connecter"}
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminForm
