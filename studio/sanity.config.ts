import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { CogIcon } from "@sanity/icons/Cog";
import { schemaTypes } from "./schemaTypes";

const singletons = ["siteSettings"];

export default defineConfig({
  name: "default",
  title: "Ameerul Hady Portfolio",
  projectId: "khwggy75",
  dataset: "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site settings")
              .icon(CogIcon)
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),
            S.divider(),
            ...S.documentTypeListItems().filter((i) => !singletons.includes(i.getId() ?? "")),
          ]),
    }),
    visionTool({ defaultApiVersion: "2026-02-01" }),
  ],
  schema: {
    types: schemaTypes,
    templates: (templates) => templates.filter(({ schemaType }) => !singletons.includes(schemaType)),
  },
  document: {
    actions: (input, { schemaType }) =>
      singletons.includes(schemaType)
        ? input.filter(({ action }) => action && ["publish", "discardChanges", "restore"].includes(action))
        : input,
  },
});
