import Link from "next/link";

export default function NotFound() {
  return (
    <section className="grid place-content-center h-screen">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        404 - Seite nicht gefunden
      </h1>
      <p className="mb-4">Die Seite, die Sie suchen, existiert nicht.</p>
      <Link href={"/"}>Zur Startseite.</Link>
    </section>
  );
}
