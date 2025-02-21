---
head:
    - - meta
      - name: description
        content: Instructions for setting up email
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Mail

## Setup

1. **Access the Mail Tab**

    - Navigate to your server management page and select the **Mail** tab.
    - If you haven’t set up a mail server yet, you’ll be guided through a **six-step** setup process.

2. **Step 1: Basic Information**

    - Enter your **Email Domain** (e.g., `example.com`).
    - Specify a **Mail Subdomain** (e.g., `mail.example.com` or `smtp.example.com`).

3. **Step 2: SSL Configuration**

    - Configure **SSL for your mail subdomain** (`mail.example.com`) similar to how you configure SSL for a website.

4. **Step 3: DNS Configuration**

    - Set an **MX record** for your domain (`example.com`), pointing to `mail.example.com`.
    - Set an **A record** for your mail server (`mail.example.com`), pointing to your server’s IP (e.g., `11.22.33.44`).
    - If **DNS management** is enabled for `example.com`, FlashPanel will automatically configure these records.

5. **Step 4: Mail Server Installation**

    - Click **Continue** to install the mail server automatically.

6. **Step 5: DKIM, DMARC & SPF Configuration**

    - These records help improve email deliverability and prevent spam classification.
    - Configuration is similar to **Step 3**, and if DNS management is enabled, FlashPanel will set them up automatically.

7. **Step 6: Mail Server SSL Configuration**
    - Click **Submit** to enable SSL for your mail server.

## Account Manager

-   Once setup is complete, the **Account Management Dashboard** will appear.
-   You can **add, remove, and edit** email accounts easily from this interface.

## Connecting an Email Client

Once the setup is complete, use an **email client** (e.g., MacOS Mail, Mozilla Thunderbird, Microsoft Outlook) to manage emails.

### General Settings:

-   **Incoming Mail Server:** Use **IMAP** (recommended).
-   **IMAP Server:** `mail.example.com`
-   **IMAP Port:** `993` (SSL/TLS enabled)
-   **Outgoing SMTP Server:** `mail.example.com`
-   **SMTP Port:** `465` (SSL/TLS enabled) or `587` (STARTTLS enabled)
-   **Authentication:** Use your email account credentials.

---

### MacOS Mail

1. Open **Mail** and go to **Mail > Add Account**.
2. Select **Other Mail Account** and click **Continue**.
3. Enter your **email address** and **password**, then click **Sign In**.
4. Set up the **Incoming Mail Server**:
    - IMAP Server: `mail.example.com`
    - Username: Your full email address
    - Password: Your email password
5. Set up the **Outgoing Mail Server**:
    - SMTP Server: `mail.example.com`
    - Username: Your full email address
    - Password: Your email password
6. Click **Sign In**, then save the settings.

---

### Mozilla Thunderbird

1. Open **Thunderbird** and go to **Account Settings**.
2. Click **Add Mail Account**.
3. Enter your **name, email address, and password**, then click **Continue**.
4. Thunderbird will try to auto-detect settings; if not:
    - **Incoming Server (IMAP):** `mail.example.com`, Port `993`, SSL/TLS
    - **Outgoing Server (SMTP):** `mail.example.com`, Port `465` or `587`, SSL/TLS or STARTTLS
    - **Authentication:** Normal password
5. Click **Done** to complete setup.

---

### Microsoft Outlook

1. Open **Outlook** and go to **File > Add Account**.
2. Select **Manual setup or additional server types**, then click **Next**.
3. Choose **IMAP** and enter:
    - **Incoming Mail Server:** `mail.example.com`
    - **Outgoing Mail Server:** `mail.example.com`
4. Click **More Settings** > **Outgoing Server** tab:
    - Check **My outgoing server (SMTP) requires authentication**.
5. Go to **Advanced** tab:
    - **IMAP Port:** `993`, Use SSL
    - **SMTP Port:** `465` (SSL) or `587` (STARTTLS)
6. Click **OK**, then **Next**, and **Finish**.

---

Your mail server is now fully configured and ready to use!
