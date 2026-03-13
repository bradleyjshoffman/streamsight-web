import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Streamsight Is",
  description:
    "A short introduction to Streamsight and its focus on process flow visualization.",
  alternates: {
    canonical: "/notes/what-is-streamsight",
  },
};

export default function WhatIsStreamsightPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Note</p>
        <h1>What Streamsight Is</h1>
        <p>
          Streamsight is an early-stage software project focused on process flow
          visualization. It sits in the space between static diagrams and the
          living operational systems that teams actually need to understand.
        </p>
        <p>
          The project is being shaped around a simple idea: when workflows,
          dependencies, and handoffs become hard to see, decision-making slows
          down. Better visualization can make those systems easier to inspect,
          explain, and improve.
        </p>
      </article>
    </main>
  );
}
