---
title: Icon Finder
description: Identify which icon library an icon came from, by its shape or by its name.
---

Find out which icon library an icon came from.

## What it does

You have an icon in a file, and you do not know where it came from.

Select it, and Icon Finder compares its shape against a database of 22414 icons from seven libraries.
It gives you the icons that look the same, the library each one is from, and a link to that icon in the library.

You can search by name as well, if you know what the icon is called.

The database is in the plugin.
Nothing about your file goes to a network.

## The libraries

| Library | Icons |
| --- | --- |
| Material Design Icons | 7447 |
| Tabler | 6146 |
| Remix | 3229 |
| Bootstrap | 2078 |
| Lucide | 1715 |
| Phosphor | 1512 |
| Feather | 287 |

## When to use it

- An icon in a file must be replaced with the one from your design system, and you must know what it is first.
- You inherited a file, and you must know which icon library it uses. Select many icons at one time, and the panel reports the count for each library.
- You need an icon by name, and you want to know which libraries have it.

## When not to use it

- You want to place an icon from your own design system. Use [DS Explorer](/modules/ds-explorer/).
- The icon is a drawing that no library holds. The search finds nothing, which is the correct answer.

## Before you start

Open the panel, and select **Icon Finder** in the module list, under **Beta**.

## Find by shape

1. Select one icon on the canvas, or many.
2. Read the results in the panel.

Icon Finder makes a picture of each icon you selected, and it compares the picture against the database.
It does not read the name, and it does not read the layers.
So a renamed icon is still found, and an icon drawn in another way is not.

With more than one icon selected, the panel gives you a **Library breakdown**: how many of your icons came from each library, and how many matched nothing.

That breakdown is the answer to "which library does this file use".

## Find by name

Type in the search field.

The search reads the name of each icon and the words the library gives it.
So `bell` finds the bell, and so do `alarm`, `notification` and `ringer`.

An exact name comes first, then a name that starts with your words, then the rest.

## What you get

For each match you get the icon, its name, the library it is from, and a link.
The link opens the page of that icon in the library, so you can read the licence or download it.

## Why an icon does not match

The comparison is on the shape, and it allows a small difference.
An icon that is more different than that is not a match, and it is reported as unmatched.

This is the intent.
A list of icons that look almost right is worse than the honest answer that the icon is not in the database.

Common reasons for no match:

- The icon is from a library that is not in the list.
- The icon was drawn for you.
- The icon holds more than one shape, such as a shape with a background.

## Limits

- Icon Finder has no Claude command. Run it from the panel.
- The database is fixed in the plugin, from 16 June 2026. An icon added to a library after that is not there.
- The comparison is on the shape only. Two icons that look the same but mean different things are both reported.
- Icon Finder finds an icon. It does not replace it.

## Trouble

**The panel says to select an icon.** Nothing is selected. Select the icon on the canvas.

**Nothing matched.** The icon is not in the database. Read the reasons above.

**The wrong icon is first.** The shapes are close. Read the whole list, and use the link to check.

**A colour icon gave a strange result.** The comparison uses light and dark, and not colour. Flat colour shapes can look the same.
