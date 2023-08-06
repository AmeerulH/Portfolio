import type { Metadata } from "next";
import Projects from "components/projects";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Portfolio</h1>
      <Projects />
    </section>
  );
}
