---
title: Audit
description: Write notes on a design with a severity, then build one report from them and export it as a PDF or a CSV file.
---

Write notes on a design, then build one report from them.

## What it does

An audit is two jobs.
You find the problems, then you report them.

**You write the notes.**
Select a part of the design, select the type of problem, and give it a severity.
Audit draws a highlight around the part, and it writes the note beside it.

**Audit builds the report.**
It reads every note in the file, and it draws a report on a page named **📊 Audit result**.
The report is grouped, and each entry has a picture of the part, the note, and a link back to it.

You then export the report as a PDF or as a CSV file.

## When to use it

- You must review a design system, or a product, and hand over the findings.
- You must show the problems by severity, so the team knows what to do first.

## When not to use it

- You want the automated checks on one component. Use [Tidy QA](/modules/tidy-qa/), which finds the defects for you.
- You want an inventory of the components in a design. Use [Tidy Mapper](/modules/tidy-mapper/).

Audit finds nothing by itself.
You are the reviewer, and Audit holds and reports what you found.

## Before you start

- Open the panel, and select **Audit** in the module list, under **Stable**.
- Select the part of the design you want to write a note on.

## Write a note

1. Select the frame or the element on the canvas.
2. Select the **Category** of the problem.
3. Select a **Predefined Note**, which fills in the standard words. This is optional.
4. Write anything more in **Additional Notes**. This is optional.
5. Select the severity: **Low**, **Medium**, **High** or **Critical**.

The severity button writes the note.
There is no separate save.

Audit then draws a highlight around the element, and a note frame beside it, in the colour of the severity.

| Severity | Colour |
| --- | --- |
| Low | Green |
| Medium | Yellow |
| High | Orange |
| Critical | Red |

### The categories

The **Category** list holds 16 types of problem, such as **Accessibility**, **Component Design**, **Color Usage**, **Developer Handoff**, **Typography** and **Version Control**.

Each category has standard notes.
Select one in **Predefined Note**, and you get words the team uses for that problem, so two reviewers report the same problem the same way.

You can write your own words as well, in **Additional Notes**.

### Quick Wins

Select an element that already has a note, then select the **Quick Win** button.
The note is marked as a quick win.

The report gives the quick wins their own group, so the team can see what is cheap to fix.

An element with no note cannot be marked. The panel says so.

## Build the report

Select **Generate Report**.

Audit reads every note in the file, and it draws the report on the **📊 Audit result** page.
It makes the page if your file does not have it.

A second run replaces the report.
It does not add a second one, so build it again whenever the notes change.

Each entry in the report holds a picture of the part, the category, the note, the severity, and a link back to the place on the canvas.

## Export it

| Button | What you get |
| --- | --- |
| Export PDF, then Export Single Page | The whole report as one page. |
| Export PDF, then Export Multi-Page | The report as one page for each entry. |
| Export CSV | A spreadsheet, with one row for each note. |

The CSV file holds the id, the problem type, the standard note, your note, the link, the severity, and whether the note is a quick win.

Use the CSV file to work in a spreadsheet or a tracker.
Use the PDF for a hand-over.

## Clear it up

Two buttons remove things, and they remove different things.

- **Erase Notes on Canvas** removes the highlights and the note frames from the canvas. The notes are still recorded, so **Generate Report** still gives you the whole report.
- **Erase Report Data** removes the record of the notes. The report cannot be built again after that.

Use the first to make the design readable again.
Use the second to start an audit again.

## Limits

- Audit has no Claude command. Run it from the panel.
- A note is written on the file, and not on the component. A file you copy carries the notes with it.
- One element takes one note for each severity. A second note at the same severity replaces the first.
- **Erase Report Data** cannot be undone. Export the CSV file first.

## Trouble

**The severity button does nothing.** Nothing is selected, or the selection cannot take a note. Select a frame or an element on the canvas.

**The Quick Win button says no note was found.** Write a note on that element first.

**The report is empty.** The file holds no notes, or **Erase Report Data** removed them.

**The report shows a note for a part I deleted.** The record is kept on the file, and not on the element. Erase the report data and build it again, or ignore the entry.
