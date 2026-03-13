import Link from "next/link";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Streamsight",
      url: "https://streamsight.co",
      description:
        "An early-stage process flow visualization project for clearer operational context.",
    },
    {
      "@type": "Organization",
      name: "Streamsight",
      url: "https://streamsight.co",
      description:
        "An early-stage software project focused on interactive process flow visualization.",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Streamsight?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Streamsight is an early-stage software project focused on turning complex process flows into interactive, easier-to-read operational views.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Streamsight for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It is being shaped for teams that work with process-heavy systems and need clearer operational context for analysis, communication, and decision-making.",
          },
        },
        {
          "@type": "Question",
          name: "Is Streamsight publicly available?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not yet. Streamsight is still in early development and is currently presented as an early preview.",
          },
        },
        {
          "@type": "Question",
          name: "When will Streamsight launch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Public launch timing is still tentative. Streamsight is currently presented as an early preview while the core product is being built.",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <main className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="ambient-shape shape-one" aria-hidden="true" />
      <div className="ambient-shape shape-two" aria-hidden="true" />
      <section className="hero-card">
        <p className="eyebrow">STREAMSIGHT</p>
        <p className="status-kicker">Early Preview</p>
        <h1>Process Flow Visualization for Operational Clarity</h1>
        <p className="lead">
          Streamsight is an early-stage software project focused on turning
          complex process flows into a clear, interactive system view so teams
          can visualize workflows, analyze dependencies, and work with better
          operational context.
        </p>
        <p className="launch-note">
          Early-stage project. Product direction and launch timing are still
          taking shape.
        </p>
        <div className="pill-row" aria-label="Planned launch areas">
          <span>Flow Visualization</span>
          <span>Operational Context</span>
          <span>Faster Decisions</span>
        </div>
        <div className="cta-row" aria-label="Streamsight site sections">
          <Link className="primary-link" href="/about">
            About Streamsight
          </Link>
          <Link className="secondary-link" href="/notes">
            Read Streamsight Notes
          </Link>
        </div>

        <div className="content-grid">
          <section className="content-panel" aria-labelledby="what-it-is">
            <h2 id="what-it-is">What Streamsight is</h2>
            <p>
              The project is centered on interactive visualization for
              process-heavy environments where static diagrams become hard to
              maintain, hard to interpret, and disconnected from day-to-day
              operational decisions.
            </p>
            <p>
              The aim is a clearer system view that helps teams inspect flows,
              understand relationships, and update working knowledge with less
              friction.
            </p>
          </section>

          <section className="content-panel" aria-labelledby="who-it-helps">
            <h2 id="who-it-helps">Who it is being built for</h2>
            <p>
              Streamsight is being shaped for operations, engineering, and
              process-oriented teams that need to reason about connected steps,
              handoffs, constraints, and system behavior.
            </p>
            <p>
              That can include internal workflows, technical processes, and
              operational systems where clarity matters more than presentation
              polish.
            </p>
          </section>

          <section className="content-panel" aria-labelledby="current-stage">
            <h2 id="current-stage">Current stage</h2>
            <p>
              This site is intentionally modest because Streamsight is still at
              an early stage. It is here to explain the problem space and the
              direction of the project without pretending the product is fully
              mature.
            </p>
            <p>
              Expect the site to expand over time as the product direction,
              workflows, and examples become more stable.
            </p>
          </section>

          <section className="content-panel" aria-labelledby="why-this-matters">
            <h2 id="why-this-matters">Why this problem matters</h2>
            <p>
              Teams often rely on stale diagrams, fragmented notes, and mental
              models that do not keep pace with changing systems. That slows
              down analysis and makes decisions harder than they should be.
            </p>
            <p>
              Better flow visualization can improve shared understanding before
              a team reaches for heavier documentation, process redesign, or
              larger software rollouts.
            </p>
          </section>
        </div>

        <section className="faq-panel" aria-labelledby="faq-heading">
          <div className="section-heading">
            <p className="section-label">FAQ</p>
            <h2 id="faq-heading">Common questions</h2>
          </div>
          <div className="faq-list">
            <article className="faq-item">
              <h3>What is Streamsight?</h3>
              <p>
                Streamsight is an early-stage software project focused on
                interactive process flow visualization for clearer operational
                understanding.
              </p>
            </article>
            <article className="faq-item">
              <h3>Who is it for?</h3>
              <p>
                It is being developed for teams that work with process-heavy
                systems and need a better way to inspect flows, relationships,
                and changes over time.
              </p>
            </article>
            <article className="faq-item">
              <h3>Is the product available yet?</h3>
              <p>
                No. Streamsight is still in early development and is currently
                presented as an early preview.
              </p>
            </article>
            <article className="faq-item">
              <h3>Why is the website so minimal?</h3>
              <p>
                The goal right now is to establish a clear public description of
                the problem area without presenting Streamsight as a fully
                launched commercial platform.
              </p>
            </article>
          </div>
        </section>

        <section className="content-panel spotlight-panel" aria-labelledby="brand-heading">
          <h2 id="brand-heading">More about Streamsight</h2>
          <p>
            To learn more about Streamsight, visit the about page, read the
            latest notes, or get in touch directly.
          </p>
          <div className="inline-link-row">
            <Link href="/about">About</Link>
            <Link href="/notes">Notes</Link>
          </div>
        </section>
      </section>
    </main>
  );
}
