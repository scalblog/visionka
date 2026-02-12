"use client";

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { email, z } from 'zod';
import { Button } from './ui/button';
import { Label } from './ui/label';
import axios from 'axios';
import { Toaster, toast } from 'sonner';
import { useAuthContext } from '@/lib/auth-Context';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  email: z.string().email("Veuillez saisir un email valide"),
  password: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
})

type FormData = z.infer<typeof formSchema>

const AdminForm = () => {
  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

const {login} = useAuthContext();
const Router = useRouter();

  const onSubmit = async (data: FormData) => {
//    const response = await login('test@example.com', 'secret123') // eviter const response = await... car typage void
     
    try {
      await login('test@example.com', 'secret123')
      Router.push("/dashboard")
    }
    catch(error) {
      Router.push("/login")
    } 
  }

  return (
    <>
    <Toaster  />
      <div className='pascal-glass fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-2xl border border-zinc-200 duration-200'>
        <h1 className='mb-6'>Connectez-vous au Dashboard</h1>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-2 ">
            <Label htmlFor="email">Email</Label>
            <input {...register("email")} type="email" className='bg-white flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all' placeholder='Nom'></input>
            {errors.email && (<span className="text-xs text-red-500">{errors.email.message}</span>)}
          </div>
          <div className="space-y-2 ">
            <Label htmlFor="password">Mot de passe</Label>
            <input {...register("password")} type="password" className='bg-white flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all' placeholder='Nom'></input>
            {errors.password && (<span className="text-xs text-red-500">{errors.password.message}</span>)}
          </div>
          <div className="flex justify-end pt-4">
            <Button type="submit" className="px-4 py-2 rounded-md text-sm font-md hover:bg-zinc-100 transition-color">Se connecter</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export default AdminForm
