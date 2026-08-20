---
title: How Claude reaches your Figma file
description: What the Bridge and the Session are, and what ends them.
sidebar:
  order: 3
---

You do not need this page to use the Toolbox.
Read it when a command fails, and you want to know why.

## The parts

Four things stand between your words in Claude and a change in Figma.

1. **Claude Code**, where you run a `/tidy-ds:` command.
2. **The MCP server**, a small program on your own computer. It publishes each Operation that Claude can call. The installer starts it for you.
3. **The Bridge**, the connection between the MCP server and the plugin.
4. **The plugin**, in the Figma window, which does the work.

A command travels the whole line and comes back.
Every part is on your computer, so nothing about your file goes out to a network.

## The plugin opens the Bridge, not Claude

A Figma plugin cannot accept a connection.
So the plugin makes the connection outward, to the MCP server.

This gives you the one rule that explains most trouble.
**The plugin must be open in Figma before a command can reach it.**

The panel connects as soon as you open it, and it retries until it succeeds.
Claude waits a short time for the Bridge before it reports a failure, so a plugin you open a moment late still works.

## The Session

A **Session** is the life of one Bridge connection.
It is bound to one Figma window and one file.

A Session ends when you do any of these.

- You close the plugin.
- You change to another Figma file.
- You close the Figma window.

The panel names the file it is bound to, so you can see what Claude will act on.

A Session holds one file, and one only.
To work on a second file, open the plugin in that file.
The Toolbox refuses the command rather than act on the wrong file.

## Why the Figma window must stay in front

macOS slows a window in the background.
The plugin then makes progress slowly, or it stops.
A long Operation, such as a QA run or a documentation build, can pass its time limit and fail.

Keep the Figma window in front while a command runs.
You can read the result in Claude after it finishes.

## What a command can change

Each Operation is one of two kinds.

- A **Query** reads. It reports what is in your file, and it changes nothing.
- An **Execute** writes. It makes the change you asked for, and nothing else.

A module page says which kind you get, and what an Execute adds to your file.
Three QA checks are a documented exception: they build a temporary frame outside the canvas to measure something, and they remove it before the run ends.

## The panel status line

The panel reports the Bridge and the bound file.

Read the status in Figma, and not in a picture of the panel.
Outside Figma the panel reports states that are not true.

## Trouble

**`BRIDGE_DISCONNECTED`.** The plugin is not open, or the Session ended. Open the plugin in the file you want.

**The command reports the wrong file.** The panel is bound to another file. Open the plugin in the file you want, and run the command again.

**Everything is open, and the command still fails.** Close the plugin and open it again. That makes a new Session.
