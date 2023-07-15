import JobPicker from "components/job-picker";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function ExperiencePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-8">Experience</h1>
      <JobPicker />
    </section>
  );
}
