---
title: Slash commands
description: Every Tidy DS Toolbox command you can run in Claude Code, what it does, and what it writes.
sidebar:
  label: All commands
  order: 1
---

Every command the Toolbox gives you in Claude Code.

Each command has a module page, and that page holds the detail.
This page is the list, so you can find the command you want.

## Before any command

Two things must be true.

1. The Tidy DS Toolbox plugin is open in Figma, in the file you want to work on.
2. The Claude Code plugin is installed. Read [Connect the plugin to Claude](/setup/connect-claude/).

Keep the Figma window in front while a command runs.
Read [How Claude reaches your Figma file](/setup/how-it-connects/) for why.

## The commands

Each name starts with `/tidy-ds:`, which is the name of the plugin.
Type `/tidy-ds:` in Claude Code to see the list.

| Command | What it does | Writes | Read |
| --- | --- | --- | --- |
| `tidy-find` | Lists the components in the file, with their node ids. | No | [Find components](/modules/tidy-find/) |
| `tidy-qa` | Runs the 19-item QA checklist on a component set. | Only with `--canvas` | [Tidy QA](/modules/tidy-qa/) |
| `tidy-doc` | Builds a Documentation Page, with the prose written for you. | Yes | [Tidy Doc](/modules/tidy-doc/) |
| `tidy-ds` | Reads a design system component, or places a copy of a set. | Only with `--place` | [DS Explorer](/modules/ds-explorer/) |
| `tidy-labels` | Draws the variant labels around a component set. | Yes | [Component Labels](/modules/component-labels/) |
| `tidy-misprint` | Writes the searchability lines on a component description. | Yes | [Misprint](/modules/misprint/) |
| `tidy-ds-template` | Stamps the 58 standard pages of a design system file. | Yes | [DS Template](/modules/ds-template/) |

Start with `tidy-find` when you need a node id for one of the others.

## What each one takes

### tidy-find

```
/tidy-ds:tidy-find
/tidy-ds:tidy-find Btn*
/tidy-ds:tidy-find page Icons
/tidy-ds:tidy-find limit=500
```

The whole file, or one page.
A pattern with `*` filters the names, and it is case-sensitive.
You get 200 components by default, and 1000 at the most.

### tidy-qa

```
/tidy-ds:tidy-qa
/tidy-ds:tidy-qa Button
/tidy-ds:tidy-qa --canvas Button
/tidy-ds:tidy-qa --sheet Button
/tidy-ds:tidy-qa Button tokens grid-4px
```

A node id, a name, a pattern, or nothing for the selection.
`--canvas` draws the checklist in Figma instead of reporting it in Claude.
`--sheet` adds a grid of every property combination.
A check id, such as `tokens`, runs that check only.

### tidy-doc

```
/tidy-ds:tidy-doc
/tidy-ds:tidy-doc 2543:1881 status=REVIEWING
/tidy-ds:tidy-doc sections=variants,breakdown,related
/tidy-ds:tidy-doc dry-run=true
```

`status=` sets the badge on the page.
`sections=` limits which sections are written.
`dry-run=true` writes the content and builds nothing, so you can read it first.

### tidy-ds

```
/tidy-ds:tidy-ds
/tidy-ds:tidy-ds Avatar*
/tidy-ds:tidy-ds Avatar --image
/tidy-ds:tidy-ds Buttons --place
/tidy-ds:tidy-ds Buttons --place localize=none
```

With no name, you get the registered names.
`--image` adds a picture.
`--place` puts a copy of a component set on the page, and gives you its node id.

`--place` breaks the link to the library by default.
`localize=none` keeps the link, and `detach` or `styles` breaks one half of it.

### tidy-labels

```
/tidy-ds:tidy-labels
/tidy-ds:tidy-labels top=Type left=State
/tidy-ds:tidy-labels 2625:10445 top=Type left=State secondTop=Size
/tidy-ds:tidy-labels top=Type left=State spacing=24 fontSize=14
```

With no axis given, Claude reads the variant properties and asks you which one goes where.
It does not guess.

`top`, `left`, `secondTop` and `secondLeft` take a property name, or `none`.
`spacing` and `fontSize` are in pixels, and they default to 16 and 12.

### tidy-misprint

```
/tidy-ds:tidy-misprint
/tidy-ds:tidy-misprint Button
/tidy-ds:tidy-misprint Btn*
/tidy-ds:tidy-misprint 2226:741
```

Each argument is read by its shape: a node id, a pattern, or an exact name.
With no argument, Claude finds every component in the file and asks you before it writes.

Running it twice changes nothing, so it is safe to run again after a rename.

### tidy-ds-template

```
/tidy-ds:tidy-ds-template
/tidy-ds:tidy-ds-template --force
```

Claude asks you to confirm first, because the command is **not** safe to run twice.
A second run stamps a whole new set of pages beside the first set.

`--force` skips the question.

## How a target is chosen

Most commands take the target the same way, and in this order.

1. A node id, such as `2625:10445`.
2. A name, or a pattern with a `*`.
3. Nothing, which means the current Figma selection.

A name that matches more than one thing is not guessed.
Claude gives you the candidates, and you select one.

`tidy-qa --canvas` is the exception. It takes a node id or the selection, and no name.
Claude looks the name up for you first, so you do not notice the difference.

## When something goes wrong

| What you read | What it means |
| --- | --- |
| The Bridge is disconnected | The plugin is not open in Figma, or you changed the file. Open the plugin in the file you want. |
| No target and nothing selected | Select something in Figma, or give a name or a node id. |
| The name matched more than one | Claude lists the candidates. Select one, or give a narrower name. |
| Not found | The name or the node id matches nothing in the file. |
| The wrong node type | The target is not the kind of thing the command needs, such as a frame where a component set is needed. |
| It timed out | The work was too large, or the Figma window went to the background. Bring Figma to the front, and try a smaller scope. |

A timeout on `tidy-ds-template` is the one to read carefully.
The pages it already stamped are in your file.
Check the file before you run it again.

## Modules with no command

Nine modules run from the panel only: Tidy Icon Care, Sticker Sheet Builder, Tidy Mapper, Audit, Release Notes, Off-Boarding, Icon Finder, Color Finder, and the Address Note and Image Wrapper utilities.

There is no command for them today.
