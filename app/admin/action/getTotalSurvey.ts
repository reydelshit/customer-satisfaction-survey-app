'use server';

import { prisma } from '@/prisma/db';

export async function getAllSurvey() {
  return await prisma.feedback.findMany();
}
