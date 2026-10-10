import Link from "next/link";

export default function NotFound() {
  return (
    <main className="wrap case">
      <div className="case-head">
        <p className="label">Error 404</p>
        <h1 className="display">No such model.</h1>
        <p className="measure" style={{ color: "var(--color-ink-2)" }}>That page does not exist or has moved.</p>
        <Link className="btn press" href="/work" style={{ justifySelf: "start" }}>See all work</Link>
      </div>
    </main>
  );
}
