---
title: Install the Figma plugin
description: Put the Tidy DS Toolbox plugin into Figma, and open it.
sidebar:
  order: 1
---

The Tidy DS Toolbox is not in the Figma community.
You install it from a folder, with **Import plugin from manifest**.
You do this one time.

## Get the plugin folder

The team shares the plugin on Google Drive.

1. Open Finder.
2. Go to **Shared drives / shared kido / Tidy / plugins**.
3. Wait for Google Drive to sync the folder.
4. Find the folder **Tidy-DS-Toolbox-latest**.

The folder holds `manifest.json`, a `dist` folder, and a `VERSION.txt`.
`VERSION.txt` gives the version and the build date, so you can see what you have.

## Import it into Figma

1. Open the Figma desktop application. The web application cannot import a plugin from a manifest.
2. Open the Figma menu, then **Plugins**, then **Development**, then **Import plugin from manifest**.
3. Select `manifest.json` in the **Tidy-DS-Toolbox-latest** folder.

Figma adds **Tidy DS Toolbox** to **Plugins**, then **Development**.

## Open it

Open a design system file, then **Plugins**, then **Development**, then **Tidy DS Toolbox**.

The panel opens, and it shows the module list.
The modules are grouped under **Stable**, **Beta** and **Alpha**.

## Keep the Figma window in front

macOS slows a window that is in the background.
A plugin in a background window stops making progress, and a long build can time out.
Keep the Figma window in front while a module runs.

## Update it

Google Drive syncs a new version into the same folder.
Figma reads the folder each time it starts the plugin, so a sync is the whole update.
Close the plugin and open it again to get the new version.

You do not import the manifest a second time.

## If you have GitHub access

The plugin also ships with each release on GitHub.

1. Open the [releases page](https://github.com/tidy-dev-team/tidy-ds-toolbox/releases).
2. Download `plugin-bundle.zip` from the **Assets** list. Do not download the source code archive.
3. Extract the ZIP file.
4. Import `manifest.json` from the extracted folder, with the steps above.

## Trouble

**Figma has no Development menu.** You are in the web application. Use the desktop application.

**Figma rejects the manifest.** You selected the wrong file, or Google Drive did not finish the sync. Select `manifest.json` in the top level of **Tidy-DS-Toolbox-latest**, and wait for the sync.

**The panel is empty.** The `dist` folder did not sync. Wait for Google Drive, then open the plugin again.

## Next

The panel gives you the modules that run in Figma.
Some modules run from Claude, and they need one more step.
Read [Connect the plugin to Claude](/setup/connect-claude/).
