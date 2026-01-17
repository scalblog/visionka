import { prisma } from '@/lib/prisma';
import { formatDate } from 'date-fns';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

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

export async function CreateAppointments(formData: FormData) {
  const validatedField = formSchema.safeParse({
    firstName : formData.get('firstName'),
    laststName : formData.get('lastName'),
    email : formData.get('email'),
    date : formData.get('date') ? new Date(formData.get('date') as string) : undefined
  })

  if (!validatedField.success) {
    return {
      errors: validatedField.error.flatten().fieldErrors,
      globalMessage: 'Veuillez vérifier les data',
      statusSuccess: false
    }
  }

  try {
    const { firstName, lastName, email, date } = validatedField.data;
    await prisma.appointments.create({
      data: {
        firstName, lastName, email, date
      }
    })
    revalidatePath("/")
    return {
      statusSuccess: true,
      globalMessage: "Appointment créé avec succès"
    }
  } catch (error) {
    return {
      statusSuccess: false,
      globalMessage: "Appointment non créé : echec"
    }
  }
}
