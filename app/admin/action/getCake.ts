'use server';

import { prisma } from '@/prisma/db';

export async function getAllCake() {
  return await prisma.cake.findMany();
}
