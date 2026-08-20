---
title: Color Finder
description: List every colour in a file, where it is used, and whether it is bound to a variable.
---

List every colour in a file, and where it is used.

## What it does

Color Finder reads the colours in your file, and it builds a page that reports them.

For each colour you get the hex value, the HSL value, the variable it is bound to, the style it uses, how many times it is used, and where.

The report is a table for each role: **Backgrounds**, **Text**, **Borders** and **Icons**.

There is a second mode, for the colours inside a picture.
It reads the images in your file, and it reports the colours they hold.

## When to use it

- You must know which colours are not yet bound to a variable, before you make the tokens.
- You inherited a file, and you must see how many colours it really uses.
- You must find every place one colour is used.

## When not to use it

- You want to change a colour. Color Finder reports, and it does not write on your design.

## Before you start

Open the panel, and select **Color Finder** in the module list, under **Beta**.

## Steps

1. Select the mode: **From elements** or **From images**.
2. Select the scope: **Current page**, **Selected pages**, **All pages** or **Current selection**.
3. Select the options you want.
4. Start the scan.
5. Read the page it builds.

A scan of a whole file is a large amount of work.
To stop it, select **Stop**. It stops between pages.

## The roles

Each colour lands in one table, by a fixed rule.

| The colour is | The table |
| --- | --- |
| On a stroke | Borders |
| A fill on an icon | Icons |
| A fill on a text layer | Text |
| Any other fill | Backgrounds |

An icon is found by the name of the layer, and not by its content.
A layer named `icon/search` or `myIconButton` is read as an icon.

So the rule is mechanical.
Color Finder does not guess what a colour means.

## The options

| Option | What it does |
| --- | --- |
| Backgrounds, Text, Borders, Icons | Which tables to build. Clear one, and that role is not read. |
| Skip colors already bound to a variable | Reports the colours that are **not** yet a token. This is the list of work to do. |
| Look inside component instances | Reads the layers inside each instance too. It is slower, and it finds more. |
| Sort each table by hue | Orders the colours by hue. Clear it to order by how often each colour is used. |

**Skip colors already bound to a variable** drops a colour that is bound to a variable.
It keeps a colour that uses a style, because a style is the old way, and a variable is the goal.

## What you get

A new page, named `Color Inventory — <scope> — <date>`.

The page holds one table for each role you asked for.
Each row is one colour.

| Column | What it holds |
| --- | --- |
| Swatch | The colour. |
| Hex, HSL | The value, two ways. |
| Variable | The variable the colour is bound to, if it is bound. |
| Style | The style it uses, if it uses one. |
| Count | How many times the colour is used. |
| Where used | The frames or the components that use it. |
| → Variable | An empty column, for you to write the variable it should become. |

**Where used** names 10 places, and it says how many more there are.

A gradient and a picture are not in the tables.
They are counted as other, because one paint has no one colour.

## The colours in a picture

Select **From images**.

Color Finder finds the nodes that hold a picture, reads each picture, and reports the colours it holds.

You get a page named `Image Palette — <scope> — <date>`.
Each row is a colour, with how much of the picture it covers, and the pictures it was found in.

Use this on a logo, or on a design you got as a picture, when you must match its colours.

## Limits

- Color Finder has no Claude command. Run it from the panel.
- **Where used** stops at 10 places for each colour.
- A gradient and a picture paint are not in the role tables.
- The report is a page in your file. It is not a file you can download.
- An icon is found by the name of the layer. An icon with another name lands in **Backgrounds**.

## Trouble

**The scan is slow.** You scanned every page, and you looked inside the instances. Scan one page first.

**A colour I can see is not in the report.** It is on a gradient or a picture, or its role was not selected, or it is bound to a variable and you selected **Skip colors already bound to a variable**.

**An icon colour is in the Backgrounds table.** The layer name does not read as an icon. Rename the layer, or read the row where it is.

**The Icons table is empty.** No layer name in the scope reads as an icon.
