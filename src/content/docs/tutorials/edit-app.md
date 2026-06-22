---
title: Edit an app
description: Update an existing OnMicro.AI app using App Builder chat or by adding and editing components directly in the Build tab.
---

Change an app you already created — adjust prompts, add fields, reorder sections, or rework the whole flow. Use **App Builder** for broad changes in plain language, or edit **components** directly when you want precise control.

## Prerequisites

- An [OnMicro.AI](https://onmicro.ai) account with access to the app (you must be the owner or an admin).
- At least one app on your dashboard. New to building apps? Start with [Build your first app](/tutorials/build-your-first-app).

## Open an app for editing

1. Go to your **dashboard** at [onmicro.ai/dashboard](https://onmicro.ai/dashboard).
2. Click the app **title**, or hover the app card and click **Edit**.

You land on the **Build** tab. The editor has three main areas:

| Area | Location | Purpose |
|------|----------|---------|
| **App settings** | Left panel | Privacy, collections, attached files, AI configuration |
| **App canvas** | Center | App Details, components, **Add Section** |
| **App Builder** | Right panel (optional) | Chat to generate or modify the app with AI |

Changes save automatically. Watch for **Saving...** in the header while updates sync.

## Edit with App Builder

App Builder is best for larger or fuzzy changes — adding a new section, changing the app’s purpose, or rewriting prompts across multiple components.

1. On the **Build** tab, click **App Builder** on the right (sparkle icon).
2. Describe what you want to change — for example:

   > Add a dropdown for grade level before the essay input, and update the AI feedback to mention the selected level.

3. Press **Enter** to send (**Shift+Enter** for a new line).
4. Wait for **App updated successfully**. The canvas updates with your changes.

**Tips:**

- Be specific about *what* should change and *where* in the learner flow.
- Click **Undo** in the App Builder header to revert the last AI update.
- App Builder only helps with building apps. Off-topic messages receive a brief notice and do not change your app.
- Your App Builder conversation persists if you refresh the page in the same browser tab.

To close App Builder, click **X** in its header. Reopen it anytime with the **App Builder** button.

## Edit components directly

Use the canvas when you know exactly which field, prompt, or section to touch.

### Add a component

1. Scroll to the bottom of the component list and click **Add Section**.
2. Or hover between two existing components and click the **+** button that appears on the divider line.
3. Pick a component type from the menu:

   | Group | Components |
   |-------|------------|
   | **Display** | Title, Rich Text |
   | **Input** | Single Line, Long Text, Radio Buttons, Checkboxes, Dropdown, Slider, Boolean, Image Upload |
   | **Response** | AI Response, Response (static text), Scoring |
   | **Chat** | Chatbot |

The new component appears in the list and opens for editing.

### Configure a component

1. Click a component card on the canvas to expand it.
2. Edit labels, placeholders, choices, prompts, rubrics, or other settings shown in the card.
3. For **AI Response** components, edit the instruction blocks that define what the AI receives and returns.
4. For **Chatbot** components, set the initial message, instructions, and message limit.

Each component header also provides:

- **Required** toggle — whether the learner must complete the field before continuing.
- **Rename** (pencil) — change the internal field name used in prompts.
- **Conditional logic** (split icon) — show or hide the component based on another field’s value.
- **Delete** (trash) — remove the component from the app.
- **Type selector** — change the component type (where supported).

### Reorder components

Drag the **grip handle** (⋮⋮) on a component header up or down to change the order learners see fields and response steps.

### Update app details

Click the **App Details** card at the top of the canvas to edit the **title** and **description** shown to learners on the run screen.

## Adjust app-wide settings

Open **App settings** in the left panel (click the panel icon on the left if it is closed). For full details on every setting — collections, privacy, cloning, completion message, attached files, and AI configuration — see [Configure app settings](/guides/configure-app-settings).

Privacy and sharing links are also available on the **Share** tab.

## Preview your changes

1. Click **Preview** in the center navigation bar.
2. Walk through the app as a learner: fill in fields and click **Continue** (or **Evaluate** on scored steps).
3. If something is off, return to **Build** and adjust with App Builder or direct edits, then preview again.

## Troubleshooting

| Issue | What to try |
|-------|-------------|
| App Builder change was wrong | Click **Undo** in the App Builder header. |
| Cannot edit an app | Confirm you are the owner or an admin for that app. |
| AI output looks wrong | Edit the **AI Response** instructions directly, or ask App Builder to revise the prompt. Also check **AI Configuration** in **App settings**. |
| Component missing after edit | Check conditional logic — the field may be hidden until another answer is given. |

## Related

- [Build your first app](/tutorials/build-your-first-app) — create an app from scratch with App Builder.
- **Share** tab in the editor — copy links and manage who can access the app.
