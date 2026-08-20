---
title: Tidy Mapper
description: Mark the components you see in a design with the Slice tool, and collect them onto a page for each component.
---

Mark the components you find in a design, and collect them for each component.

## What it does

You have a design, or a screenshot of a product, and you must know which components it uses.

Tidy Mapper makes that a two-step job.
First you mark each part of the design with the Figma Slice tool, and you give the slice the name of a component.
Then Tidy Mapper collects the marks.

For each mark it makes a picture.
It puts the pictures on a page named after the component, so every place a Button is used lands on the **Buttons** page, one numbered row for each.

Each row holds a link.
Select the link, and Figma takes you back to the place in the design the picture came from.

## When to use it

- You must inventory the components in an existing product, before you build a design system.
- You must show where a component is used, and how many times.

## When not to use it

- You want to swap a component for another one. Tidy Mapper does not swap anything.
- You want a report with severity and notes. Use [Audit](/modules/audit/).

## Before you start

- Open the page that holds the design.
- Open the panel, and select **Tidy Mapper** in the module list, under **Stable**.

The Slice tool is a Figma tool, and the **S** key selects it.
In the Figma main menu, under **Preferences**, select **Keep tool selected after use**.
The tool then stays on, and you mark one part after another without a stop.

## Steps

1. In the panel, select the component in the **Component** list.
2. Press **S** for the Slice tool, and draw over each part of the design that uses that component.
3. Select the next component in the list, and mark the parts that use it.
4. Repeat until the design is marked.
5. Select **Build slices**.

The name in the panel is the name each new slice gets.
So you select the component one time, and every slice you draw next takes that name.

The list holds about 50 names, such as **Avatar**, **Cards**, **Modal (Dialogue)** and **Other**.
Use **Other** for a part that is none of the rest.

## What you get

**Build slices** reads every slice on the current page, and for each one it does four things.

1. It exports the slice as a picture, at two times the size.
2. It draws a **trail**, a frame with a magenta dashed border, in the place the slice was. The trail is hidden.
3. It removes the slice.
4. It puts the picture in a numbered row, on the page for that component.

A page is made for each component name, if your file does not have it.
The page holds a frame named `<Component> Mapping`, with a large title.

A slice you did not name keeps the Figma default name, which starts with `Slice`.
Tidy Mapper collects those on a page named **Other**.

## The trails

A trail is the record of where a mark was, after the slice is gone.
The **Trail Markers** part of the panel controls them.

- Show every trail on the page.
- Hide every trail.
- Show the trails of one component only. Select the name in **Filter by Name**.

Use the filter to see every place one component is used, on the design itself.

## Limits

- Tidy Mapper has no Claude command. Run it from the panel.
- **Build slices** reads the current page only.
- The slices are removed by the build. The trails hold their place, so keep them.
- The component list is fixed in the plugin. Use **Other** for a name that is not there.
- A second build adds rows to the same mapping frame. It does not start again.

## Trouble

**The panel says no slices were found.** The current page holds no slice. Press **S** and mark the design, or change to the page that holds your marks.

**Everything went to the Other page.** The slices kept their default names. Select the component in the panel **before** you draw the slices.

**I cannot find the trails.** They are hidden after a build. Select **Show trails** in **Trail Markers**.

**A link goes nowhere.** The trail was deleted. The link points at the trail, and not at the design.
