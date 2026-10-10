import { defineArrayMember, defineField, defineType } from "sanity";
import { RocketIcon } from "@sanity/icons/Rocket";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: RocketIcon,
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 80 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "kind",
      type: "string",
      options: {
        list: [
          { title: "Product", value: "product" },
          { title: "Client work", value: "clientWebsite" },
          { title: "Open source / side project", value: "openSource" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({ name: "featured", type: "boolean", initialValue: false, description: "Show on the home page." }),
    defineField({ name: "order", type: "number", description: "Lower numbers appear first." }),
    defineField({ name: "year", type: "string" }),
    defineField({
      name: "summary",
      type: "text",
      rows: 3,
      validation: (r) => r.required().max(240),
      description: "What it is and why it matters, in under 240 characters.",
    }),
    defineField({ name: "role", type: "string", description: "e.g. Sole developer, Tech lead, Frontend lead." }),
    defineField({
      name: "stack",
      type: "array",
      of: [defineArrayMember({ type: "reference", to: [{ type: "tech" }] })],
    }),
    defineField({
      name: "metrics",
      type: "array",
      description: "Real numbers only. Leave empty rather than guess.",
      of: [
        defineArrayMember({
          type: "object",
          name: "metric",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "value", type: "string", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        }),
      ],
    }),
    defineField({ name: "liveUrl", type: "url" }),
    defineField({
      name: "repo",
      type: "string",
      description: "GitHub repo as owner/name, e.g. AmeerulH/Portfolio. Stats are fetched live.",
      validation: (r) => r.regex(/^[\w.-]+\/[\w.-]+$/, { name: "owner/name" }).warning(),
    }),
    defineField({
      name: "cover",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", type: "string", validation: (r) => r.required() })],
    }),
    defineField({
      name: "gallery",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({
      name: "caseStudy",
      type: "array",
      description: "Problem, approach, architecture, outcome.",
      of: [
        defineArrayMember({ type: "block", styles: [{ title: "Normal", value: "normal" }, { title: "Heading", value: "h2" }, { title: "Subheading", value: "h3" }] }),
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", type: "string", validation: (r) => r.required() }),
            defineField({ name: "caption", type: "string" }),
          ],
        }),
      ],
    }),
    defineField({ name: "showOnResume", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Manual order", name: "manual", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "kind", media: "cover" } },
});
