import {PrismaClient} from '@prisma/client';

// ce fichier prepare le client à recevoir / envoyer des infos avec le backend 
export const prisma = new PrismaClient();
