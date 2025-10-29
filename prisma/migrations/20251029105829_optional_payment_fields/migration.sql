-- AlterTable
ALTER TABLE "public"."inscriptions" ALTER COLUMN "paymentMethod" DROP NOT NULL,
ALTER COLUMN "paymentReference" DROP NOT NULL;
