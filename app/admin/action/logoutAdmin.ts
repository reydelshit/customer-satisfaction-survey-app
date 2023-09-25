'use server';

import { prisma } from '@/prisma/db';

export async function logoutAdmin(storedId: number) {
  return await prisma.account.update({
    where: {
      id: storedId,
    },
    data: {
      isLoggedIn: false,
    },
  });
}
