---
title: Misprint
description: Write the searchability lines on a component description, so a designer finds the component whatever they type.
---

Write the searchability lines on a component description.

Misprint is a feature of the **Utilities** module.

## What it does

A designer must find a component by search.
Two things stop them, and Misprint writes one line for each.

**The wrong name.**
A designer looks for "Progress Tracker", and the set is named "Stepper".
Misprint writes an **Also known as:** line with the other names the component answers to.

**The wrong keyboard.**
A designer with a Hebrew keyboard types the Latin name, and Figma gets Hebrew characters.
Misprint writes a **misprint** line, which holds the name of the component as those Hebrew characters.
The search then matches, and the designer finds the component without a change of keyboard.

Both lines go on the description of the component.
Nothing else in the file changes.

## When to use it

- A component is finished, and it must be findable.
- You renamed a component. The misprint line holds the old name until you write it again.
- A QA run reported the **Description (AKA + Misprint)** row as a defect. Read [Tidy QA](/modules/tidy-qa/).

## When not to use it

- The target is not a component or a component set. Misprint writes on those two only.

## Before you start

- Select the components on the canvas, for the panel path.
- Open the panel, and select **Utilities** in the module list, under **Stable**.

## Steps

1. Select one component or more on the canvas.
2. Select **Utilities** in the module list.
3. Find **Misprint**, and run it.

## Drive it with Claude

Run `/tidy-misprint` in Claude Code.

```
/tidy-misprint
/tidy-misprint Button
/tidy-misprint Btn*
/tidy-misprint 2226:741
```

Each argument is read by its shape.
A value such as `2226:741` is a node id.
A value with a `*` is a pattern.
Anything else is an exact name, and Claude finds it first.

With no argument, Claude finds every component in the file and asks you before it writes.

To see what is in the file before you write, run `/tidy-find`.
Read [Find components](/modules/tidy-find/).

## What you get

Two lines on the description of each component.

```
Also known as: **Progress Tracker**, **Wizard**
---------------------------------------------------- misprint: דאשננ
```

The lines are written on the markdown view of the description, so the formatting renders in the configuration panel of the component.

## It is safe to run twice

Both lines are written in place.

- A line that is already there is replaced, and not repeated.
- A misprint line left by an old name is corrected.

So a second run on the same component changes nothing, and a run after a rename fixes the line.

## The Also known as: line comes from a table

The other names are not derived from your file.
They are a list kept by hand in the plugin, because "the rest of the industry calls this a Chip" is knowledge that no Figma file holds.

The table has 39 entries today.

A component with no entry gets **no** Also known as: line.
The empty line would pass a QA check and tell a reader nothing, so it is not written.
Claude reports the names it found no entry for, so the table can grow.

The misprint line is written for every component, because it is made from the name.

## Limits

- Misprint writes on a component and a component set. It skips anything else in your selection.
- The Also known as: line needs an entry in the table. Ask the team to add a name.
- The Claude path stops if one id is missing or is the wrong type, and it writes nothing. Fix the argument, and run it again.

## Trouble

**The panel says to select at least one component.** Your selection is empty, or it holds no component. Select the component or its set.

**The component got no Also known as: line.** The table has no entry for that name. The misprint line is still written.

**The description shows `**Button**` with the asterisks.** You are reading the plain description field. The lines are written as markdown, and the configuration panel of the component renders it.
