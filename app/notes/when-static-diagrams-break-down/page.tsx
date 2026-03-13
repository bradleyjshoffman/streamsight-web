import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "When Static Diagrams Break Down",
  description:
    "A note on why static diagrams stop helping once workflows and systems change too often.",
  alternates: {
    canonical: "/notes/when-static-diagrams-break-down",
  },
};

export default function WhenStaticDiagramsBreakDownPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Note</p>
        <h1>When Static Diagrams Break Down</h1>
        <p>
          Static diagrams can be useful at the start of a project, but they get
          weaker as workflows change more frequently. The picture stays frozen
          while the system keeps moving.
        </p>
        <p>
          That is where visualization problems begin. Teams still need a map,
          but they need one that supports iteration, inspection, and updates
          without turning every change into documentation debt.
        </p>
      </article>
    </main>
  );
}
