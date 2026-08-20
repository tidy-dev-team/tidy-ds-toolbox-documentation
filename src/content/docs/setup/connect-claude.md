---
title: Connect the plugin to Claude
description: Install the Tidy DS Toolbox plugin for Claude Code, so Claude can drive the modules in Figma.
sidebar:
  order: 2
---

Some modules are driven from Claude Code, and not from the panel.
Tidy QA is one, and it has no panel button at all.
To use them, you install a second thing: the Tidy DS Toolbox plugin for Claude Code.

You do this one time.

## Before you start

- Claude Code must be installed. Go to [claude.com/claude-code](https://claude.com/claude-code). Claude Code brings the Node runtime that the plugin needs.
- The Figma plugin must be in Figma. Read [Install the Figma plugin](/setup/install-plugin/).
- The Google Drive folder must be synced.

Claude Desktop, the chat application, does not work here.
The plugin is a Claude **Code** feature.

## Install it

1. Open Finder.
2. Go to **Shared drives / shared kido / Tidy / plugins**.
3. Double-click **Install Tidy DS (Claude Code).command**.

macOS blocks a downloaded script the first time.
If nothing opens, right-click the file, then select **Open**, then confirm.

A terminal window opens and reports each step.
When it is done, it says `Installed tidy-ds`.

The installer gives you the `/tidy-ds:` commands, and it connects the MCP server for you.
You edit no configuration file.

## Confirm it worked

1. Open a terminal.
2. Start Claude Code with `claude`.
3. Type `/tidy-ds:` and read the list of commands.

You get one command for each module that Claude can drive, such as `/tidy-ds:tidy-qa`.

If the commands are not there, run `/reload-plugins`, then look again.

## Every session

The connection is made new each time.
Do these two things in this order.

1. Open the Tidy DS Toolbox plugin in Figma. The panel connects to Claude by itself, and it retries until it succeeds.
2. Start Claude Code, and run a `/tidy-ds:` command.

The panel shows the state of the connection.
It names the Bridge, which is the connection, and the file it is bound to.

A command from Claude reaches your Figma file only while the panel is open.
If you close the plugin, or you change to another Figma file, the connection ends.
Open the plugin again in the file you want.

Keep the Figma window in front while a command runs.
macOS slows a background window, and the command can time out.

## Update it

1. Let Google Drive sync the folder.
2. Double-click **Install Tidy DS (Claude Code).command** again.

The installer replaces the version you have.

The Figma plugin and the Claude plugin ship together at the same version.
Update both at the same time.

## Trouble

**Claude says the Bridge is disconnected.** The plugin is not open in Figma, or you changed the Figma file. Open the plugin in the file you want, then run the command again.

**The installer says the `claude` command was not found.** Claude Code is not installed. Install it first.

**The installer says the marketplace was not found.** Google Drive did not finish the sync, or you moved the installer out of the **plugins** folder. Run it from inside that folder.

**A command times out.** The Figma window went to the background. Bring it to the front, and run the command again.

**macOS does not open the installer.** Right-click the file, then select **Open**.

## Next

Select a module in the sidebar.
Each module page says whether you run it from the panel, from Claude, or both ways.
