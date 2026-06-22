---
title: Share your app
description: Share an OnMicro.AI app with external users — set privacy, copy a direct link, or embed the app on your website.
---

You will publish an app so people outside your OnMicro.AI account can use it. You choose who can access the app, then share a **direct link** or an **embed code** from the **Share** tab.

## Prerequisites

- An [OnMicro.AI](https://onmicro.ai) account with owner or admin access to the app.
- An app that is ready to share. Preview it on the **Preview** tab before publishing.

To give other OnMicro.AI users edit access instead (without publishing externally), see [Share with teammates](/tutorials/share-with-teammates).

## Step 1 — Open the Share tab

1. Open your app in the editor.
2. Click **Share** in the center navigation bar (**Build**, **Preview**, **Share**, **Statistics**).

You can also open sharing from your [dashboard](https://onmicro.ai/dashboard) by hovering an app and clicking **Share**.

The **Share** panel shows **Share Links** at the top and **Who can access** below.

## Step 2 — Choose who can access

Under **Who can access**, pick the privacy level that matches how you want to distribute the app:

| Option | Label in UI | Best for |
|--------|-------------|----------|
| **Private** | *You and admins only* | Drafts and internal testing — not for external users |
| **Public** | *Anyone with the link* | Email, chat, syllabus links, open sharing |
| **Restricted** | *Site-specific Embedding Only* | Embedding on your LMS or website, not open web links |

Click the option you want. The selection saves automatically — watch for **Saving…** then **Saved**.

### Share with a link → choose **Public**

External users need **Public** so they can open the app without logging in.

1. Click **Public** — *Anyone with the link*.
2. Wait for **Saved**.

**Private** apps are only available to you and admins you add under **People with access**. External learners cannot use a private app, even if they have the URL.

**Restricted** apps are meant for embedding on approved websites, not for sending a link to anyone on the open web. Direct links to restricted apps still require you to be logged in as owner or admin. Use restricted mode when you plan to embed — see [Embed on your website](#embed-on-your-website-restricted-or-public) below.

## Step 3 — Copy the direct link

Under **Share Links**:

1. Find **Direct link** — it shows your app's URL (`https://…/app/…`).
2. Click the row to **Copy direct link**.
3. When copied, the label changes to **Copied!**

Send the link by email, LMS announcement, QR code, or any channel your learners use.

**Checkpoint:** Open the link in a private or incognito browser window (where you are not logged in to OnMicro.AI). The app should load without asking you to sign in.

## Step 4 — Confirm it works for external users

As a learner would:

1. Open the copied link.
2. Complete at least one step in the app.
3. Confirm the title, description, and flow look correct.

If the app asks you to log in, return to **Share** and confirm **Public** is selected and **Saved**.

## Embed on your website (Restricted or Public)

Use an embed when the app should appear inside another page — a course site, faculty page, or portal — instead of sending learners to a standalone link.

### Public apps — embed anywhere

1. Set **Who can access** to **Public**.
2. Under **Share Links**, click **Embed**.
3. Click **Copy iframe code** when **Copied iframe code** appears.

Paste the snippet into your webpage's HTML. The default iframe is 600×400 pixels; adjust `width` and `height` in the code to fit your layout.

Public embeds work on any site without extra configuration.

### Restricted apps — embed on approved domains only

Use **Restricted** when the app should run only inside specific websites you control — for example, your institution's LMS or department site.

1. Under **Who can access**, click **Restricted** — *Site-specific Embedding Only*.
2. In **Permitted embed domains**, enter a hostname such as `courses.yourschool.edu` (no `https://`).
3. Click **Add**. Repeat for each site that may embed the app.
4. Copy the **Embed** iframe code as above.
5. Paste the iframe into a page on one of the approved domains.

Until at least one domain is added, embedded views show **Not authorized** everywhere.

Subdomains of an approved domain may also work (for example, `blog.example.com` when `example.com` is listed).

**Note:** Restricted mode is for embedding, not open link sharing. To give anyone a link with no login, use **Public** instead.

## What you have now

You chose a privacy level, copied a **direct link** or **embed code**, and verified external access. Your app is live for the audience you selected.

**Next steps:**

- [LTI Connection (Open edX®)](/guides/lti_connection) — launch from an LMS with grades (requires a **Public** app).
- [Configure app settings](/tutorials/configure-app-settings) — cloning, completion message, attached files, and AI defaults (also editable from **App settings** on the **Build** tab).
- [Remix an app](/tutorials/remix-an-app) — how others can copy a public app you published.

## Related

- [Build your first app](/tutorials/build-your-first-app)
- [Edit an app](/tutorials/edit-app)
