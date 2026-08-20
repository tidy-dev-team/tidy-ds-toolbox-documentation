# Tidy DS Toolbox documentation

The public documentation site for the [Tidy DS Toolbox](https://github.com/tidy-dev-team/tidy-ds-toolbox) Figma plugin.

The reader is a designer, not an engineer and not an agent operator.

## Status

The site is not built yet.
`notes/` holds the decisions made so far.

- [`notes/generator-decision.md`](notes/generator-decision.md) - the site uses Astro Starlight, and why.
- [`notes/generator-research.md`](notes/generator-research.md) - the facts the choice was made from.
- [`notes/tidy-doc-page-draft.md`](notes/tidy-doc-page-draft.md) - the first module page, written. It becomes `src/content/docs/modules/tidy-doc.md` when the site is scaffolded.
- [`notes/images/`](notes/images) - two sample panel captures.

## Writing rules

Every page on this site follows these rules.

- ASD-STE100 Simplified Technical English. Short sentences, active voice, one instruction per step.
- No em dashes. Use a plain dash.
- One full sentence per physical line in the Markdown source.
- Vocabulary must not contradict [`CONTEXT.md`](https://github.com/tidy-dev-team/tidy-ds-toolbox/blob/main/CONTEXT.md) in the plugin repo. Operation, Bridge, Module, Feature and Session have fixed meanings there.

## Host

Vercel, on the team's paid plan.
The project must live in the company Vercel team, not in a personal account.

