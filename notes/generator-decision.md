# The documentation site uses Astro Starlight

Decision for issue #195.
Part of map #193.
Date of the prototype: 20 August 2026.

The research in #194 gathered facts and made no recommendation.
It narrowed the field to Astro Starlight and Docusaurus, and ruled out VitePress.
This document records what happened when both candidates were built with real content, and which one was chosen.

## The decision

**Astro Starlight.**

## What was built

The same page was built in both candidates.
The page is the Tidy Doc module page, with the nine-section anatomy fixed in #196, real Simplified Technical English prose, a real step list, and a real screenshot of the Tidy Doc panel.

Versions used: `@astrojs/starlight` from the current Astro template, and Docusaurus 3 from `create-docusaurus@latest` with the TypeScript classic template.
Node 24.10.0, npm 11.11.1.

The prototypes are throwaway and were not committed.
The page itself is committed as `docs/research/tidy-doc-page-draft.md`, because the writing ticket needs it.

## Why Starlight won

### 1. Docusaurus fails the build on ordinary prose

The page contains this sentence, which is normal documentation prose:

> The new page is named Documentation / \<Component name>, so it sorts next to the component it describes.

Docusaurus 3 parses `.md` as MDX, so it read `<Component name>` as a JSX tag and stopped the build:

```text
Expected a closing tag for `<Component>` (20:39-20:55) before the end of `paragraph`
```

The error names a closing tag that the writer never opened, and it does not say the words "MDX" or "escape the bracket".
A writer who does not know MDX cannot act on it.
The fix is to escape the bracket, and the writer has to know that in advance.

Starlight built the same sentence with no complaint.

This is the deciding fact.
The site has to be maintained by somebody else after the current author leaves, so a build that breaks on a plain angle bracket is a permanent tax on every future page.
The research already named the escape hatch, `format: 'detect'`, as experimental, and it costs the per-theme image component.

### 2. Starlight optimises screenshots and Docusaurus does not

From the same Markdown and the same source file, measured on the built output:

| | Starlight | Docusaurus |
| --- | --- | --- |
| Emitted file | 53 KB WebP | 163 KB PNG, unchanged |
| Width and height attributes | yes | yes |
| `loading="lazy"` | yes | yes |

Both avoid layout shift and both lazy-load.
Only Starlight converts the format and cuts the weight, and it does so with no configuration.
This site is screenshot-heavy by nature, so a three-times weight difference on every image compounds.

### 3. Search costs nothing on Starlight

Starlight built a Pagefind index during the build, with no configuration and no service:

```text
[starlight:pagefind] Building search index with Pagefind...
[starlight:pagefind] Finished building search index in 1.18s.
```

The first-party Docusaurus path is hosted Algolia DocSearch, which needs an application and an account.
A local index on Docusaurus needs a community plugin.

### 4. The dependency tree is smaller

Starlight installs 369 packages.
Docusaurus carries a React and webpack floor, measured in #194 at 1275 lockfile entries.
Fewer dependencies is less to maintain for a site nobody owns full time.

## What Starlight is worse at, and why it did not change the decision

Docusaurus is the only candidate that documents a pure-Markdown route to a light image and a dark image.
Starlight needs an undocumented class for the same result.

This did not decide the choice, for two reasons.
Both-theme screenshots are not a requirement yet, and #199 has not decided whether they ever will be.
The screenshots can also be captured from a browser at a theme the author chooses, so a second theme is a second capture and not a Markdown feature.

## Other findings from the prototype

### Panel screenshots can be captured from a browser, with one caveat

`npm run build:ui` produces `dist/index.html` as a single self-contained file.
That file opens in a normal browser and renders the whole panel, with the real module list and the real bundled component data.
So a screenshot does not need Figma, a Figma file, or a designer.
It can be taken at any window size, and it can be repeated after a UI change.

`docs/research/images/panel-shell.png` and `docs/research/images/tidy-doc-panel.png` were both captured this way.

The caveat is real and must go into the screenshot standard.
Outside Figma the panel shows states that are not true, and the Tidy Doc panel is the clearest case.
It reported `Bridge: connected · Session: bound` and `Bound file: unknown` in a browser with no bridge and no Figma file at all.
A screenshot that shows a connected bridge next to an unknown file will confuse a reader.
So a browser capture needs a check of every status string in frame before it ships.

### A panel screenshot must not render at full content width

The panel capture is 1040 pixels wide, and Starlight rendered it across the whole content column.
At that scale the panel is larger than life and reads as a full application window instead of a side panel.
The screenshot standard has to fix a render width, not only a capture width.

### The panel groups modules by maturity

The module list is grouped under **Stable**, **Beta** and **Alpha** headings, and sorted by name inside each group.
It is not one flat list.
#196 decided the site's navigation follows panel order, so that decision means grouped by maturity, and the site must carry the same three headings.

### The Tidy Doc panel button writes no prose

The Tidy Doc panel says so itself:

> This module is primarily driven from Claude via the MCP bridge (`tidy_doc_read_component` / `tidy_doc_build_page`). The button below is a facts-only fallback with no authored prose.

Confirmed in `src/plugins/tidy-doc/ui.tsx`.
So the two ways to run Tidy Doc give different results, and the module page has to say which is which.
The drafted page in #196 was wrong on this point and is corrected in `docs/research/tidy-doc-page-draft.md`.

### An unrelated defect in the DS Explorer component list

While capturing the shell screenshot, the DS Explorer component list showed category headings **after** the items they name.
`Banner / Contained`, `Banner / Outlined` and `Banner / With Partial Stroke` are listed, and only then the `BANNER` heading appears.
The same pattern repeats for `DROPDOWN`, `LIST`, `PAGINATION`, `PROGRESS BAR`, `SNACKBAR`, `TOAST`, `CARDS`, `DATE PICKER` and `MODAL`.
The headings above them, in the atoms range, are correct.
This is not part of the documentation site work, and it needs its own issue.
