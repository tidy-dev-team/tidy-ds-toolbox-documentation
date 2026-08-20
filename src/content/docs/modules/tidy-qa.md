---
title: Tidy QA
description: Run the DS Component QA checklist against a component set, and get the result as a report or as a frame on the canvas.
---

Run the DS Component QA checklist against a component set.

## What it does

Tidy QA runs the DS Component QA checklist, the same 19-item checklist you tick by hand.
16 of the 19 items are automated.
Tidy QA reads the component set, gives each automated item a status, and names the layer behind each defect.

You get the result in one of two forms.

- A report in the Claude conversation.
- A checklist frame on the Figma canvas, next to the component.

The 3 items that are not automated stay on the checklist.
They get a row with no status, because a person must still tick them.

## Run it from Claude

Tidy QA has no entry in the plugin panel.
The panel must be open, because Tidy QA works through the Bridge, but you start every run from Claude.

Read [Connect the plugin to Claude](/setup/connect-claude/) first.

## When to use it

- A component is ready for review, and you want the defects before a person reviews it.
- You fixed a defect and you want to confirm the fix.
- You must show the state of a component to somebody else. Use the canvas frame.

## When not to use it

- The component is still changing shape. The report describes the component as it is now.
- You want to check one placed instance. Tidy QA always resolves up to the owning component set and checks the whole set.

## Before you start

- The Tidy DS Toolbox panel must be open in Figma. The status line must say the Bridge is connected.
- The target must be a component set. An instance or a single component is accepted, and Tidy QA resolves up to the set that owns it.

## Steps

1. Select the component in Figma. You can name it instead, so this step is optional.
2. Run `/tidy-ds:tidy-qa` in Claude Code.
3. Read the report in the conversation.

To draw the checklist on the canvas, add `--canvas`.

```
/tidy-ds:tidy-qa
/tidy-ds:tidy-qa Button
/tidy-ds:tidy-qa Notification*
/tidy-ds:tidy-qa --canvas Button
```

With no target, Tidy QA uses the current Figma selection.
A name with a `*` matches more than one name.
A name that matches more than one component set gives you the list of candidates, and you select one.

To run part of the checklist, name the checks.
`/tidy-ds:tidy-qa Button tokens grid-4px` runs those two checks only.
The other automated rows report as not run, and not as a pass.

## What you get

### The report

One row for each of the 19 items, in checklist order.
Each row has a status.

| Status | What it means |
| --- | --- |
| Pass | The check found no defect. |
| Warn | The check found a defect that is not a blocker. |
| Fail | The check found a defect to fix. |
| Manual | The item is not automated. A person ticks it. |
| Partly manual | The check covers part of the item only. The rest needs a person. |
| Not applicable | The check ran, and it had nothing to judge. An icon set has no text, so the contrast check has nothing to measure. |
| Not run | A check filter excluded the check. |

A row that is not applicable also gives the reason.
On an asset set, those reasons are most of what the run establishes.

Each defect names the layer, the severity, and what the check expected against what it found.
One defect is reported one time, and it carries the number of layers it covers.
Variants share their layers, so one mistake in a shared layer is one finding on many nodes, and not many findings.

### The canvas frame

`--canvas` draws a frame next to the component, with all 19 rows and the defects under each row.
Two items show a picture of the variant with the defect, because the defect is one you can see.
They are **Check All the Props** and **High Contrast**.

The frame carries evidence blocks beside it.

- **The mode showcase.** The default variant, drawn one time for each theme mode, side by side. You get it when the set has more than one mode. It shows what no check can judge, which is whether the component still reads correctly in every mode.
- **The resize evidence.** The baseline beside the state that broke, with the measured numbers. You get it only when the responsiveness check measured a break, so a healthy component costs you nothing.
- **The contact sheet.** A grid of every property combination. Add `--sheet` to ask for it. It is off by default, because it is dozens of instances and it carries no verdict.

No evidence block changes the status of a row.
Each block is evidence for a tick that a person still owns.

A second run for the same component replaces the frame from the first run.
It does not draw a second frame.

## The 19 items

| # | Item | Automated |
| --- | --- | --- |
| 1 | Storybook Alignment + Note | No |
| 2 | Components Naming Dev Alignment | Yes |
| 3 | Check All the Props | In part |
| 4 | Prop Names Aligned to Catalogue | Yes |
| 5 | Tokens (Styles & Variables) | Yes |
| 6 | Typography Desktop\|Mobile | No |
| 7 | Responsiveness (+ Min-Max) | In part |
| 8 | Icons/Illustrations/Logos to Foundations | Yes |
| 9 | Layer Naming + Structure | Yes |
| 10 | 4px Grid Alignment | Yes |
| 11 | Interaction (Hover Only) | Yes |
| 12 | Description (AKA + Misprint) | Yes |
| 13 | No Conflicts | Yes |
| 14 | Nested Instance Depth | Yes |
| 15 | Preferred (Instance Swapping) | Yes |
| 16 | High Contrast (A11y) | Yes |
| 17 | Themes (per-mode resolution) | In part |
| 18 | Page Template | No |
| 19 | Documentation | In part |

"In part" means the check covers part of the item, and the report says what is left for a person.
Item 17 is one example.
The check establishes that every bound variable resolves in every mode.
It cannot judge whether the component looks good in a mode, so that half stays with you.

## What Tidy QA changes in your file

The report changes nothing.
Three checks build a temporary frame outside the canvas, measure what they need, and remove it before the run ends.

- The themes check and the high contrast check resolve variables for each theme mode.
- The responsiveness check makes an instance of the default variant, drives its width, and makes its text longer, to measure what breaks.

`--canvas` adds the checklist frame and its evidence blocks.
It changes nothing else, and it never edits your component.

## Limits

- The target must resolve to a component set.
- A defect that covers many layers lists 10 of them, and gives the full number.
- The contact sheet stops at 48 instances, and the block says so.
- A check filter takes the check id, not the item number.

## Trouble

**Claude says the Bridge is disconnected.** Open the Tidy DS Toolbox plugin in Figma, and run the command again.

**The run says there is no target and nothing is selected.** Select the component set in Figma, or give the name in the command.

**The name matched more than one component set.** Claude gives you the candidates. Select one, or give a narrower name.

**A row says n/a.** The check ran, and the component had nothing for it to judge. The row gives the reason.

**A row says not run.** A check filter excluded it. Run the command with no check names to run the full checklist.
