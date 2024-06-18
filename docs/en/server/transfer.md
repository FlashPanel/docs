---
position: 999
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Server transfer

::: info
The server transfer feature allows you to transfer server ownership from the current owner to someone else. Once you transfer your server, the new owner will be able to access and manage your server.
:::

## Switch server

To switch servers in {{ data.name }}, you need to do the following:

1. Go to page <a :href="data.url + '/user/server-transfer'" target="_blank">Server Transfer</a>
2. Select the server to which you want to transfer.
3. Enter the email of the person you want to transfer ownership of that server to.
4. Confirm the information and press the `Transfer` button.
5. An email with instructions will be sent to the recipient.

::: warning
The shared server will be active for approximately 15 minutes.
:::

## Get server

1. Go to page <a :href="data.url + '/user/server-transfer'" target="_blank">Server Transfer</a>
2. Select the `Server receiving history` tab
3. The list of servers being transferred will appear here, click on the `Receive` icon and perform the consent action
