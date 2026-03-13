import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Streamsight notes on process flow visualization, workflow clarity, and operational context.",
  alternates: {
    canonical: "/notes",
  },
};

const notes = [
  {
    href: "/notes/what-is-streamsight",
    title: "What Streamsight Is",
    description:
      "A short introduction to the Streamsight project and the problem space it focuses on.",
  },
  {
    href: "/notes/why-process-flow-visualization-matters",
    title: "Why Process Flow Visualization Matters",
    description:
      "Why process-heavy teams struggle when diagrams, notes, and workflows drift apart.",
  },
  {
    href: "/notes/building-streamsight",
    title: "Building Streamsight",
    description:
      "A note on the direction of the project and why the public site is intentionally straightforward.",
  },
  {
    href: "/notes/how-teams-lose-operational-context",
    title: "How Teams Lose Operational Context",
    description:
      "Why growing systems become harder to reason about when context lives in too many places.",
  },
  {
    href: "/notes/when-static-diagrams-break-down",
    title: "When Static Diagrams Break Down",
    description:
      "A short note on why static diagrams stop helping once systems and workflows change too often.",
  },
  {
    href: "/notes/clearer-workflow-handoffs",
    title: "Clearer Workflow Handoffs",
    description:
      "How better visibility around handoffs can reduce ambiguity in process-heavy teams.",
  },
];

export default function NotesPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Notes</p>
        <h1>Notes on workflows, visualization, and operational clarity</h1>
        <p>
          This section collects short notes related to the Streamsight project
          and the broader problem of understanding complex processes.
        </p>

        <div className="notes-list">
          {notes.map((note) => (
            <article className="note-card" key={note.href}>
              <p className="note-meta">Streamsight Note</p>
              <h2>
                <Link href={note.href}>{note.title}</Link>
              </h2>
              <p>{note.description}</p>
            </article>
          ))}
        </div>
      </article>
    </main>
  );
}
