---
name: Ameerul Hady
description: A product catalogue for one engineer.
colors:
  paper: "#edebe6"
  plate: "#e2dfd8"
  ink: "#1e1e1e"
  ink-2: "#5a5a56"
  rule: "#cbc8bf"
  signal: "#e2461e"
  ink-hover: "#000"
typography:
  display:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.2rem + 2.6vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.2vw, 2.125rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.55
    fontFeature: '"tnum" 1, "ss01" 1'
  label:
    fontFamily: "Hanken Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  frame: "4px"
  plate: "6px"
  control: "8px"
  overlay: "12px"
  pill: "999px"
  dot: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  header: "3.75rem"
  section: "1.5rem"
  sheet: "clamp(4rem, 8vw, 7rem)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-primary-hover:
    backgroundColor: "{colors.ink-hover}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  button-ghost-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1.25rem"
    height: "2.75rem"
  text-link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0 0 1px 0"
  filter:
    backgroundColor: "transparent"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.25rem"
  filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.pill}"
    padding: "0 1rem"
    height: "2.25rem"
  search-button:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "0 0.75rem"
    height: "2.25rem"
  search-button-hover:
    backgroundColor: "{colors.rule}"
    textColor: "{colors.ink-2}"
    rounded: "{rounded.control}"
    padding: "0 0.75rem"
    height: "2.25rem"
  nav-link:
    textColor: "{colors.ink-2}"
    padding: "0.5rem 0.125rem"
  nav-link-current:
    textColor: "{colors.ink}"
    padding: "0.5rem 0.125rem"
  command-input:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "0 1.25rem"
    height: "3.25rem"
  palette-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "0.625rem 0.75rem"
  palette-item-selected:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "0.625rem 0.75rem"
  plate:
    backgroundColor: "{colors.plate}"
    rounded: "{rounded.plate}"
    width: "100%"
  spec-row:
    textColor: "{colors.ink}"
    padding: "0.625rem 0"
---

# Design System: Ameerul Hady

## Overview

**Creative North Star: "The Model Series"**

A product catalogue for one engineer. Each project is a numbered model with a spec table, in the manner of Braun literature: calm, exact, and trustworthy. The ground is matte warm-grey plastic, the type is a single neutral grotesque, and a rotary dial with tick marks is the recurring object.

Density stays quiet. The home page is a sticky intro beside catalogue sheets, and those sheets rest at full opacity. The name and role share one tracked uppercase line above the display headline. Section titles on the home page stand alone. Motion is the dial, a one-time load on the intro column, and the case-study carousel.

**Key Characteristics:**

- Matte warm-grey ground, plate-colored image wells, and near-black ink
- One signal orange, used for selection and status
- Hanken Grotesk as the only screen face, with tracked uppercase labels
- The name and role locked on the label line above the home headline
- Model numbers (M-01) and spec tables with ruled rows
- One 16/10 plate for every product, portrait screens up to three across
- Underlined contact links on the home page, and filled and ghost capsules on case studies

## Colors

A warm grey ground, near-black ink, and a single orange that stays rare. The document is light (`color-scheme: light`). Selected text reverses to paper on ink.

### Primary

- **Signal Orange** (#e2461e): Selection and status. It paints the dial's active tick and its pointer, the current model dot, the open availability lamp and its 22% halo, the limited lamp at 60% opacity, the text caret, the work-index number on hover, and the pointer on a plate that has no photograph.

### Neutral

- **Matte Ground** (#edebe6): The page, the header, the command palette, and the text on a selection.
- **Plate** (#e2dfd8): Image wells, the dial knob, and the search control at rest.
- **Near-Black Ink** (#1e1e1e): Text, filled buttons, the current nav link, the top rule of a spec table, the pressed filter, and the darkest contribution cell. Lighter cells mix this ink at 8%, 28%, 52%, and 78%.
- **Pressed Black** (#000): The filled button on hover.
- **Mid Grey** (#5a5a56): Secondary labels, summaries, idle navigation, spec keys, and the closed availability lamp.
- **Hairline** (#cbc8bf): Row rules, the header and footer edges, idle filter strokes, and the scrollbar thumb.

**The Signal Rule.** Signal orange marks selection and status: the dial's active tick and pointer, the current model dot, the availability lamp, the text caret, the work-index number on hover, and the pointer on a plate with no photograph. It is not a fill for buttons, plates, or sections.

## Typography

**Display Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Hanken Grotesk (with ui-sans-serif, system-ui, sans-serif)
**Label Font:** Hanken Grotesk, in tracked uppercase

**Character:** One neutral grotesque. Headlines are tight and heavy. Labels are small, widely tracked, and set in capitals. Tabular figures and the ss01 alternate are on for the page.

### Hierarchy

- **Display** (600, clamp(2rem, 1.2rem + 2.6vw, 3.5rem), line-height 1.08, tracking -0.035em): Page titles and the home headline. In the sticky intro the same style narrows to clamp(1.6rem, 0.45rem + 1.55vw, 2.25rem) at line-height 1.05, and to clamp(1.35rem, 0.4rem + 1.3vw, 1.85rem) when the viewport is at least 52rem wide and shorter than 740px.
- **Headline** (600, clamp(1.5rem, 1.1rem + 1.2vw, 2.125rem), line-height 1.08, tracking -0.025em): Home section titles and model-sheet names.
- **Title** (600, 1.25rem, tracking -0.02em): Work-index names. Revision-history titles use the same weight at 1.125rem and -0.015em.
- **Body** (400, 1rem, line-height 1.55): Reading text, held to 62ch. Sheet summaries are 1.0625rem in mid-grey. Case-study prose is 1.0625rem up to 66ch, and the case lede is 1.1875rem. The home address is a link at clamp(1.5rem, 1rem + 2.4vw, 3rem), weight 600, tracking -0.03em.
- **Label** (500, 0.75rem, tracking 0.08em, uppercase, mid-grey): Model numbers, stack lines, pager captions, palette groups, and the home name and role.

**The One Face Rule.** Hanken Grotesk is the only screen face. Size, weight, and tracking make the hierarchy.

**The Name Line Rule.** On the home page the name and role share one label line, joined by a middle dot, directly above the display headline. The line is the label style: 0.75rem, weight 500, 0.08em tracking, uppercase, mid-grey.

## Layout

The page is a centered column, max-width 96rem, with inline padding of clamp(1.25rem, 4vw, 3.5rem). The header is 3.75rem and sticky. Scroll clearance is that height plus 1.5rem.

Below 52rem the home catalogue is one column, with 3rem between the intro and the sheets and block padding of 2.5rem and 6rem. From 52rem it is two columns, 34fr and 66fr, with a gap of clamp(2.5rem, 5vw, 6rem). The intro sticks under the header and centers in the remaining viewport (`100svh` minus the header). The sheet column begins 1.5rem below the header. When that desktop width is also shorter than 740px, the intro tightens so the column still fits one screen.

Model sheets stack with clamp(4rem, 8vw, 7rem) between them. A section's internal rhythm is 1.5rem. Spec rows are a 6–9rem key and a value, and they collapse to one column under 40rem. Revision rows use a 7–10rem date column and collapse the same way.

The header keeps Contact at narrow widths. Under 40rem the second nav link, Experience, is the one that hides. The availability phrase appears from 64rem. The search control shows its word and shortcut from 40rem, and the icon alone below that. The work index is number, title, stack, and kind; under 48rem the kind drops and the stack wraps under the title. Case, work, and error pages use the same column with block padding of 3rem and 8rem. The resume column stops at 56rem. Print hides the header and footer and sets the page white.

Page changes run a 180ms root view transition on the out easing. Reduced motion removes it.

**The Catalogue Column Rule.** From 52rem the home page is a 34/66 split. The intro is sticky and centered under the header. Catalogue sheets occupy the wide column.

**The Shared Plate Rule.** Landscape and portrait product shots share one 16/10 plate. Portrait screens sit side by side inside it, up to three across.

## Elevation & Depth

Surfaces are flat. Depth is a hairline or a shift from paper to plate. The dial is the object that casts a soft shadow. The command palette is the one lifted panel. Catalogue sheets and the home sections beneath them rest at full opacity.

### Shadow Vocabulary

- **Header hairline** (`box-shadow: 0 1px 0 var(--color-rule)`): The sticky header's lower edge.
- **Footer hairline** (`box-shadow: 0 -1px 0 var(--color-rule)`): The footer's upper edge.
- **Dial shadow** (`filter: drop-shadow(0 6px 8px rgb(0 0 0 / 0.1))`): The rotary knob.
- **Lamp halo** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-signal) 22%, transparent)`): The open availability lamp.
- **Palette lift** (`box-shadow: 0 24px 60px -12px rgb(0 0 0 / 0.35), 0 0 0 1px var(--color-rule)`): The open command palette, on a 38% ink scrim.

Ghost controls use an inset 1px stroke (`inset 0 0 0 1px`), in ink when active and hairline when idle or disabled.

**The Hairline Rule.** Separate regions with a 1px rule. Spec tables and revision lists open on an ink rule and continue on hairline rows. Sheets, rows, and the header stay flat.

**The Still Sheet Rule.** Catalogue sheets and the home sections below them are present at full opacity. The intro column is the only place that runs an entrance animation.

## Shapes

Corners are few and named. Plates, gallery images, and the work-index preview use 6px. Images inside the case-study carousel use 4px. The search control and palette rows use 8px. The palette shell uses 12px. Filled buttons, ghost buttons, filters, and carousel controls are pills (999px). The availability lamp and the current-model dot are circles. Contribution cells are 1px rounds on a 2px grid. The focus ring is a 2px ink outline, 3px outside the control, with a 2px corner.

**The Two Silhouettes Rule.** Plates are softly squared at 6px. Button actions are pills. Home contact actions are underlined words, with no capsule around them.

## Components

### Buttons

Filled and ghost capsules are the case-study, resume, and error actions.

- **Shape:** Pill (999px), height 2.75rem, inline padding 1.25rem, type 0.9375rem at weight 500, with a 0.5rem gap before an arrow.
- **Primary:** Ink fill, paper text. On a fine pointer, hover turns the fill to pressed black (#000).
- **Ghost:** Transparent, ink text, inset 1px ink stroke. Hover fills with ink and paper text.
- **Press:** The active state scales to 0.97 over 160ms on the out easing.
- **Focus:** A 2px ink outline, 3px outside the pill.

### Text links

Home contact, socials, the resume link, "All work", live URLs, and company names are underlined type. The line is a 1px gradient of the current color, with 1px of padding beneath the words. On a fine pointer it withdraws to the right over 220ms. Model-sheet titles sit plain, and grow that same 1px line from the left on hover. The home address uses the large mail size and the resting underline.

### Chips

Work-index filters are pills, height 2.25rem, inline padding 1rem, type 0.875rem. At rest they are transparent mid-grey with an inset hairline. Hover on a fine pointer darkens the type and the stroke to ink. The pressed filter is an ink fill with paper text and no stroke.

### Cards / Containers

A model sheet is a 16/10 plate, a row with the name and the model number, a mid-grey summary, and a spec table. The plate ground is plate. A landscape image covers the well and scales to 1.025 on sheet hover over 400ms. Portrait shots share that well, centered, with a gap of clamp(0.4rem, 1.2vw, 0.85rem) and padding of clamp(0.55rem, 1.2vw, 0.9rem), up to three, fitted rather than cropped. The home catalogue lists only projects that have a cover. A plate with no photograph falls back to the model number as a watermark at 14% ink and a circular hairline with a signal pointer.

The work index follows a fine pointer with a 20rem, 16/10 preview at 6px radius. It fades and scales from 0.96 to 1. It is hidden below 48rem. Hovering a row shifts it 0.5rem to the right over 220ms, and the model number turns signal orange.

### Inputs / Fields

The command palette is the only field. It opens at once, with no animation, in a 12px paper panel up to 36rem wide, set 12vh from the top. The input is 3.25rem tall, transparent, with a hairline beneath it and a mid-grey placeholder. Rows are 8px radius; the selected row is ink with paper text. Group labels use the label style. The scrim is 38% ink. The trigger is a plate-colored control, 8px radius, 2.25rem tall, reading Search and ⌘K; hover shifts its ground to the hairline color.

### Navigation

The header pairs a wordmark (weight 600, tracking -0.02em) with links at 0.9375rem: Work, Experience, Resume, Contact. Links are mid-grey, and turn ink on hover or when current. Under 40rem, Experience hides and Contact stays. From 64rem the availability lamp sits in the header as a label with an 0.5rem dot: signal when open, signal at 60% when limited, mid-grey when closed. The footer is mid-grey at 0.875rem, name on one side and a Press ⌘K line on the other, under a top hairline.

A case-study head places the model number and kind on the label line, then the display title, then the 1.1875rem summary, then the filled and ghost capsules.

### Spec tables

A spec list opens with a 1px ink rule. Each row is a key and a value, with 0.625rem of vertical padding, closed by a hairline. Keys are mid-grey, 0.8125rem, tracking 0.04em. Values are 0.9375rem. Case-study metrics use the same rules, with the figure at 1.75rem, weight 600, tracking -0.03em. Revision history uses the ink-then-hairline structure. Dates are mid-grey at 0.875rem. Contribution activity is a grid of ink steps, 1px rounds, 2px apart.

### Rotary dial

The signature object. The knob is plate, with concentric ink rings at low opacity and a signal pointer, ringed by ticks. The active tick is signal and heavier. Scroll rotates the knob by transform only, over 240ms on the out easing. Dragging clears that transition and snaps to a detent on release. Arrow keys step through models. The index beside it lists number, title, and a dot that fills with signal on the current row.

On the home intro the dial is 6.25rem wide, and 5.25rem when the short-screen rules apply. The base size elsewhere is 8.5rem, or 7.5rem under 30rem, where the index stacks beneath the knob. The knob carries the dial shadow.

The intro's children rise 10px and fade in over 420ms, staggered by 50ms, once. Reduced motion replaces that rise with a 200ms fade and removes the dial, plate, index, preview, and carousel transitions.

### Case-study carousel

One 16/10 stage. Landscape frames advance one at a time. Portrait frames show three across. The track moves over 520ms on cubic-bezier(0.22, 1, 0.36, 1). A drag past 72px, or 16% of the width, changes frame. Under the stage sit a label counter, a two-line caption, pill ghost buttons at 2.75rem, and a 2px ink rail. The previous and next models are a ruled pager; the title shifts 0.35rem on hover. Reduced motion jumps the track.

**The Split Control Rule.** Home contact controls are underlined type links. Case-study pages use the filled capsule and the ghost capsule. Each stays on its own page.

## Do's and Don'ts

### Do:

- **Do** keep the page on the matte ground, images in plate wells, and text in near-black ink.
- **Do** leave signal orange for selection and status, as the Signal Rule states.
- **Do** set the home name and role in the tracked uppercase label line above the display headline.
- **Do** number models M-01 and place facts in ruled spec rows.
- **Do** put every product screen in the 16/10 plate, with portrait shots side by side, up to three.
- **Do** run the load sequence once, on the intro column only, and let sheets rest at full opacity.
- **Do** use underlined links for home contact, and the filled and ghost capsules on case studies.
- **Do** keep Contact in the header at 390px, and hide Experience under 40rem.

### Don't:

- **Don't** lay projects out as a card grid.
- **Don't** open the page with a dark hero. The scheme is light.
- **Don't** use signal orange as a button fill or a section background.
- **Don't** fade or slide catalogue sheets in as they enter the viewport.
- **Don't** put capsule buttons on the home contact actions.
- **Don't** drop Contact from the header at narrow widths.
- **Don't** list a project on the home catalogue without a cover photograph.
