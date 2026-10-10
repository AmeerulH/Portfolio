# Portfolio project instructions

Personal portfolio built with Next.js (App Router), Tailwind and Sanity (`studio/`, `sanity/`). Read `PRODUCT.md` before interface work. This repository is public, so anything committed is visible to everyone.

## Quality gates

The skills named below are installed globally in `~/.agents/skills`. If one is unavailable, still follow the intent of the gate.

- **Before saying a change is done**, run `npm run lint` and `npm run build`, and report the actual output (`verification-before-completion`). Run `npm run typegen` after Sanity schema changes.
- **Bugs and failing checks:** find and state the root cause before changing code (`systematic-debugging`).
- **Before a PR or merge:** review the branch diff with `find-bugs` and `code-review`.
- **Secrets:** `SANITY_API_READ_TOKEN`, `SANITY_API_WRITE_TOKEN` and `GITHUB_TOKEN` are server-only and live in `.env.local`, which is git-ignored along with every other `.env*` file. Never commit them or expose them through `NEXT_PUBLIC_` variables or client components. Changes to the code that reads them get `security-review`.
- **`scripts/seed.mjs`** writes to Sanity: run it with `DRY_RUN=1` first.
- **New dependencies:** run `supply-chain-risk-auditor` before adding one.
- **Performance:** for pages with heavy images or motion, check with `performance-optimization` before shipping.
