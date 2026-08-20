---
title: Off-Boarding
description: Pack pages into frames so you can copy them to another file, then unpack them into pages again.
---

Move pages from one Figma file to another.

## What it does

Figma copies a frame between files.
It does not copy a page.

Off-Boarding works around that in two steps.

**Pack.**
Each page you select becomes one frame, on a page named `__TCC_TEMP__`.
The frames are arranged in a grid, and they are selected for you, so you copy them at once.

**Unpack.**
In the other file, you paste the frames, then you select **Unpack Pages**.
Each frame becomes a page again, with its original name.

The module also has two search tools, for the parts that do not travel well.

## When to use it

- You hand a project over, and the work must go to a file the client owns.
- You split one file into two, or you join two files.

## When not to use it

- You move a few frames only. Figma copies frames between files by itself.

## Before you start

- Open the panel, and select **Off-Boarding** in the module list, under **Beta**.
- Open both files, so you can paste in the second one.

## Pack the pages

1. Select the pages you want, in the list. **Select all** and **Select none** are there to help.
2. Select **Pack Pages**. The button says how many pages it will pack.
3. Wait. To stop it, select **Stop**. The pages it already packed stay packed, and the panel names the pages it did not reach.

Off-Boarding changes to the `__TCC_TEMP__` page and puts the frames there.
It makes that page if your file does not have it, and it empties it before a new pack.

The frames stay selected, so press the copy key at once.

## Unpack the pages

1. Open the other file.
2. Paste the frames.
3. Select **Unpack Pages**.

Each frame becomes a page, at the end of the page list.
The name comes from the page the frame was packed from.

Off-Boarding looks for the `__TCC_TEMP__` page first.
If the file does not have one, it reads the top-level frames of the page you are on.
So paste the frames on their own page, and not among your work.

## A section becomes a frame, and then a section again

Figma does not put a section inside a frame.
So a section is packed as a frame, and the fact that it was a section is recorded on it.

The unpack reads that record and makes the section again.

## Find the parts that do not travel

Two buttons find what a copy between files breaks.

| Button | What it finds |
| --- | --- |
| Find bound variables | Every node in your selection that is bound to a variable. |
| Find hidden layout grid styles | Every node in your selection that uses a layout grid style. |

Both work on your selection, and both select what they find and go to it.

A variable and a style belong to the file, or to a library.
A copy to another file breaks that link, so run these before you pack, and you know what to repair.

## Fonts

A page can hold a font your machine does not have.
Figma refuses to move that text.

Off-Boarding does not stop on it.
It packs what it can, and it names the page it could not pack and the font that stopped it.

The unpack is the more likely half to meet this, because a file is often packed on one machine and unpacked on another.

## Limits

- Off-Boarding has no Claude command. Run it from the panel.
- The unpack always makes a new page. It does not add to a page you have.
- A pack empties the `__TCC_TEMP__` page first. Do not keep work there.
- A page that could not be packed is named, and the run continues. Read the message.

## Trouble

**The Pack button is off.** No page is selected in the list.

**The unpack says no top-level frames were found.** You are on a page with no frames at the top level, and the file has no `__TCC_TEMP__` page. Paste the packed frames first.

**A page did not pack.** The panel names it and the font that stopped it. Install the font, or replace the text.

**A page unpacked in part.** The new page holds what was restored, and the packed frame holds the rest. Nothing is lost. Read the message, fix the cause, and unpack the frame again.

**A variable is not bound after the move.** The variable belongs to the file you left. Use **Find bound variables** before the pack, so you know what to bind again.
