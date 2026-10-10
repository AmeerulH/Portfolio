import { defineArrayMember, defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons/Cog";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({ name: "role", type: "string", description: "Current title, e.g. Senior Frontend Developer at Deriv." }),
    defineField({ name: "headline", type: "text", rows: 2, description: "The one-line positioning statement in the hero." }),
    defineField({ name: "summary", type: "text", rows: 4, description: "Short bio used in the intro and the resume." }),
    defineField({
      name: "availability",
      type: "string",
      options: {
        list: [
          { title: "Open to opportunities", value: "open" },
          { title: "Limited availability", value: "limited" },
          { title: "Not available", value: "closed" },
        ],
        layout: "radio",
      },
      initialValue: "open",
    }),
    defineField({ name: "availabilityNote", type: "string", description: "e.g. Taking on freelance projects from November." }),
    defineField({ name: "email", type: "string", validation: (r) => r.email() }),
    defineField({ name: "location", type: "string" }),
    defineField({
      name: "socials",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "social",
          fields: [
            defineField({ name: "label", type: "string", validation: (r) => r.required() }),
            defineField({ name: "url", type: "url", validation: (r) => r.required() }),
          ],
          preview: { select: { title: "label", subtitle: "url" } },
        }),
      ],
    }),
    defineField({
      name: "capabilities",
      type: "array",
      description: "Areas you can own, e.g. Frontend architecture, APIs and data, Infrastructure.",
      of: [
        defineArrayMember({
          type: "object",
          name: "capability",
          fields: [
            defineField({ name: "title", type: "string", validation: (r) => r.required() }),
            defineField({ name: "description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        }),
      ],
    }),
    defineField({
      name: "education",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "educationEntry",
          fields: [
            defineField({ name: "institution", type: "string", validation: (r) => r.required() }),
            defineField({ name: "qualification", type: "string" }),
            defineField({ name: "period", type: "string" }),
          ],
          preview: { select: { title: "institution", subtitle: "qualification" } },
        }),
      ],
    }),
    defineField({ name: "certifications", type: "array", of: [defineArrayMember({ type: "string" })] }),
    defineField({
      name: "seoImage",
      type: "image",
      description: "Fallback social sharing image.",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
