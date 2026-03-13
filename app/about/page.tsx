import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn what Streamsight is, who it is being built for, and why process flow visualization matters.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="content-page">
      <article className="content-page-card">
        <p className="eyebrow">About Streamsight</p>
        <h1>What Streamsight is trying to make clearer</h1>
        <p>
          Streamsight is an early-stage software project focused on process flow
          visualization. The goal is to help teams see how connected steps,
          decisions, dependencies, and handoffs fit together in one operational
          view.
        </p>
        <p>
          Many teams operate with a mix of stale diagrams, scattered notes, and
          local knowledge that does not travel well across the organization.
          Streamsight is being shaped around the idea that clearer visual
          context can make workflows easier to understand and easier to improve.
        </p>

        <h2>Who Streamsight is for</h2>
        <p>
          Streamsight is being designed for operations, engineering, and
          process-oriented teams that need to reason about systems instead of
          isolated tasks. That includes teams working across internal
          workflows, technical processes, and operational environments where
          context changes quickly.
        </p>

        <h2>Why the site is still simple</h2>
        <p>
          The project is still taking shape, so the public site stays focused
          on the problem area and the core concept. Over time, Streamsight will
          add more examples, notes, and product detail as the direction
          becomes more concrete.
        </p>
      </article>
    </main>
  );
}
