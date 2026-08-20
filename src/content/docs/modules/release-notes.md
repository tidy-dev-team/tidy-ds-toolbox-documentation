---
title: Release Notes
description: Write release notes for each sprint, publish them as cards next to the components they are about, and export them.
---

Write release notes for each sprint, and publish them on the canvas.

## What it does

A design system changes, and the people who use it must know what changed.

Release Notes holds that record in the Figma file.

- You make a **sprint**, which is one set of changes.
- You write a **note** in it. Each note is about one thing, and it has a tag such as **Added** or **Fixed**.
- You **publish** the sprint. Each thing with a note gets a card next to it on the canvas.
- You **export** the notes as a CSV file, or as JSON.

The notes are kept in the file.
Anybody who opens the file with the plugin sees the same notes.

## When to use it

- You finished a sprint on the design system, and the change must be written down.
- Somebody asks what changed, and when.

## When not to use it

- You want the notes of a code repository. This module reads Figma, and nothing else.

## Before you start

Open the panel, and select **Release Notes** in the module list, under **Beta**.

## Steps

1. In **Sprints**, make a sprint, and give it a name.
2. Select what the note is about. Select a component in **Components**, or a page in **Foundation**.
3. Write the note, and select its tag.
4. Repeat for each change in the sprint.
5. Select **Publish to canvas**.

## What a note is about

A note is about one thing, and one only.

- **A component.** A component set, or a single component.
- **A Foundation Page.** A page of the file, such as the colours or the type.

The name is kept with the note.
So a note still reads correctly after the thing is renamed, or after it is deleted.

## The tags

| Tag | Use it for |
| --- | --- |
| Added | Something new. |
| Changed | Something that works in another way now. |
| Fixed | A defect that is repaired. |
| Deprecated | Something that must not be used in new work. |
| Deleted | Something that is gone. |

The tags read in this order on the card, and in the panel.

## Publish to canvas

**Publish to canvas** draws a card for each thing with a note in the sprint.

- A card for a component sits beside that component, on the page the component is on.
- A card for a Foundation Page sits at the left edge of that page.
- A component inside a frame, such as a documentation frame, gets its card at the left edge of the page instead. A card on top of the frame it describes would hide it.

The whole sprint also gets a card on a page named **Release notes**.
The module makes that page if your file does not have it.

Each card carries a mark that says the module made it.
So a card is found again by that mark, and not by its name or its place.
You can rename a component, and its card is still its card.

## Card Appearance

The card takes a font and a background colour, in **Card Appearance**.
The choice is kept in the file, so every card in that file matches.

The other colours are worked out from your background.
So a card is readable whatever background you select, and a dark background is safe.

The colours of the tags are fixed.
Green reads as added and red reads as deleted in any file, so they do not follow your choice.

## Export and import

| Button | What you get |
| --- | --- |
| Export CSV · this sprint | A spreadsheet of the sprint you are on. |
| Export JSON · all | Every sprint, in one file. |
| Import notes | Reads a JSON file that this module wrote. |

Use the CSV file for a report to the team.
Use JSON to move the notes to another file, or to keep a copy.

The CSV file holds a link to each thing a note is about.
That link needs the key of the file.
Figma does not always give the plugin the key, so the panel asks you to paste the URL of the file.
Without it, the export still works, and it says it has no links.

## Clear canvas

**Clear canvas** removes the published cards.

It does not delete at once.
It shows you what it found, and you confirm.

- A card with the mark of the module is selected for you.
- A frame that only looks like an old card, by its name, is **not** selected. Select it yourself if you want it gone.

This is deliberate.
The module deletes what it knows it made, and it asks about the rest.

## Limits

- Release Notes has no Claude command. Run it from the panel.
- A note needs a component or a Foundation Page. It cannot be about a frame, or about the file as a whole.
- Publish reads one sprint. Publish each sprint you want on the canvas.
- The notes are kept in the file. A file you copy carries them, and a file you do not open does not have them.

## Trouble

**Publish says the sprint has no notes.** Write a note in it first.

**A card was not built for one note.** The thing the note is about is not in the file any more, or it moved to another file. The note stays, with its name.

**The CSV file has no links.** The plugin has no file key. Paste the URL of the file in the panel, then export again.

**A card is in a strange place.** The component sits inside a frame, so its card goes to the left edge of the page. That is the intent.

**Clear canvas did not remove an old card.** It was made by an older version, and it has no mark. Select it in the list, and confirm.
