---
position: 3
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# DNS connection

DNS connection allows you to `{{ data.name }}` manage DNS, and automatically create records in some [cases](#co-the-ban-chua-biet)

## Cloudflare

Below is a user guide to create a Cloudflare API Token with specific permissions for **Zone (Read)**, **DNS (Edit)**, and **SSL and Certificate (Edit)**.

This guide will walk you through creating an API Token in Cloudflare with the following permissions:

-   **Zone**: Read
-   **DNS**: Edit
-   **SSL and Certificate**: Edit

API Tokens are a secure way to grant limited access to specific parts of your Cloudflare account. Follow the steps below to create and configure your API token.

### **Step 1: Log in to Cloudflare**

1. Open your web browser and go to [https://dash.cloudflare.com/](https://dash.cloudflare.com/).
2. Enter your Cloudflare account credentials and log in.

### **Step 2: Navigate to API Token Settings**

1. In the Cloudflare dashboard, click on your **profile icon** in the top-right corner.
2. Select **My Profile** from the dropdown menu.
3. In the left-hand menu, click on **[API Tokens](https://dash.cloudflare.com/profile/api-tokens)**.

### **Step 3: Create a New API Token**

1. On the API Tokens page, click the **Create Token** button.
2. Under **Custom Token**, click **Get Started**.

### **Step 4: Configure API Token Permissions**

1. **Name the Token**

    - Enter a meaningful name for the token, such as:  
      **"API Token for {{ data.name }}"**.

2. **Add Permissions**

    - Click **+ Add more** to configure permissions.
    - **Zone:**
        - Type: **Zone**
        - Service: **Zone**
        - Permission: **Read**
    - **DNS:**
        - Type: **Zone**
        - Service: **DNS**
        - Permission: **Edit**
    - **`SSL and Certificate`:**
        - Type: **Zone**
        - Service: **`SSL and Certificate`**
        - Permission: **Edit**

3. **Adjust Resource Scope (Optional)**
    - If you want the token to apply to only specific domains or zones, select **Specify zones** and add the zones manually. Otherwise, leave it as **All zones**.

### **Step 5: Review and Create the API Token**

1. Click **Continue to summary**.
2. Review the permissions and resources to ensure everything is correct.
3. Click **Create Token**.

### **Step 6: Save the API Token**

1. Once the token is created, Cloudflare will display your **API Token**.
2. Copy the token and store it securely.

    > **Important:** This is the only time you will be able to view the token. If you lose it, you will need to create a new one.

### **Step 7: Import the API Token into {{ data.name }}**

Once you have created the API Token, follow these steps to add it to {{ data.name }}:

1. Go to the <a :href="data.url + '/user/dns'" target="_blank">DNS management</a> page in `{{ data.name }}`.
2. Press the **`Add Key`** button.
3. Enter a **description** for the API Token (e.g., "Cloudflare API Token for DNS Management").
4. Paste the **API Token** you received in the previous step into the designated field.
5. Click the **`Add API Token`** button to save it.

Your API Token is now successfully imported into {{ data.name }}, enabling you to manage DNS, SSL certificates, and related settings directly from the platform.

## Name.com

1. Log in to your `Name.com` account.
2. Access the Token API page at: https://www.name.com/account/settings/api
3. Enter `Token name` and Click `Generate new token` button
4. Go to <a :href="data.url + '/user/dns'" target="_blank">DNS management</a> page `{{ data.name }}`
5. Press the `Add Key` button
6. Enter a description of this API Token
7. Enter the API Token received above
8. Click the `Add API Token` button

## Manage DNS

After successfully adding the API key, the system will automatically retrieve all the domains you allow to manage.
You just need to choose which domain to manage.

![](../../images/connect/cloudflare06.png)

## Maybe you don't know?

When you create a new website, the domain name is in the list of managed domains at `{{ data.name }}`.
The system will automatically create a type A DNS record pointing to the server being used to create the domain name.
