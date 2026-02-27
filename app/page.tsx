export default function Home() {
  return (
    <main className="page-shell">
      <div className="ambient-shape shape-one" aria-hidden="true" />
      <div className="ambient-shape shape-two" aria-hidden="true" />
      <section className="hero-card">
        <p className="eyebrow">STREAMSIGHT</p>
        <h1>Coming Soon</h1>
        <p className="lead">
          Streamsight turns complex process flows into a clear, interactive
          system view so teams can visualize, analyze, and update workflows
          with exceptional speed and clarity.
        </p>
        <p className="launch-note">Public launch is targeted for August 2026.</p>
        <div className="pill-row" aria-label="Planned launch areas">
          <span>Flow Visualization</span>
          <span>Operational Context</span>
          <span>Faster Decisions</span>
        </div>
      </section>
    </main>
  );
}
