import JobPicker from "components/job-picker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uses",
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function PortfolioPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Portfolio</h1>
      <JobPicker />
    </section>
  );
}
