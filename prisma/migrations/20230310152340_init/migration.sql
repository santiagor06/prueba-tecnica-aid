/*
  Warnings:

  - Added the required column `userId` to the `Sell` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Sell" ADD COLUMN     "userId" TEXT NOT NULL;
