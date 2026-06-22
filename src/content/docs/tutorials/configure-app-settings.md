---
title: Configure app settings
description: Set collections, privacy, cloning, completion messages, attached files, and AI defaults from the App settings sidebar in the editor.
---

Configure who can access your app, how it is organized on your dashboard, what learners see when they finish, and how the AI behaves by default. These options live in the **App settings** panel on the left side of the **Build** tab.

## Prerequisites

- An [OnMicro.AI](https://onmicro.ai) account with owner or admin access to the app.
- The app open in the editor. See [Edit an app](/tutorials/edit-app) if you need to get there.

## Open App settings

1. Open an app and go to the **Build** tab.
2. The **App settings** panel appears on the left. If it is closed, click **App settings** on the left edge of the screen to reopen it.

Changes in this panel save automatically. You may see **Saving...** in the header while updates sync.

Some settings — especially sharing links and LTI — are also available on the **Share** tab. Privacy and clone settings in **App settings** and **Share** stay in sync.

---

## Collections

Use collections to group apps on your dashboard.

1. Under **Collections**, click the dropdown.
2. Check one or more collections to add the app to them. Uncheck to remove it.
3. The button label updates to show how many collections are selected (for example, **2 collections selected**).

Collections are for your own organization. They do not change who can run the app.

To create a collection, go to your [dashboard](https://onmicro.ai/dashboard) and use **Create new collection** in the sidebar.

---

## Privacy Settings

**Privacy Settings** controls who can open and run your app.

| Setting | Who can access | Typical use |
|---------|----------------|-------------|
| **Private** | Only you and app admins (logged in) | Drafts, internal tools, apps under development |
| **Public** | Anyone with the link — no login required | Sharing with students, colleagues, or the open web |
| **Restricted** | Embedded only on domains you approve | Apps embedded in your LMS, website, or portal |

1. Open **Privacy Settings** and choose **Private**, **Public**, or **Restricted**.

**Private** is the default for new apps. Only logged-in owners and admins can open the app.

**Public** allows anyone with the run link to use the app without signing in. Public apps can also be embedded on any website. You must set an app to **Public** before connecting it to an LMS via LTI — see [LTI Connection (Open edX®)](/guides/lti_connection).

**Restricted** limits the app to embedded views on approved hostnames. Direct links still require owner or admin login. Use this when the app should only appear inside specific sites you control.

### Permitted embed domains (Restricted only)

When **Privacy Settings** is **Restricted**, an additional section appears: **Permitted embed domains**.

1. Enter a hostname (for example, `example.com` or `blog.mysite.com`) — do not include `https://`.
2. Click **Add**.
3. Repeat for each site that may embed the app.

Until you add at least one domain, embedded views show **Not authorized** everywhere.

To remove a domain, click the trash icon next to it in the list.

Subdomains of an approved domain may also be allowed (for example, `blog.example.com` when `example.com` is listed).

---

## Allow others to clone this app

The **Allow others to clone this app** checkbox controls whether other OnMicro.AI users can duplicate your app into their own account.

- **Checked** — users who can see your app may clone it as a starting point for their own version.
- **Unchecked** — cloning is disabled.

New apps have this option enabled by default. Turn it off if you do not want others copying your design.

---

## Completion Message

The **Completion Message** is shown when a learner reaches the end of the app.

1. Enter your message in the **Completion Message** text box.
2. The message appears on the final screen after the learner completes all steps.

If you leave it blank, the app uses a default message. You can include plain text; the editor stores it as HTML-capable content.

---

## Attached Files

Upload reference documents that the app's AI can draw from during runs — for example, a syllabus, reading packet, or rubric.

### Upload a file

1. In **Attached Files**, drag files onto the upload area or click to browse.
2. Supported types shown in the editor: **PDF, PPT, DOC, TXT, CSV, JSON, MD**.
3. Maximum file size: **20 MB** per file.

After upload, each file shows a progress bar:

| Status | Meaning |
|--------|---------|
| **Queued…** | Waiting to process |
| **Processing…** | Being indexed for AI retrieval |
| **✓ Ready** | Available to the AI during runs |
| **✕ Failed** | Upload or processing failed — remove and try again |

If you upload a file with the same name as one already attached, the editor marks it **Duplicate** and offers **Replace** to swap the old file for the new one.

### Describe attached files

For each file, optionally add a short description (up to **200 characters**). Descriptions help the AI understand what each document contains when retrieving relevant passages.

To remove a file, click **X** on the file row.

Attached files apply app-wide. Relevant sections are injected into AI calls automatically when learners run **AI Response** steps.

---

## AI Configuration

**AI Configuration** sets defaults for every AI step in the app unless a specific **AI Response** or **Chatbot** component overrides them.

### System Prompt

A **System Prompt** is sent before AI calls across the app. Use it for standing instructions that should apply to every AI interaction — for example, tone, role, or policies the model should always follow.

Leave empty if you prefer to control behavior only through individual component prompts.

### AI Model

Choose the default **AI Model** from the dropdown. Available models depend on your OnMicro.AI environment.

Individual **AI Response** components can specify their own model; this setting is the app-wide fallback.

### Temperature

**Temperature** controls randomness in AI output. Lower values produce more consistent, focused responses; higher values produce more varied output.

The allowed range depends on the selected model. The editor enforces each model's minimum and maximum.

### Max Response Tokens

**Max Response Tokens** limits how long each AI reply can be. Leave empty for no limit.

Set a value if you want to cap response length and control usage costs.

---

## Quick reference

| Setting | What it controls |
|---------|------------------|
| **Collections** | Dashboard grouping |
| **Privacy Settings** | Who can run or embed the app |
| **Permitted embed domains** | Allowed hostnames (Restricted only) |
| **Allow others to clone this app** | Whether others can duplicate the app |
| **Completion Message** | Text at the end of the learner flow |
| **Attached Files** | Reference documents for AI retrieval |
| **System Prompt** | App-wide AI instructions |
| **AI Model** | Default model for AI steps |
| **Temperature** | Default randomness |
| **Max Response Tokens** | Default response length cap |

## Related

- [Edit an app](/tutorials/edit-app) — change components and use App Builder.
- [Build your first app](/tutorials/build-your-first-app) — create an app from scratch.
- [LTI Connection (Open edX®)](/guides/lti_connection) — requires a **Public** app.
