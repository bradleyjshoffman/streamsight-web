import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Teams Lose Operational Context",
  description:
    "Why teams lose operational context as workflows grow and knowledge becomes fragmented.",
  alternates: {
    canonical: "/notes/how-teams-lose-operational-context",
  },
};

export default function HowTeamsLoseOperationalContextPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Note</p>
        <h1>How Teams Lose Operational Context</h1>
        <p>
          Operational context usually does not disappear all at once. It gets
          diluted across diagrams, tickets, documents, dashboards, and the
          memory of a few people who know how the system really works.
        </p>
        <p>
          As systems evolve, that fragmentation makes workflows harder to
          inspect and explain. Streamsight is rooted in the idea that clearer
          flow visualization can help teams rebuild a shared view of how their
          processes actually move.
        </p>
      </article>
    </main>
  );
}
