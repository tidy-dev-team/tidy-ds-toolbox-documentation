---
title: Find components
description: List the components in your Figma file from Claude, and get the node ids the other commands need.
---

List the components in your Figma file, from Claude.

## What it does

`/tidy-find` reads your file and gives you each component and component set, as a name and a node id.

It is the lookup step.
A command that writes needs a node id, and this is where you get one.

It runs from Claude only.
It has no panel entry, because the panel has the Figma canvas for the same job.

## When to use it

- You must give a node id to another command.
- You want to know what is in a file, or on a page, before you change anything.
- A name matched more than one component, and you must see the candidates.

## Before you start

Read [Connect the plugin to Claude](/setup/connect-claude/).
The plugin must be open in Figma.

## Steps

Run `/tidy-find` in Claude Code.

```
/tidy-find
/tidy-find Btn*
/tidy-find page Icons
/tidy-find page Icons Arrow*
/tidy-find limit=500
```

- With no argument, it reads the whole file.
- A pattern with a `*` matches names. `Btn*` gives you every name that starts with `Btn`.
- A pattern with no `*` is an exact name.
- `page` with a page name reads that page only.
- `limit=` changes how many components you get back.

The pattern is case-sensitive, and `*` is the only wildcard.

## What you get

A list of matches, each one a name and a node id.

The list also says how many components there are, and whether you got all of them.
It says so directly when the result was cut short.

Read that carefully.
A cut result is part of your file, and not all of it.

## Read one page on a large file

The whole file is read node by node.
On an icon library that is a large amount of work, and it can pass its time limit.

A name pattern does not make it faster.
The pattern makes the answer shorter, and the file is still read in full.

So on a large file, read one page.
`/tidy-find page Icons` reads the page named `Icons` only.

## Limits

- You get 200 components by default, and 1000 at the most.
- What you do not get is reported as omitted. Nothing is dropped without a word.
- The node ids belong to the open file, in this session. Close the plugin or change the file, and they are no longer valid. Read [How Claude reaches your Figma file](/setup/how-it-connects/).

## Trouble

**The command times out.** The file is large. Read one page instead of the whole file.

**The result is cut short.** Raise the limit with `limit=`, or read one page, or use a narrower pattern.

**A node id does not work in another command.** The Session ended between the two commands. Run `/tidy-find` again to get a fresh id.

**Claude says the Bridge is disconnected.** The plugin is not open in Figma. Open it, and run the command again.
