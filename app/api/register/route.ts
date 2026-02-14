import { type NextRequest, NextResponse } from "next/server";
import {z} from 'zod'
import {hash, compare} from 'bcryptjs'
import { prisma } from "@/lib/prisma";
import { sign } from 'jsonwebtoken'

const loginSchema = z.object({
    email : z.string().email("l'email est invalide"),
    password  : z.string().min(3,"password is too short"),
    username  : z.string().min(3,"username is too short"),
})

interface User {
    id : number
    email: string
    password: string
    username: string
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
            // throw new Error('invalid Data')
            return NextResponse.json({message: validatedBody.error.format()})
        }

        const {email,password, username} = validatedBody.data
        const isUserFound = await prisma.user.findFirst({where: {email}});
        if(isUserFound) {
           return NextResponse.json({message : 'user already exists' }) 
        }

        const hashedPassword = await hash(password, 10)
        const user: any = await prisma.user.create({data: {email, password : hashedPassword, username}});

        delete user.password;


        return NextResponse.json({token: generateToken(user), ...user})

    } catch (error) {
        console.log(error);
        return NextResponse.json({message: 'Server fell down'},{status: 500})
    }

}
