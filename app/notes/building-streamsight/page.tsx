import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Streamsight",
  description:
    "A short note on the direction of Streamsight and why the project is starting with a simple public site.",
  alternates: {
    canonical: "/notes/building-streamsight",
  },
};

export default function BuildingStreamsightPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Note</p>
        <h1>Building Streamsight</h1>
        <p>
          Streamsight is starting with a focused public site that explains the
          project, the problem area, and the direction of the work. That keeps
          the emphasis on clarity instead of pretending the product is already
          fully built out.
        </p>
        <p>
          As Streamsight evolves, this site can grow into a stronger library of
          examples, notes, and product information. For now, the important
          thing is to establish a clear and consistent identity around the
          Streamsight name.
        </p>
      </article>
    </main>
  );
}
