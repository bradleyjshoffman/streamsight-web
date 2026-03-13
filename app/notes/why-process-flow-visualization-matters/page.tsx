import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Process Flow Visualization Matters",
  description:
    "Why better process flow visualization helps teams work with more clarity and context.",
  alternates: {
    canonical: "/notes/why-process-flow-visualization-matters",
  },
};

export default function WhyProcessFlowVisualizationMattersPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">Streamsight Note</p>
        <h1>Why Process Flow Visualization Matters</h1>
        <p>
          Complex workflows rarely stay still. Over time, diagrams drift away
          from reality, notes become fragmented, and teams rely more on memory
          than shared understanding.
        </p>
        <p>
          Process flow visualization matters because it gives people a clearer
          operational picture. That can improve analysis, reduce ambiguity, and
          help teams discuss change using the same frame of reference.
        </p>
      </article>
    </main>
  );
}
