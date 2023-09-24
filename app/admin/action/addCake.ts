'use server';

import { prisma } from '@/prisma/db';

export async function addCake({
  cake,
  description,
  image,
}: {
  cake: string;
  description: string;
  image: string;
}) {
  await prisma.cake.create({
    data: {
      name: cake,
      description: description,

      image: image,
    },
  });
}
