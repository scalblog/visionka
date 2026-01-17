import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server"
import { CreateAppointments } from "../actions";

export async function POST(request:Request) {
  try {
    const body = await request.json(); // on aura le body de la req
    // 2 façons pour recupérer Body et insérer en BD
    // const firstName = body.firstName;
    // const lastName = body.lastName;
    // const email = body.email;
    // const date = body.date;

    const { firstName, lastName, email, date } = body;
    // 2e façon , + propre :
    const formData = new FormData();
    if (body.firstName) {
      formData.append('firstName', body.firstName);
    }
    if (body.lastName) {
      formData.append('lastName', body.lastName);
    }
    if (body.email) {
      formData.append('email', body.email);
    }
    if (body.date) {
      formData.append('date', body.date);
    }
    // await prisma.Appointments ... to be continued
    const result = await CreateAppointments(formData)
    if (result.statusSuccess) {
      return NextResponse.json({
        result, status: 201
      })
    } else {
      return NextResponse.json({
        result, status: 400
      })
    }

  } catch (error) {
    console.error('error', error)
    return NextResponse.json({message: 'Erreur dans createAppointment'})
  }
}
