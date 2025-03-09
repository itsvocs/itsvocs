-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "github" TEXT NOT NULL DEFAULT 'https://github.com/itsvocs',
ALTER COLUMN "link" DROP NOT NULL;
