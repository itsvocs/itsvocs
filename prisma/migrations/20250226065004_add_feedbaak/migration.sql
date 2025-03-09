-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "rating" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "Blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
