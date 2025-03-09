import fs from "fs";
import path from "path";
import { promises as dns } from "dns";
import matter from "gray-matter";
// get all the mdx files from the dir
function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}
// Read data from those files
function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return matter(rawContent);
}
// present the mdx data and metadata
function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);

  return mdxFiles.map((file) => {
    const { data: metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), "app", "blog", "contents"));
}
export function getTermsOfServices() {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "terms-of-services")
  );
}
export function getPrivacyPolicy() {
  return getMDXData(path.join(process.cwd(), "src", "app", "privacy-policy"));
}

export function formatDate(date: string, includeRelative: boolean): string {
  const currentDate = new Date();

  // Ensure the date includes a time component
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const diff = currentDate.getTime() - targetDate.getTime();

  const secondsAgo = Math.floor(diff / 1000);
  const minutesAgo = Math.floor(secondsAgo / 60);
  const hoursAgo = Math.floor(minutesAgo / 60);
  const daysAgo = Math.floor(hoursAgo / 24);
  const weeksAgo = Math.floor(daysAgo / 7);
  const monthsAgo = Math.floor(daysAgo / 30.44); // Approximate average days per month
  const yearsAgo = Math.floor(monthsAgo / 12);

  let formattedDate = "";

  if (secondsAgo < 60) {
    formattedDate = `${secondsAgo} second${secondsAgo > 1 ? "s" : ""} ago`;
  } else if (minutesAgo < 60) {
    formattedDate = `${minutesAgo} minute${minutesAgo > 1 ? "s" : ""} ago`;
  } else if (hoursAgo < 24) {
    formattedDate = `${hoursAgo} hour${hoursAgo > 1 ? "s" : ""} ago`;
  } else if (daysAgo < 7) {
    formattedDate = `${daysAgo} day${daysAgo > 1 ? "s" : ""} ago`;
  } else if (weeksAgo < 4) {
    formattedDate = `${weeksAgo} week${weeksAgo > 1 ? "s" : ""} ago`;
  } else if (monthsAgo < 12) {
    formattedDate = `${monthsAgo} month${monthsAgo > 1 ? "s" : ""} ago`;
  } else {
    formattedDate = `${yearsAgo} year${yearsAgo > 1 ? "s" : ""} ago`;
  }

  const fullDate = targetDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return includeRelative ? `${formattedDate}` : fullDate;
}

export async function validateEmailAddress(
  emailAddress: string
): Promise<boolean> {
  const invalidDomains = [
    "tempmail.com",
    "example.com",
    "email.com",
    "test.com",
  ];

  const [, domain] = emailAddress.split("@");

  if (!domain || invalidDomains.includes(domain)) {
    console.log("Le domaine appartient aux emails interdits");
    return false;
  }

  try {
    const mxRecords = await dns.resolveMx(domain);

    if (!mxRecords || mxRecords.length === 0) {
      console.log("Aucun enregistrement MX trouvé pour le domaine");
      return false;
    }
    return true;
  } catch (error: unknown) {
    console.error(
      `Erreur lors de la résolution MX: ${
        (error as NodeJS.ErrnoException).code
      }`
    );
    return false;
  }
}
