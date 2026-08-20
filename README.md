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

[`CLAUDE.md`](CLAUDE.md) holds them.
It covers the reader, the language, the shape of a module page, the sidebar, and the screenshot standard.
Read it before you write a page.

## Host

Vercel, on the team's paid plan.
The project must live in the company Vercel team, not in a personal account.
