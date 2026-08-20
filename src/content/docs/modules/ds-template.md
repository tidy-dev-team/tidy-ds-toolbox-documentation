---
title: DS Template
description: Stamp the standard page structure of a design system file into an empty file.
---

Stamp the standard page structure of a design system file.

DS Template is a feature of the **Utilities** module.

:::caution
DS Template is not safe to run twice.
A second run stamps a whole new set of pages beside the first set.
Run it on an empty file.
:::

## What it does

A design system file has a standard shape: a page for each component, a page for each foundation, and the pages around them.

DS Template makes all of it in one step.
It stamps 58 pages, in the standard order, and it puts the standard frames and a header on each one.

## When to use it

- You start a new design system file, and it must match the standard.

## When not to use it

- The file already has pages. DS Template adds to a file, and it does not tidy one.
- You need one page. Make it by hand.

## Before you start

Open the new file.
It must be empty, or nearly empty.

## Steps

### From the panel

1. Open the panel, and select **Utilities** in the module list, under **Stable**.
2. Find **DS Template**, and run it.

### From Claude

Run `/tidy-ds-template` in Claude Code.

Claude asks you to confirm first, because the command is not safe to run twice.
`--force` skips the question.

## What you get

58 pages, in this order.

- The start pages: **Start Here**, **Stickersheet**, **Dev cheat sheet** and **Waiting Room**.
- **Foundation**, with a page for each foundation: Breakpoints, Colors, Elevation, Icons, Illustrations, Layout, Logo, Naming, Rounded corners, Spacing and Grids, Tokens, and Typography.
- **Components**, with a page for each component, from **Alert** to **Tooltips**.
- **Patterns / sections**, with **Templates**.
- The last pages: **.Admin components**, **.Archive**, **Mapping** and **Cover**.

Lines of dots and dashes separate the groups.
They are page names, and not pages, so they are not stamped as pages.

### The frames on each page

A component page gets four frames of 3000 by 3000 pixels.

| Frame | Where it is |
| --- | --- |
| The main frame, named after the page | In the middle |
| QA | To the right |
| Documentation | Further right |
| Mapping | To the left |

A Foundation page gets the main frame only.

Each frame carries a header with its name.
The header is one component, made one time and used on every page, so a change to it changes every page.

## If you stop it

The pages are stamped one at a time, and each one is finished before the next one starts.

So a run that stops leaves finished pages, and no half-finished page.

Read the message. It says how many pages were stamped.
Those pages stay in your file.

**A second run does not finish the job.**
It stamps a whole new template beside the pages you have.
Delete the pages from the first run if you want one clean set.

## Limits

- The page list is fixed in the plugin. You cannot select which pages you get.
- It is not safe to run twice.
- It adds pages. It does not rename or move the pages you have.

## Trouble

**I ran it twice, and now the file has two of everything.** Delete the second set. The command is not idempotent, and the panel and Claude both say so before you start.

**The run stopped part way.** Read the message for the count. Delete the pages it made, then run it again for one clean set.

**A page has one frame only.** It is a Foundation page. That is the intent.
