---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/work/page.tsx","app/resume/page.tsx"]
---

# Surface brief: portfolio (all routes)

Scope: whole site, Experience mode. Visitors: hiring managers and freelance clients. Job: judge depth fast, explore work by choice, reach out. Proof: five real projects, four jobs, live GitHub stats, case studies as supplied. Constraints: content from Sanity, minimal client JS, reduced-motion safe, keyboard complete.

## Direction contract

THESIS: A product catalogue for one engineer. Each project is a numbered model with a spec table, so the page reads like Braun literature: calm, exact, trustworthy. It refuses the card grid, the dark developer hero, and kicker-plus-heading sections.

OWN-WORLD: Matte warm-grey plastic ground (#EDEBE6), near-black ink (#1E1E1E), mid-grey for secondary labels, one signal orange (#E2461E) used only for the selected state and the availability lamp. A neutral grotesque throughout, tight and exact; labels in small tracked caps. Information lives in spec tables with ruled rows, not boxes. Model numbers (M-01) identify projects. A rotary dial with tick marks and detents is the one recurring object.

STORY: In ten seconds the visitor knows who he is (product engineer, Senior Frontend at Deriv), that he is available, and sees real models of work. They turn the dial or scroll to move through models, read the specs, open a case study, and end at a plain contact close.

FIRST VIEWPORT: Slim header: wordmark left, nav and a Cmd+K control right, availability lamp. Body is two columns on desktop. Left (sticky, ~34%): the name, the one-sentence headline at large size, the availability line, and the rotary dial with model index ticks. Right (~66%): the first two models as large catalogue sheets, each a cover plate, model number, title, a one-line summary and a spec table (role, stack, status, stars). Primary action: Contact, in the header and the dial column.

FORM: Product catalogue with a rotary-dial selector (position 1 of 7 in my ordered list, the Model Series pick). Seed key 72a35a2f. Signature interaction: the dial. It rotates with scroll position (transform only), steps with detents on arrow keys, and clicking a tick jumps to that model.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
