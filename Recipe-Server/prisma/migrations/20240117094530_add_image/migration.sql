-- CreateTable
CREATE TABLE "Recipe" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "image" TEXT,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);
