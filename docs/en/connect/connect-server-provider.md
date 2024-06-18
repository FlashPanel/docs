---
position: 2
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Connect server provider

## Vultr

1. Visit the [Vultr API] page(https://my.vultr.com/settings/#settingsapi)
2. In the `Personal Access Token` section, press `enable` if this is your first use. Copy `API Key`
3. Return to <a :href="data.url + '/user/vps'" target="_blank">{{ data.name }}</a>
4. Click the `Add Credentials` button
5. Select the server provider `Vultr`
6. Enter a note about this `API Key`
7. Enter the `API Key` obtained in step 2

## Digital Ocean

1. Visit the [Digital Ocean API] page(https://cloud.digitalocean.com/account/api/tokens)
2. In the `Personal Access Token` section, press `Generate New Token`
3. Copy API Token
4. Return to <a :href="data.url + '/user/vps'" target="_blank">{{ data.name }}</a>
5. Click the `Add Credentials` button
6. Select `Digital Ocean` server provider
7. Enter a note about this API Token
8. Enter the API Token obtained in step 3

## Linode

1. Visit the [Linode API] page(https://cloud.linode.com/profile/tokens)
2. In the `Personal Access Token` section, press `Create A Personal Access Token`
3. Enter `label` for API Token, select `Read/Write` under `Linodes`
   ![](<../../images/connect-server-provider/Screenshot 2024-03-25 at 8.34.43.png>)
   Click the `Create Token` button
4. Copy API Token
5. Return to <a :href="data.url + '/user/vps'" target="_blank">{{ data.name }}</a>
6. Click the `Add Credentials` button
7. Select server provider `Linode`
8. Enter a note about this API Token
9. Enter the API Token obtained in step 4

## UpCloud

1. Visit the [UpCloud API] page(https://hub.upcloud.com/people/accounts)
2. In the `Account` section, press `Create subaccount`
3. Enter `subaccount` information and press `Create subaccount`
4. After creating the `subaccount`, press the `subaccount` edit button to go to the edit page, scroll down to the `Permissions` section and press the `Go to permissions` button.
   Select as shown below, all remaining items are disabled
   ![](<../../images/connect-server-provider/Screenshot 2024-03-25 at 8.44.25.png>)
5. Return to <a :href="data.url + '/user/vps'" target="_blank">{{ data.name }}</a>
6. Click the `Add Credentials` button
7. Select `UpCloud` server provider
8. Enter a note about this API Token
9. Enter `username` and `password` in step 4

## Hetzner

1. Go to [Hetzner](https://console.hetzner.cloud/projects) page > Select a `project` > In the left sidebar select `Security` > In the tab above select `API Tokens`
2. Click `Generate API Token` in the upper right corner
3. Enter a note and check `Read & Write` in the Permissions section
4. After creating, press Copy to get `Token`
5. Return to <a :href="data.url + '/user/vps'" target="_blank">{{ data.name }}</a>
6. Click the `Add Credentials` button
7. Select server provider `Hetzner`
8. Enter a note about this API Token
9. Enter the API Token obtained in step 4
