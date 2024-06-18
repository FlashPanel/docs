<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Firewall Rule

## Generality

{{ data.name }} allows you to manage your server's firewall as well as configure which servers can connect to other servers through the Network Management Panel in the **Network** tab on your server. Friend.

:::warning **! Manually Add Rules.**

If you manually create a `ufw` rule on your server, {{ data.name }} will allow you to easily [Sync from server](#dong-bo-tu-may-chu) rules added.

:::

## Firewalls

You can configure and manage your firewall from within the {{ data.name }} console via the **Network** tab on the server's management console. Firewalls are used to open ports on your server to the Internet. For example, when using FTP, you may need to open port `21`.
For added security, you can restrict opened ports to specific IP addresses. Steps to configure a firewall:

1. At the `Network` tab > click the `Add Firewall Rule` button:
   ![](<../../images/docs/vi/server/firewall-rule/Screenshot 2024-04-23 at 12.48.24.png>)

2. Fill out according to instructions

    - **Port**: You can specify a port such as `3306`, `5432` or you can also open a range of ports: for example, if you want to open a range of ports from `8000` to `8010`, enter: `(8000:8010)`
    - **Allow/Deny rule type**: You can choose to allow or deny traffic for a certain rule. By creating a `deny` rule, you will prevent traffic from accessing the service.
      ::: warning **! Deny Rule Run First.**
      To make `deny` rules work correctly, they are added at a higher priority than `allow` rules. Each new `deny` rule will be added on top of any existing `deny` rules.
      :::

3. Select `Add new`

## Default firewall rules

When installing the server. {{ data.name }} will automatically configure 3 rules:

-   **SSH**: Allows access to port `22` from any IP address
-   **HTTP**: Allow access to port `80` from any IP address
-   **HTTPS**: Allow access to port `443` from any IP address

You should note that although incoming access is allowed on port `22` for SSH connections, SSH connections that do not use [SSH Keys](../knowledge/ssh-keys.md) will not be allowed. accept. Therefore, an SSH connection to your server cannot be forced. **You should never remove a rule that allows SSH access to your server; otherwise, {{ data.name }} will not be able to connect to or manage your server**.

## Delete SSH Firewall Rule

If you have removed a firewall rule (usually port 22) from the {{ data.name }} user interface or directly on the server, {{ data.name }} will not be able to connect to the server and will This rule cannot be recreated for you.

To fix this, you will need to access the server directly through your provider and manually re-add the SSH port. DigitalOcean allows you to connect remotely through their control panel.

{{ data.name }} uses `ufw` for the firewall, so once you're connected to the server, you need to run the following as root:
`ufw allow 22`

## Synchronize from server

{{ data.name }} allows you to synchronize rules added manually on the server with the system.
At the `Network` tab > Select `Sync from server`
![](../../images/firewall-sync.png)
