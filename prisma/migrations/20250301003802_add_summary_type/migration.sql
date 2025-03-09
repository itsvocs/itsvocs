-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "summary" TEXT NOT NULL DEFAULT '';

-- CreateIndex
CREATE INDEX "Blog_summary_idx" ON "Blog"("summary");
