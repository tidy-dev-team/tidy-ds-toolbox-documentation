---
title: Tidy Doc
description: Build a Documentation Page for a component, from the component itself.
---

Build a Documentation Page for a component, from the component itself.

:::caution
Tidy Doc is alpha. The layout and the section set can change between releases.
:::

## What it does

Tidy Doc reads one component or component set and draws a documentation page on a new Figma page.
The page holds up to five section cards: Variants, Component Breakdown, Mode, Usage Guidelines, and Related Components.
Tidy Doc owns that page. It does not edit your component.

The new page is named Documentation / <Component name>, so it sorts next to the component it describes.

## Two ways to run it, and they give different results

This matters, so read it before you start.

- **From the panel.** The **Document selection** button builds a facts-only page. It writes no prose.
- **From Claude.** The `/tidy-doc` command reads the component, authors the prose, and then builds the page.

The panel button is a fallback. Use it when you want the structure and the derived facts, and you are content to write the words yourself.

## When to use it

- A component is finished and needs a documentation page.
- A component changed, and its existing documentation page is now wrong.

## When not to use it

- The component is still changing shape. Build the page when the variants are settled.
- You want to keep hand-written documentation on that page. Tidy Doc replaces the page it owns on every run.

## Before you start

- Select one component or one component set. Tidy Doc cannot run on a frame or a group.
- The Tidy DS Toolbox panel must be open.

## Steps

1. Select the component on the canvas.
2. Open the Tidy DS Toolbox panel.
3. Select **Tidy Doc** in the module list, under **Alpha**.
4. Select **Document selection**.
5. Wait. The build log at the bottom of the panel reports the page it built.

![The Tidy Doc panel, with the Document selection button and the build log](../../../assets/tidy-doc-panel.png)

## What you get

A new Figma page that holds the documentation page.
A section with no useful content is skipped, so a simple component gets a shorter page.
A second run deletes the page from the previous run and builds it again. Do not edit the generated page by hand.

## Limits

- Mode showcases are capped at 8.
- One build at a time per component. If a build is already running for the same component, the panel says so, and names whether the panel or an agent started it.
- The panel button writes no prose. Only the Claude path authors words.

## Trouble

**The panel says a build is already running.** Wait for it to finish. The message names what started it.

**Nothing happens, and the panel stays busy.** Keep the Figma window in front. macOS slows a background window, and the plugin stops making progress.

**The page is missing a section you expected.** The section had no content to draw. Check the component has the variants or the variable modes that section needs.

## Drive it with Claude

Tidy Doc is one of four modules an agent can drive, and it is the only one where the agent path is better than the panel.
Run `/tidy-doc` in Claude Code to build the page with authored prose.
