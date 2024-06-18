---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Profile

## Update

You can update your name and password from the <a :href="data.url + '/user/profile'" target="_blank">Profile</a> page of {{ data.name }} in your user profile

## Secure your account with two-factor authentication (2FA)

You can add Two-Factor Authentication (2FA) to your account from <a :href="data.url + '/user/profile'" target="_blank">Profile</a>. Once you enable 2FA, remember to scan the 2FA barcode into your phone's authenticator app.

After enabling 2FA, {{ data.name }} will display:

-   QR code (you should scan)
-   Some recovery codes

Recovery codes should be stored securely and can be used if you no longer have access to your 2FA device. Recovery codes can only be used once. You can regenerate your recovery code at any time from your <a :href="data.url + '/user/profile'" target="_blank">Profile</a>.

::: warning **! Use 2FA**  
We recommend using a Two-Factor (2FA) app like [Google Authenticator](https://support.google.com/accounts/answer/1066447), `Authy`,... on your smartphone to manage your {{ data.name }} 2FA configuration.
:::
