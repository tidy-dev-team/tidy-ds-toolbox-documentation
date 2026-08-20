# Tidy DS Toolbox documentation

This repo is the public documentation site for the [Tidy DS Toolbox](https://github.com/tidy-dev-team/tidy-ds-toolbox) Figma plugin.
Astro Starlight builds it.
Pages live in `src/content/docs/`, screenshots in `src/assets/`.

## The reader

A designer.
Not an engineer, and not an agent operator.
The reader wants to finish a job in Figma, so a page gives the job, the steps, and the result.

## Write every page in Simplified Technical English

ASD-STE100.
Short sentences.
Active voice.
One instruction per step.

- Write a plain dash where an em dash would go.
- Put one full sentence on its own physical line in the Markdown source.
- Keep the plugin's vocabulary. Operation, Bridge, Module, Feature and Session have fixed meanings in [`CONTEXT.md`](https://github.com/tidy-dev-team/tidy-ds-toolbox/blob/main/CONTEXT.md) in the plugin repo. Read that file before you use one of those words in a new sense.

## A module page

One page for each module of the plugin, in `src/content/docs/modules/`.
The page says what the module does, when to use it, when not to use it, how to run it step by step, what the reader gets, the limits, and the trouble.
`modules/tidy-doc.md` is the model to follow.

Some modules give a different result from the panel than from Claude.
Where they differ, the page says which way gives which result, before the steps.

## The sidebar follows the panel

The panel groups modules under **Stable**, **Beta** and **Alpha**, sorted by name inside each group.
The sidebar in `astro.config.mjs` carries the same three groups, and it lists each page by hand.

Maturity stays out of the URL.
A module changes group as it matures, and the URL must hold.

## A screenshot

Capture the panel from a browser.
`npm run build:ui` in the plugin repo makes a self-contained `dist/index.html` that renders the real panel, so a capture needs no Figma file.

Read every status string in the frame before the image ships.
Outside Figma the panel reports states that are not true, such as a connected Bridge next to an unknown file.
A capture is 1040 pixels wide, so give the image a render width. At full content width the panel reads as an application window instead of a side panel.

## Facts

State what you checked.
Where a fact about the plugin decides a sentence, read the plugin source or run the tool, then write the sentence.
`notes/` holds the decisions behind this site and the evidence for them.
