-- CreateEnum
CREATE TYPE "FavoriteColorEnum" AS ENUM ('VERMELHO', 'LARANJA', 'AMARELO', 'VERDE', 'AZUL', 'INDIGO', 'VIOLETA');

-- CreateTable
CREATE TABLE "UserForm" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "cpf" VARCHAR(20) NOT NULL,
    "email" VARCHAR(120) NOT NULL,
    "favorite_color" "FavoriteColorEnum",
    "observation" TEXT,

    CONSTRAINT "UserForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserForm_id_key" ON "UserForm"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserForm_email_key" ON "UserForm"("email");
