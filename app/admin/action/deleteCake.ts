'use server';

import { prisma } from '@/prisma/db';

export async function deleteCake(id: number) {
  return await prisma.cake.delete({
    where: {
      id: id,
    },
  });
}
