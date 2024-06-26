---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Cookbook

## Restart PHP-FPM

When configuring your server, {{ data.name }} configures FPM so that it can be restarted without using the server's `sudo` password. To do so, you should use the following command. Of course, you should adjust the PHP version to match the version of PHP installed on your machine:

```bash
echo "" | sudo -S service php8.1-fpm reload
```

## Reset sudo password

{{ data.name }} does not store your server's sudo password and therefore cannot reset it for you. To reset your password, you need to contact your server provider or use the sudo password reset facilities on your server provider's dashboard.

Once the password has been reset, {{ data.name }} will no longer be able to SSH into your machine as `root`. This prevents you from editing PHP/Nginx configuration files from the {{ data.name }} frontend and will also prevent various {{ data.name }} functions from working properly. Before {{ data.name }} can access your server, you will need to SSH into your {{ data.name }} server as `flashvps` and reset the user `root' password `:

## Upgrade Node.js

{{ data.name }} allows you to choose the NodeJS installation session when installing a new server. However, as your server ages, you may want to upgrade your Node.js version:

```bash
sudo apt-get install --only-upgrade nodejs
```

## DigitalOcean Droplet limit exceeded

This error is returned by [DigitalOcean](https://digitalocean.com/) when you have reached the limit on the number of droplets you can create. You can ask DigitalOcean to increase your droplet limit by contacting their support. Once they have increased your limit, you can [create server](../connect/connect-server.md) in {{ data.name }}

## Server disconnected

There are a number of reasons why your server may have a 'disconnected' status. We encourage you to check these common solutions before contacting support:

-   Verify that the server is enabled through your server provider's control panel. If the server is powered down, you should restart it using your provider's control panel.
-   Verify that the public key generated by {{ data.name }} for the server is included in the `/root/.ssh/authorized_keys` and `/home/flashvps/.ssh/authorized_keys` files. This key is available through the 'Meta' tab of the {{ data.name }} management panel on your server.
-   If your server is behind a firewall, make sure you have allowed [IP addresses of {{ data.name }}](../what-is-flash-panel. md#dia-chi-ip-data-name) access the server.
-   If you have removed Port 22 from your server's firewall rules, you will need to contact your server provider and ask them to reinstate the rule. Removing this rule prevents {{ data.name }} from accessing your server over SSH.
-   Remove any private keys or other lines that do not contain a valid public key from the `/root/.ssh/authorized_keys` and `/home/flashvps/.ssh/authorized_keys` files.

If you are still having connection problems, you should also verify that the permissions and ownership of the following folders and files are correct:

```bash
# Fixes the "root" user (run as root)

chown root:root /root
chown -R root:root /root/.ssh
chmod 700 /root/.ssh
chmod 600 /root/.ssh/authorized_keys

# Fixes the "flashvps" user

chown flashvps:flashvps /home/flashvps
chown -R flashvps:flashvps /home/flashvps/.ssh
chmod 700 /home/flashvps/.ssh
chmod 600 /home/flashvps/.ssh/authorized_keys
```

If after trying all the above solutions, {{ data.name }} still cannot connect to your server but you can still SSH into the server, please run the following command as root user and share the results with {{ data.name }} support:

`grep 'sshd' /var/log/auth.log | tail -n 10`

::: warning

If {{ data.name }} cannot connect to your server, you will not be able to manage it through the {{ data.name }} control panel until the connection is restored.

:::
