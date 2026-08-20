---
title: Utilities
description: Four small jobs in one place - Address Note, Image Wrapper, Misprint and DS Template.
---

Four small jobs in one place.

## What it does

Utilities holds the jobs that are too small for a module of their own.
Each one is a button, and each one works on your selection.

| Utility | What it does |
| --- | --- |
| Address Note | Puts a note above each frame you selected, with a link back to it. |
| Image Wrapper | Puts each item you selected in its own frame. |
| Misprint | Writes the searchability lines on a component description. |
| DS Template | Stamps the standard pages of a design system file. |

Misprint and DS Template are large enough for their own page.
Read [Misprint](/modules/misprint/) and [DS Template](/modules/ds-template/).
The other two are here.

## Before you start

Open the panel, and select **Utilities** in the module list, under **Stable**.

Select what you want to work on, then select the button.
The panel reports what it did, and how many items it worked on.

## Address Note

Select one frame or more, then select **Address Note**.

Each frame gets a note above it, 70 pixels higher, the same width as the frame.
The note is orange, and it holds the text `למסך המקורי`, which is Hebrew for "to the original screen".

The text is a link back to the frame.

The note goes in the same parent as the frame, so a note for a frame inside a section stays in that section.
The new notes are selected after the run, and Figma goes to them.

Use it in a large file, where a copy of a screen must point back to the screen it came from.

Address Note works on a frame.
Anything else in your selection is skipped.

## Image Wrapper

Select one item or more, then select **Image Wrapper**.

Each item gets its own frame.
The frame takes the place, the size and the name of the item, and the item goes inside it at 0,0.

One frame for each item.
The items are not put in one frame together.

Use it when a picture, or any layer, must be clipped or must take a fill, and it needs a frame to do it.

## Limits

- Address Note and Image Wrapper have no Claude command. Run them from the panel.
- Address Note works on a frame only.
- The note text is fixed. Edit it on the canvas after the run.
- A second run of Address Note on the same frame adds a second note.

## Trouble

**The panel says to select one or more frames.** Nothing is selected, or your selection holds no frame. Address Note needs a frame, and not a group or a component.

**Nothing happened with Address Note.** Your selection holds no frame. The panel says how many notes it made.

**The note is behind my design.** The note is placed 70 pixels above the frame. Move it.

**Image Wrapper made too many frames.** It makes one frame for each item you selected. Select one item to get one frame.
