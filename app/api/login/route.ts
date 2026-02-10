import { type NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import {hash, compare} from 'bcryptjs'
import { prisma } from "@/lib/prisma";
import { sign } from 'jsonwebtoken'

const loginSchema = z.object({
    email : z.string().email("l'email est invalide"),
    password  : z.string().min(3,"password is too short")
})

interface User {
    id : number
    email: string
    password: string
}

const generateToken = (user: any) => {
    return sign({id: user.id, email: user.email}, 'abcdsecret')
}

// handler 
export async function POST(request : NextRequest){

    try {
        const body = await request.json();
        const validatedBody = loginSchema.safeParse(body)

        if(!validatedBody.success){
            throw new Error('invalid Data')
            // return NextResponse.json({message: validatedBody.error})
        }

        const {email,password} = validatedBody.data
console.log('email', email)
        const user: any = await prisma.user.findFirst({where: {email}});
        if(!user) {
            return NextResponse.json({message: 'Wrong data'})
        }

        const isPasswordMatched = await compare(password, user.password);
        if (!isPasswordMatched) {
            return NextResponse.json({message: 'Wrong Data'})
        }

        delete user.password;

        return NextResponse.json({token: generateToken(user), ...user})

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Server fell down'},{status: 500})
    }

}

export async function PATCH(){ // portion

}

export async function PUT(){ // mise a jour complete

}

export async function DELETE(){

}

export async function GET(){
    try {

        // traitement qu'on a besoin
    
       return NextResponse.json({message : "Heyyy Pascal"})
        
    } catch (error) {
        console.error(error);

    }
}