---
title: Component Labels
description: Draw the variant property values as labels along the top and the left of a component set.
---

Draw the variant property values as labels around a component set.

## What it does

A component set is a grid of variants.
Component Labels reads the variant properties, and it writes the values as text beside the grid.

You give each edge a property.
The property you give to the top becomes one label above each column.
The property you give to the left becomes one label beside each row.

Each edge takes a second property as well, so a set with four properties gets two rows of labels above and two beside.

The labels are text on the canvas, next to the set.
They are not part of the component, and they change nothing inside it.

## When to use it

- You made a sticker sheet or a documentation page, and the grid needs to be readable.
- You must show a component set in a review, and the variant names are hard to read in the layer names.

## When not to use it

- The set is still changing shape. The labels are text, and they do not follow a change. Build them again after the change.

## Before you start

- Select the component set on the canvas. Component Labels works on a component set, and not on a component, a frame, or a group.
- Open the panel, and select **Component Labels** in the module list, under **Stable**.

The panel reads the selection and fills the property lists.
The **Build Labels** button stays off until it has a component set to read.

## Steps

1. Select the component set on the canvas.
2. Select the property for **Top labels (Level 1)**.
3. Select the property for **Left labels (Level 1)**.
4. Select a property for **Level 2** on each edge, if the set has more properties. This is optional.
5. Set the spacing and the font size, or keep what is there.
6. Select **Build Labels**.

The panel selects two properties for you, to save a step.
A property named `type` goes to the top, and a property named `state` goes to the left.
A set with exactly two properties gets one on each edge.
Change either one.

## The settings

| Setting | What it does |
| --- | --- |
| Spacing | The distance between the labels and the set, in pixels. The default is 16. |
| Font Size | The size of the label text, in pixels. The default is 12. |
| Group labels | For a Level 2 edge. Repeated values become one label, centred on the group. Selected by default. |
| Extract element to the top | Moves the component set to the top of the layer list after the build. |

The spacing, the font size, and the extract setting are kept in the file.
You set them one time, and the next build in that file uses them again.

### What Group labels does

A Level 2 property repeats.
A set of 3 types by 4 states gives you the same state name under each type.

With **Group labels** selected, the repeated labels in one group become one label, centred over the group.
The grouping stays inside each Level 1 group, so the same value under a different type stays a separate label.

Clear the checkbox to get one label for each column or row.

## What you get

Text labels around the set, on the same page.

- The Level 1 labels sit next to the set.
- The Level 2 labels sit outside the Level 1 labels.

A label is placed on the centre of its column or its row.
A ragged set, where a column is short, still gets a label for every row that exists.

## Drive it with Claude

Run `/tidy-labels` in Claude Code.

```
/tidy-labels
/tidy-labels top=Type left=State
/tidy-labels 2625:10445 top=Type left=State secondTop=Size
/tidy-labels top=Type left=State spacing=24 fontSize=14
```

With no properties, Claude reads the variant properties of the selection and asks you how to assign them.

The command takes the same settings as the panel.
`top`, `left`, `secondTop` and `secondLeft` take a property name.
`groupSecondTop` and `groupSecondLeft` take `true` or `false`.
`spacing`, `fontSize` and `extractElement` do what the panel settings do.

With no node id, the command uses the current Figma selection.

A property name that the set does not have gives you an error, and the error lists the names the set does have.

You can place a set and label it in two commands.
`/tidy-ds Buttons --place` gives you a node id, and `/tidy-labels <node id>` labels it.
Read [DS Explorer](/modules/ds-explorer/).

## Limits

- The target must be a component set.
- The labels are plain text. A change to the set does not update them.
- A second build adds a second set of labels. Delete the old labels first.

## Trouble

**The Build Labels button is off.** The panel has no component set. Select the set on the canvas.

**Figma says to select a component set.** Your selection is a component, a frame, or a group. Select the component set that holds the variants.

**A label is in the wrong place.** The set was moved after the build. The labels do not follow the set. Delete them, and build them again.

**Claude says the property is not known.** The name does not match a variant property of the set. Use a name from the list in the error.
