import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clearer Workflow Handoffs",
  description:
    "How clearer workflow handoffs help process-heavy teams reduce ambiguity and improve shared understanding.",
  alternates: {
    canonical: "/notes/clearer-workflow-handoffs",
  },
};

export default function ClearerWorkflowHandoffsPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Note</p>
        <h1>Clearer Workflow Handoffs</h1>
        <p>
          Many workflow failures happen at the edges between steps rather than
          inside a single step. Handoffs are where assumptions pile up and
          accountability becomes fuzzy.
        </p>
        <p>
          Better flow visibility can make those transition points easier to
          understand. That matters for teams trying to reduce ambiguity without
          adding more operational overhead.
        </p>
      </article>
    </main>
  );
}
