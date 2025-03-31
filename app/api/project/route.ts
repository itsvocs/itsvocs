import { db } from "@/db";

export async function GET() {
  try {
    const projects = await db.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        image: true,
        technologie: true,
        github: true,
        link: true,
        blog: true,
      },
      orderBy: {
        id: "desc",
      },
    });

    return Response.json(projects);
  } catch (error) {
    return Response.json(
      { message: "Erreur lors de la récupération des projets", error },
      { status: 500 }
    );
  }
}
