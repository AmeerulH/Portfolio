# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Existing codebase, being rebuilt in place: Next.js App Router (upgrading to 16.x), React 19, TypeScript, Tailwind v4, motion. Content in Sanity (project khwggy75, dataset production, standalone Studio in /studio, deployed to sanity.studio). Live repo data from the GitHub GraphQL API. Deployed on Vercel.

## Users

Two audiences, equally weighted:
- Hiring managers and recruiters assessing senior or lead full-stack roles. They skim, then look for proof of depth, and want to reach out or book an interview.
- Freelance and agency clients deciding whether to commission a project. They want evidence of shipped products and live websites, and an easy way to enquire.

## Product Purpose

Personal portfolio of Ameerul Hady, a Senior Frontend Developer at Deriv who works as a full-stack product engineer. It exists to show how good a software developer he is through real shipped work, and to convert visits into contact. Success: a visitor understands within seconds who he is and what he can own, explores work by choice, and ends at a contact action. The owner can update everything without touching code.

## Positioning

Product engineer: ships whole products end to end, from idea to production, with frontend craft as the edge. The site itself is part of the proof: its interaction quality, performance and maintainability are the demonstration.

## Operating Context

Content is edited by the owner in Sanity Studio and delivered to the site through Sanity's Live Content API. GitHub stats are fetched server-side and cached. The resume page and PDF are generated from the same Sanity content. Background content comes from the previous site (lib/info, lib/jobs, lib/projects) and the master resume supplied on 5 November 2026.

## Capabilities and Constraints

- Sections: home, work index, case studies, live websites gallery, GitHub activity, experience timeline, resume (page and PDF), Cmd+K command palette, contact.
- No blog and no music page.
- Performance targets: Lighthouse 95+, LCP under 2s, minimal client JavaScript.
- Free Sanity plan: hard quotas, public dataset reads. Cache aggressively.
- GitHub profile has no pinned repos; repos are selected in Sanity.
- Current employer: Deriv (since April 2022).

## Brand Commitments

- Name: Ameerul Hady.
- Minimal look is binding. Professional, sleek, modern, with motion across the board and a highly interactive, explorable feel.
- Must not read as AI-generated default design.
- Motion follows Emil Kowalski's principles.

## Evidence on Hand

- Employment history, small projects and bio in the old lib files.
- Live sites: wedding invitation, superheroes, weather app (Vercel).
- Owner will supply metrics, screenshots, architecture notes and client-site details for 3 to 4 flagship case studies, plus a LinkedIn export.
- Absent until supplied: metrics, testimonials, client names. Never fabricate; mark placeholders in Sanity.

## Product Principles

- Proof over claims: show shipped work and real data.
- The owner never needs code to update content.
- Every page ends at a contact action.
- Interaction quality is evidence of craft; motion is purposeful and fast.
- Fast and accessible by default.

## Accessibility & Inclusion

Respect prefers-reduced-motion (fall back to opacity), full keyboard operation including the command palette, WCAG AA contrast.

## Content refresh — 5 November 2026

The master resume and supplied Deriv contribution report are the current professional evidence. Highlight web and Flutter delivery, application foundations, API/WebSocket reliability, transaction safeguards and release ownership. Preserve the distinction between measured build artifacts and download sizes; do not imply proven production speed gains.

Bouldy now targets React Native/Expo with a web/PWA target and separate FastAPI service. The existing carousel shows the earlier Next.js client and must be labelled as historical. Native store release and installed-PWA acceptance remain separate from source/export completion.
