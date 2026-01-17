import React, { useEffect, useState } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { DayPicker } from 'react-day-picker'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Label } from './ui/label'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Calendar } from "@/components/ui/calendar"
import { Toaster } from "@/components/ui/sonner"
import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { CalendarIcon } from 'lucide-react'
import { Input } from "@/components/ui/input"


const formSchema = z.object({
  firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
  lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Veuillez saisir un email valide"),
  date: z.date({
    // @ts-expect-error
    required_error: "Veuillez sélectionner une date",
    invalid_type_error: "Veuillez sélectionner une date valide"
  })
})

type FormData = z.infer<typeof formSchema>

const ScheduleDialog = () => {
  const [open, setOpen] = useState(false);
  const [timeZone, setTimeZone] = React.useState<string | undefined>(undefined)

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
  }, [])

  const { register, handleSubmit, setValue, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })
  const date = watch("date"); // instead useState

  const onSubmit = async (data: FormData) => {
    const formData = new FormData();
    formData.append('firstName', data.firstName)
    formData.append('lasttName', data.lastName)
    formData.append('email', data.email)
    formData.append('date', data.date.toISOString())
    // suite du code backend
  }

  return (
    <>
      <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
        <DialogPrimitive.Trigger>
          <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer">
            Prendre RDV ?
          </motion.button>
        </DialogPrimitive.Trigger>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm" >
              </motion.div>
            </DialogPrimitive.Overlay>
            <DialogPrimitive.Content asChild>
              <motion.div className='fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-2xl bg-white p-6 shadow-2xl border border-zinc-200 duration-200'>
                <div className='flex flex-col space-y-4'>
                  <div className="space-y-1.5 pb-4 text-center sm:text-left ">
                    <DialogPrimitive.Title>Prendre Rendez Vous</DialogPrimitive.Title>
                    <DialogPrimitive.Description>Nous sommes ouverts  </DialogPrimitive.Description>
                  </div>
                </div>
                <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2 ">
                      <Label htmlFor="firstName">Prénom</Label>
                      <input {...register("firstName")} type="text" className='flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all cursor-pointer' placeholder='Prénom'></input>
                      {errors.firstName && (<span className="text-xs text-red-500">{errors.firstName.message}</span>)}
                    </div>
                    <div className="space-y-2 ">
                      <Label htmlFor="lastName">Nom</Label>
                      <input {...register("lastName")} type="text" className='flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all cursor-pointer' placeholder='Nom'></input>
                      {errors.lastName && (<span className="text-xs text-red-500">{errors.lastName.message}</span>)}
                    </div>
                  </div>
                  <div className='space-y-2'>
                    <div className="space-y-2 ">
                      <Label htmlFor="email">Email</Label>
                      <input {...register("email")} type="email" className='flex h-10 w-full rounded-md border border-zinc-300 bg-transparent px-3 py-2 text-sm placeholder:text-zinc-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400 transition-all cursor-pointer' placeholder='Nom'></input>
                      {errors.email && (<span className="text-xs text-red-500">{errors.email.message}</span>)}
                    </div>
                  </div>
                  <div className='space-y-2 flex flex-col'>
                    <Label htmlFor="date">Date préférée</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className={cn("w-full justify-start text-left font-normal border-zinc-300 bg-transparent cursor-pointer hover:bg-zinc-300 hover:text-zinc-900 cursor-pointer text-zinc-900")}>
                          <CalendarIcon className='mr-2 h-4 w-4 opacity-50' />
                          <span>Choisir une date</span>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent align="start" className='w-auto p-0 z-[60]'>
                        <Calendar mode="single" timeZone={timeZone} disabled={{ dayOfWeek: [0, 1] }} selected={date} onSelect={(d) => {
                          if (d) {
                            setValue("date", d, { shouldValidate: true })
                          }
                        }} initialFocus />
                      </PopoverContent>
                    </Popover>
                    <div className="flex flex-col gap-3">
                      <Label htmlFor="time-picker" className="px-1">
                        Time
                      </Label>
                      <Input
                        type="time"
                        id="time-picker"
                        step="1"
                        defaultValue="10:30:00"
                        className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end pt-4">
                    <DialogPrimitive.Close asChild>
                      <Button className="mr-2 px-4 py-2 rounded-md text-sm font-md hover:bg-zinc-300 hover:text-zinc-900 cursor-pointer transition-color" variant="outline">Cancel</Button>
                    </DialogPrimitive.Close>
                    <Button type="submit" className="mr-2 px-4 py-2 rounded-md text-sm font-md hover:bg-zinc-300 hover:text-zinc-900 cursor-pointer transition-color">Confirm</Button>
                  </div>
                </form>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </DialogPrimitive.Root>
    </>
  )
}

export default ScheduleDialog
