/*
  Warnings:

  - You are about to drop the `_CakeToFeedback` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `product` to the `Feedback` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CakeToFeedback" DROP CONSTRAINT "_CakeToFeedback_A_fkey";

-- DropForeignKey
ALTER TABLE "_CakeToFeedback" DROP CONSTRAINT "_CakeToFeedback_B_fkey";

-- AlterTable
ALTER TABLE "Feedback" ADD COLUMN     "product" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CakeToFeedback";
