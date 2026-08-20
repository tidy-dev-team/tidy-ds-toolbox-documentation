---
title: DS Explorer
description: Look at a design system component, then build a trimmed local copy of it in your file.
---

Look at a design system component, then build a local copy of it in your file.

## What it does

DS Explorer holds a list of the design system components.
Select one, and the panel shows a preview, the description, and every property.

You then build a copy into your file.
Before you build, you drop the properties and the variants you do not need, so you get a smaller component than the one in the library.

The copy is local.
DS Explorer breaks the link to the library, so your file does not depend on it.
Read [What the copy keeps](#what-the-copy-keeps) for what that means, because it is not the same for every part.

## When to use it

- You must start a component in a new file, from the design system.
- You need a component with fewer variants than the library gives you.
- You want to read the properties or the description of a component, and you do not want to open the library file.

## When not to use it

- You want an instance of the library component. Use the Figma assets panel. DS Explorer makes a local copy, not an instance.
- The component you need is not in the list. The list is fixed, and the panel gives you no way to add to it.

## Before you start

Open the Tidy DS Toolbox panel, and select **DS Explorer** in the module list, under **Stable**.

## Steps

1. Find the component in the list on the right. The list is grouped, such as **Avatar** or **Cards**. Type in the search field to make the list shorter.
2. Select the component. The panel loads the preview, the description, and the properties.
3. Clear the checkbox of each property you do not want.
4. For a variant property, clear the checkbox of each variant option you do not want.
5. Select **Build Component**.

The component is built in your file, with `(Built)` after its name.

## What the checkboxes do

The checkbox of a property, and the checkbox of a variant option, do different things.

- **A property that is not a variant.** Clear the checkbox, and the property is removed from the copy. A text property, a boolean, or an instance swap goes away.
- **A variant option.** Clear the checkbox, and that variant is not in the copy. The other options stay.
- **A whole variant property.** Clear the checkbox at the top, and the copy keeps the default value of that property only. A variant property cannot be removed, so this is the nearest result.

Every checkbox starts selected, so a build with no change gives you the whole component.

## What the copy keeps

The copy is a clone, and then DS Explorer breaks the links to the library.
Three things happen, and each one is different.

| Part | What happens |
| --- | --- |
| The component itself | It becomes local to your file. |
| Nested instances | They are detached into frames. The layers and the look stay the same. You lose the ability to swap them or to change their variant. |
| Colour, text and effect styles | They become local styles in your file. |
| Variables | They stay bound to the design system library. This is deliberate, so your copy still follows the tokens. |

A nested instance is fixed once it is placed, so the detach costs you little.
Plan for it if you expected to swap an icon inside the copy later.

## Drive it with Claude

Run `/tidy-ds` in Claude Code.

```
/tidy-ds
/tidy-ds Avatar*
/tidy-ds Avatar
/tidy-ds Avatar --image
/tidy-ds Buttons --place
```

- With no name, you get the list of registered names.
- With a name that has a `*`, you get the names that match.
- With an exact name, you get the properties, the description, and the nested instances.
- `--image` adds a picture of the component.
- `--place` puts a copy of a component set on the page, and gives you the node id.

`--place` works on a component set only.
A single component gives you an error.

The node id from `--place` goes straight into `/tidy-labels`, so you can place a set and label it in two commands.
Read [Component Labels](/modules/component-labels/).

The Claude path gives you the whole component, and it does not trim properties.
Use the panel when you want a smaller copy.

## Limits

- The component list is fixed in the plugin. A component that is new in the library is not there until the plugin is released again.
- The preview shows the default variant, and not every variant.
- A property with no name is not listed.

## Trouble

**The panel says there is no preview.** Figma could not export a picture of the component. The properties still work, and the build still works.

**The panel says there is no description.** The component has no description in the library, and no description on its default variant.

**The list is empty.** Your search matches nothing. Clear the search field.

**The build kept a variant property I cleared.** A variant property cannot be removed from a component set. The copy holds its default value only, which is the nearest result.
