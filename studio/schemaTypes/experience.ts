import { defineArrayMember, defineField, defineType } from "sanity";
import { CaseIcon } from "@sanity/icons/Case";

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({ name: "company", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", validation: (r) => r.required() }),
    defineField({ name: "website", type: "url" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "startDate", type: "date", validation: (r) => r.required() }),
    defineField({
      name: "endDate",
      type: "date",
      description: "Leave empty for a current role.",
    }),
    defineField({ name: "summary", type: "text", rows: 3, description: "One or two sentences on scope and impact." }),
    defineField({
      name: "highlights",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      description: "Outcome-led bullets. Lead with the result.",
    }),
    defineField({
      name: "stack",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "tech" }] })],
    }),
    defineField({ name: "showOnResume", type: "boolean", initialValue: true }),
  ],
  orderings: [{ title: "Newest first", name: "dateDesc", by: [{ field: "startDate", direction: "desc" }] }],
  preview: { select: { title: "company", subtitle: "role" } },
});
