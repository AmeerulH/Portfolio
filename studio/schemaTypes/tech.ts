import { defineField, defineType } from "sanity";
import { TagIcon } from "@sanity/icons/Tag";

export const tech = defineType({
  name: "tech",
  title: "Technology",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({ name: "name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: ["frontend", "backend", "data", "infrastructure", "testing", "tooling"],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
  ],
  preview: { select: { title: "name", subtitle: "category" } },
});
