/*
  Warnings:

  - You are about to drop the column `product` on the `Feedback` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Feedback" DROP COLUMN "product";

-- CreateTable
CREATE TABLE "Cake" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Cake_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CakeToFeedback" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CakeToFeedback_AB_unique" ON "_CakeToFeedback"("A", "B");

-- CreateIndex
CREATE INDEX "_CakeToFeedback_B_index" ON "_CakeToFeedback"("B");

-- AddForeignKey
ALTER TABLE "_CakeToFeedback" ADD CONSTRAINT "_CakeToFeedback_A_fkey" FOREIGN KEY ("A") REFERENCES "Cake"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CakeToFeedback" ADD CONSTRAINT "_CakeToFeedback_B_fkey" FOREIGN KEY ("B") REFERENCES "Feedback"("id") ON DELETE CASCADE ON UPDATE CASCADE;
