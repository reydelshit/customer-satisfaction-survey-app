'use server';

import { prisma } from '@/prisma/db';

export async function loginAdmin({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const accountExist = await prisma.account.findFirst({
    where: {
      email: username,
      password: password,
    },
  });

  if (accountExist) {
    await prisma.account.update({
      where: {
        id: accountExist.id,
      },
      data: {
        isLoggedIn: true,
      },
    });
  }

  return accountExist;
}
