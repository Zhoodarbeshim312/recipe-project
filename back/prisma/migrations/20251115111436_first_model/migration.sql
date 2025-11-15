-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "avatar" TEXT DEFAULT 'https://img.pikbest.com/png-images/20250228/user-profile-vector-flat-illustration-avatar-person-icon-gender-neutral-silhouette_11563975.png!sw800',
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" TEXT NOT NULL,
    "images" TEXT[],
    "description" TEXT NOT NULL,
    "ingredients" TEXT[],
    "instructions" TEXT[],
    "fill" INTEGER NOT NULL,
    "cookingTime" TEXT NOT NULL,
    "preparationTime" TEXT NOT NULL,
    "categories" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Nutrition" (
    "id" TEXT NOT NULL,
    "calories" INTEGER,
    "carbohydrate" INTEGER,
    "cleanCarbohydrate" INTEGER,
    "grease" INTEGER,
    "protein" INTEGER,
    "sodium" INTEGER,
    "recipeId" TEXT,

    CONSTRAINT "Nutrition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "recipeId" TEXT,
    "userId" TEXT,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Save" (
    "id" SERIAL NOT NULL,
    "userId" TEXT,
    "recipeId" TEXT,

    CONSTRAINT "Save_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Nutrition_recipeId_key" ON "Nutrition"("recipeId");

-- CreateIndex
CREATE UNIQUE INDEX "Save_recipeId_userId_key" ON "Save"("recipeId", "userId");

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Nutrition" ADD CONSTRAINT "Nutrition_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Save" ADD CONSTRAINT "Save_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Save" ADD CONSTRAINT "Save_recipeId_fkey" FOREIGN KEY ("recipeId") REFERENCES "Recipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
