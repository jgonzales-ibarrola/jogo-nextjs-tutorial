-- CreateTable
CREATE TABLE "Hello" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,
    "visitDate" TIMESTAMP(3) NOT NULL,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hello_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Hello_content_idx" ON "Hello"("content");
