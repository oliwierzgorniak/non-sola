-- CreateTable
CREATE TABLE "Message" (
    "id" SERIAL NOT NULL,
    "author" INTEGER NOT NULL,
    "receipient" INTEGER NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);
