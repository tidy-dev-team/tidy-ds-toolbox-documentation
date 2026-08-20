# Tidy DS Toolbox documentation

The public documentation site for the [Tidy DS Toolbox](https://github.com/tidy-dev-team/tidy-ds-toolbox) Figma plugin.

The reader is a designer, not an engineer and not an agent operator.

## Status

The site is built and it holds one module page, Tidy Doc.
Run `npm run dev` to read it.
A push to `main` deploys it to <https://tidy-ds-toolbox-documentation.vercel.app>.

- [`src/content/docs/`](src/content/docs) - the pages.
- [`src/assets/`](src/assets) - the screenshots.
- [`notes/generator-decision.md`](notes/generator-decision.md) - the site uses Astro Starlight, and why.
- [`notes/generator-research.md`](notes/generator-research.md) - the facts the choice was made from.

## Writing rules

Every page on this site follows these rules.

- ASD-STE100 Simplified Technical English. Short sentences, active voice, one instruction per step.
- No em dashes. Use a plain dash.
- One full sentence per physical line in the Markdown source.
- Vocabulary must not contradict [`CONTEXT.md`](https://github.com/tidy-dev-team/tidy-ds-toolbox/blob/main/CONTEXT.md) in the plugin repo. Operation, Bridge, Module, Feature and Session have fixed meanings there.

## Host

Vercel, on the team's paid plan.
The project must live in the company Vercel team, not in a personal account.
