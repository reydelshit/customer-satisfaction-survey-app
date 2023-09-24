'use server';

import { prisma } from '@/prisma/db';

export async function updateCakeFunction({
  id,
  cake,
  description,
  image,
}: {
  id: number;
  cake: string;
  description: string;
  image: string;
}) {
  return await prisma.cake.update({
    where: {
      id: id,
    },
    data: {
      name: cake,
      description: description,
      image: image,
    },
  });
}
