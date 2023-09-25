'use server';

import { prisma } from '@/prisma/db';

export async function getLoginSession() {
  return await prisma.account.findMany();
}
