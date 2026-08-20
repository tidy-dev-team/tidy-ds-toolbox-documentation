---
title: Sticker Sheet Builder
description: Build a sticker sheet page from the components in your file, one component at a time or all of them together.
---

Build a sticker sheet page from the components in your file.

## What it does

A sticker sheet is one page that shows every component with all of its variants.

Sticker Sheet Builder makes that page.
For each component it draws a header, the variants by size, the grids of the other variant properties, and the boolean properties.
It reads the description of the component, so the text you wrote in the library goes on the sheet.

It also keeps an index on the page, with a picture of each component.

The page is named **Stickersheet**.
The module makes that page if your file does not have it.

## Two ways to build

The difference matters, so read it before you start.

- **Build sticker sheet.** It builds the components you selected on the canvas, and it adds them to the page. Nothing on the page is removed.
- **Build all sticker sheets.** It **empties the Stickersheet page first**, then it builds every component from the pages you selected in the panel.

:::caution
**Build all sticker sheets** removes everything from the Stickersheet page before it starts.
Anything you put on that page by hand is lost.
:::

## When to use it

- You must show the whole component library on one page, for a review or a hand-off.
- You added a component, and the sheet must hold it too. Select it, and build the one sticker.

## When not to use it

- You want a documentation page for one component, with prose. Use [Tidy Doc](/modules/tidy-doc/).
- You want labels around a component set on its own page. Use [Component Labels](/modules/component-labels/).

## Before you start

- Open the panel, and select **Sticker Sheet Builder** in the module list, under **Beta**.
- For **Build all sticker sheets**, select the pages that hold your components, in **Configuration**. The button stays off until you select at least one page.

## Steps

### One component

1. Select an instance, a component, or a component set on the canvas.
2. Select **Build sticker sheet**.

You can select more than one. The module builds them one at a time.

### Every component

1. In **Configuration**, select the pages that hold your components. **Select all** and **Select none** are there to help.
2. Select the settings you want. They are described below.
3. Select **Build all sticker sheets**.
4. Watch the progress. The panel names the component it is building now, and the count.

To stop it, select **Stop**.
The module finishes the component it is on, then it stops.
The stickers it already built stay on the page, and the panel says how many it built.

## The settings

| Setting | What it does |
| --- | --- |
| Require ℹ️ in description | Builds a component only if its description holds the ℹ️ character. Selected by default. |
| Grouping | **By section (Kido DS only)** groups the stickers as the design system file is organised. **By source page** groups them by the page each component came from. |

### Require ℹ️ in description

This is the filter that decides what goes on the sheet.
With it selected, a component with no ℹ️ in its description is skipped.

Use it to keep work in progress off the sheet.
Clear it to build every component on the pages you selected.

A component whose name starts with a full stop is always skipped, because Figma treats it as private.

## What you get

The **Stickersheet** page, with one sticker for each component.

A sticker holds these parts.

- A header, with the name of the component.
- The variants, in grids. Sizes, the boolean properties, and the other variant properties each get their own grid.
- The text from the description of the component.

The page also holds an **INDEX** frame, with a picture of each component.

The stickers are locked after **Build all sticker sheets** finishes, so you cannot move one by accident.

## How the description is read

Sticker Sheet Builder reads the description of the component, and it splits it into parts.
Separate each part with two empty lines.

- A part that starts with `#` is read as tags.
- A part that starts with `misprint` is read as the searchability line, and it is not printed as prose. Read [Misprint](/modules/misprint/).
- Every other part is printed. Its first line is the title, and the rest is the text.

## Limits

- Sticker Sheet Builder has no Claude command. Run it from the panel.
- **Build all sticker sheets** empties the Stickersheet page each time.
- The page must be named `Stickersheet`. The module makes it, and it does not find a page with another name.
- **By section** grouping is for the Kido design system file only. Use **By source page** in another file.
- A component that is a variant inside a set is not built on its own. The set is built.

## Trouble

**The build button is off.** For one sticker, nothing eligible is selected. Select an instance, a component, or a component set. For all stickers, no page is selected in **Configuration**.

**The build says no components were found.** The pages you selected hold no component that passes the filter. Clear **Require ℹ️ in description**, or check that you selected the right pages.

**A component I expected is missing.** Its description has no ℹ️, or its name starts with a full stop.

**Figma says the main component was not found.** You selected an instance whose component is not reachable, such as one from a library you cannot open. Select the component itself.

**The build is slow.** A sheet for a whole library is a large amount of work. The panel reports the progress, and **Stop** ends it cleanly.
