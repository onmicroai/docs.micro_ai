---
title: LTI Connection (Canvas)
description: Add OnMicro.AI to Canvas via LTI 1.3 deep linking
---

# **LTI Connection (Canvas)**

This guide connects OnMicro.AI to Canvas as an LTI 1.3 tool. Once a Canvas administrator approves OnMicro.AI for an account, instructors can insert any of their OnMicro apps directly from within Canvas (the Rich Content Editor, an assignment, or a module link). When a student finishes the app, a score is passed back to the Canvas gradebook.

Note: The grade is pass/fail based on whether or not the student successfully reached the end of the exercise.

## How it works

1. A Canvas admin registers OnMicro.AI once as a Developer Key (LTI tool) for the account.
2. An instructor inserts an OnMicro app using Canvas deep linking and picks the app from a list of their OnMicro apps.
3. A student opens the app, completes it, and a score is sent back to Canvas via LTI Advantage (AGS).

**Instructor requirement:** the picker matches you by email. You must have an OnMicro.AI account using the **same email address** as your Canvas account, and the app you want to insert must belong to that account.

**\# IN CANVAS (administrator)**

1. **Go to your Canvas account admin → Developer Keys.**

2. **Create a new key → LTI Key.**

3. **Set the configuration method to "Enter URL" and paste the OnMicro.AI configuration URL:**

   ```
   https://onmicro.ai/lti/canvas-config/
   ```

   This URL returns the tool configuration (launch, login, and JWKS endpoints, the grade-passback scopes, and the deep-linking placements). Canvas will fill in the rest of the form for you.

4. **Save the key, then toggle its state to "ON".**

5. **Note the generated values.** From the key's settings (the "•••" menu → and the key details) record:

   | Field | Where to find it |
   | :---- | :---- |
   | Client ID | The number shown in the "Details" column of the Developer Key |
   | Deployment ID | Generated after the tool is added to the account/course (see step 7) |

6. **Add the tool to the account (or a course):** go to **Settings → Apps → View App Configurations → + App**, choose **By Client ID**, and enter the Client ID from step 5.

7. **Find the Deployment ID:** after adding the app, open its settings (the gear/"•••" icon next to it) and copy the **Deployment ID**.

**\# IN [ONMICRO.AI](http://ONMICRO.AI) (administrator, via Django admin)**

Tool consumers are configured from the Django admin panel.

1. **Go to the Django admin → LTI → LTI configs → Add LTI config.**

2. **Leave "Microapp" blank.** This makes the registration account-level, so instructors choose an app via deep linking.

3. **Fill in the platform credentials from Canvas:**

   | Field | Value |
   | :---- | :---- |
   | Issuer | `https://canvas.instructure.com` (use `https://sso.canvaslms.com` for hosted Canvas, or your self-hosted issuer) |
   | Client ID | The Developer Key Client ID from Canvas |
   | Auth Login URL | `https://sso.canvaslms.com/api/lti/authorize_redirect` (or your instance's value) |
   | Auth Token URL | `https://sso.canvaslms.com/login/oauth2/token` (or your instance's value) |
   | Keyset URL | `https://sso.canvaslms.com/api/lti/security/jwks` (or your instance's value) |
   | Deployment ID | The Deployment ID from Canvas |

   Tip: the exact Issuer / Auth / Keyset URLs depend on your Canvas environment. They are shown in Canvas's LTI documentation for your region and match the values your Canvas instance uses.

4. **Save the configuration.**

**\# IN CANVAS (instructor)**

1. **Open a course where the OnMicro.AI app is available.**

2. **Insert the app using deep linking.** For example, in the Rich Content Editor open the apps/plugins menu and choose OnMicro.AI, or add an assignment with **Submission Type → External Tool → Find** and select OnMicro.AI.

3. **Pick your app** from the list shown by OnMicro.AI and confirm. Canvas inserts a link to the app (and creates a gradebook column when added as an assignment).

4. **Publish** the content as usual.

**\# AS A STUDENT**

1. **Open the OnMicro.AI app** from the course.

2. **Complete the exercise** and reach the end.

3. **Check the gradebook.** A score is passed back to Canvas automatically when the app is completed.
