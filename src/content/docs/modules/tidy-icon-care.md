---
title: Tidy Icon Care
description: Make a set of icons uniform, put them in a labelled grid, and mark the ones that could not be repaired.
---

Make a set of icons uniform, and put them in a labelled grid.

:::caution
Tidy Icon Care changes your icons.
It flattens each icon, and it removes the component you gave it.
Work on a copy of your icons, and not on the only copy.
:::

## What it does

You select icons, and Tidy Icon Care does two jobs at the same time.

**It repairs each icon.**
It outlines every stroke, it joins the shapes into one shape, it centres that shape in a frame of the size you give, and it makes the icon a component.
The one shape inside is named `ic`.

**It builds a grid.**
The icons are sorted by name, and each one gets a text label under it.
The grid has the number of rows you give, and the columns follow.

An icon that cannot be repaired is filled with a bright colour, so you can see it in the grid.

## When to use it

- You got a set of icons from somewhere else, and they must match the design system.
- You must show a set of icons for review, with the names.

## When not to use it

- You have one copy of the icons only. Make a copy first.
- The icons are correct, and you want the grid only. Tidy Icon Care always repairs, and you cannot ask for the grid alone.
- You want to keep the layers inside each icon. The repair joins them into one shape.

## Before you start

- Copy your icons to a page where a change is safe.
- Select the icons on the canvas. Select at least one.
- Open the panel, and select **Tidy Icon Care** in the module list, under **Stable**.

## Steps

1. Select the icons.
2. Set the grid: the rows, the label spacing, the row gutter, and the column gutter.
3. Set the icon properties: the colour, the opacity, and the icon size.
4. Select the content options you want.
5. Select the case for the labels.
6. Select **Build icon grid**.

The panel keeps your settings, so the next build starts from the same numbers.

## The settings

### Grid

| Setting | What it does | Default |
| --- | --- | --- |
| Rows | The number of icons in one column, before a new column starts. | 10 |
| Label spacing | The distance between an icon and its label. | 10 |
| Row gutter | The distance between the rows. | 16 |
| Column gutter | The distance between the columns. | 36 |

### Icon properties

| Setting | What it does | Default |
| --- | --- | --- |
| Color | The fill of every icon, as a hex value. | 0D0C0C |
| Opacity | The opacity of the fill, from 0 to 100. | 100 |
| Icon size | The size of the frame of each icon, in pixels. | 24 |

### Content

| Setting | What it does |
| --- | --- |
| Scale icon content | Makes the shape inside each icon the same size, and not the frame only. Clear it to keep each shape as it is, centred. |
| Add metadata | Writes a description on each icon component, with a status, the searchability lines, and the guidelines. |
| Preserve original colors | Keeps the colours of the icon. Clear it to give every icon the colour above. |

### Label case

The label under each icon takes the name of the icon.
Select **lowercase**, **UPPERCASE** or **Sentence case**.

## What you get

A frame that holds the grid, in the same place as your selection, in the same parent.
Each cell holds the icon and its label.

Each icon is now a component, with one shape inside, named `ic`.
The shape is centred, and it scales with the frame.

## What Tidy Icon Care changes

This module writes more than most.
Read this list before you run it.

- An instance in your selection is detached.
- A component in your selection is replaced. The repair makes a new component, and it removes the one you gave it.
- Every stroke becomes an outline. A stroke is no longer a stroke.
- The shapes inside each icon are joined into one shape. The layers are gone.
- A shape with no fill and no stroke is removed.
- With **Preserve original colors** clear, every icon gets the colour you set.

## The colours that report a failure

A step can fail on one icon, and the grid must still build.
So the icon is filled with a colour that tells you which step failed.

| Colour | What failed |
| --- | --- |
| Orange | The strokes could not be outlined. |
| Pink | The shapes could not be joined. |
| Light orange | The constraints could not be set. |

Repair that icon by hand.

## Limits

- Tidy Icon Care has no Claude command. Run it from the panel.
- The build cannot be undone in one step. Use the Figma history, or work on a copy.
- The icons are sorted by name, and you cannot choose another order.
- The rows go from 1 to 999. The gutters go from 0 to 500. The icon size goes from 8 to 512. A number outside the range becomes the nearest number inside it.

## Trouble

**The panel says to select at least one icon.** Nothing is selected. Select the icons on the canvas.

**An icon is bright orange or pink in the grid.** A repair step failed on that icon. Read the table above, and repair it by hand.

**My icon lost its layers.** The repair joins the shapes into one shape. That is the intent. Go back to your copy.

**The labels are in the wrong case.** Select another case, and build again from your copy.
