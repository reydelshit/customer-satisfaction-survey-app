/*
  Warnings:

  - Changed the type of `recommendation` on the `Feedback` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "recommendation",
ADD COLUMN     "recommendation" BOOLEAN NOT NULL;
