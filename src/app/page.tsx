import Link from "next/link";

export default function Page() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Crave Developer Documentation</h1>
        <p>Simple, intuitive, visually cohesive, and engineered for long-term relevance. This documentation backs the Crave C++ browser ecosystem.</p>
        <div className="buttons" style={{ marginTop: 16 }}>
          <Link className="button primary" href="/docs">Open Documentation</Link>
          <Link className="button secondary" href="/blog">Read Blog</Link>
        </div>
      </section>
      <div className="buttons">
        <Link className="button primary" href="/docs">Open Documentation</Link>
        <Link className="button secondary" href="/blog">Read Blog</Link>
      </div>

      <div className="section">
        <h2>Project Overview</h2>
        <p>[TO BE ADDED LATER]</p>
      </div>

      <div className="section">
        <h2>Mission & Vision</h2>
        <p>[SECTION DESCRIPTION PLACEHOLDER]</p>
      </div>

      <div className="section">
        <h2>Quick Access</h2>
        <div className="grid grid-3 liquid-bg">
          <div className="card">
            <h3>Documentation</h3>
            <p>[TO BE ADDED LATER]</p>
            <Link className="button secondary" href="/docs">Open</Link>
          </div>
          <div className="card">
            <h3>API Reference</h3>
            <p>[TO BE ADDED LATER]</p>
            <Link className="button secondary" href="/docs#api-reference">Open</Link>
          </div>
          <div className="card">
            <h3>Roadmap</h3>
            <p>[TO BE ADDED LATER]</p>
            <Link className="button secondary" href="/blog">Open</Link>
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Feature Showcase</h2>
        <div className="grid grid-3 liquid-bg">
          <div className="card"><h3>Security Model</h3><p>[SECTION DESCRIPTION PLACEHOLDER]</p></div>
          <div className="card"><h3>Performance Engine</h3><p>[SECTION DESCRIPTION PLACEHOLDER]</p></div>
          <div className="card"><h3>Extension Framework</h3><p>[SECTION DESCRIPTION PLACEHOLDER]</p></div>
        </div>
      </div>
    </div>
  );
}