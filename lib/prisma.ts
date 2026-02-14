import {PrismaClient} from '@prisma/client';

import {PrismaPg} from '@prisma/adapter-pg'
const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL}); // nouvelle v de Prisma

// ce fichier prepare le client à recevoir / envoyer des infos avec le backend 
export const prisma = new PrismaClient({adapter: adapter});
