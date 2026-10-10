"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <main className="wrap case">
      <div className="case-head">
        <p className="label">Something went wrong</p>
        <h1 className="display">This page failed to load.</h1>
        <button className="btn press" onClick={reset} style={{ justifySelf: "start" }}>Try again</button>
      </div>
    </main>
  );
}
