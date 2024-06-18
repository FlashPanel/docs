---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Server connection

## Server connection available

::: info

An available server is a server that is not automatically initialized via the API

:::

::: warning

-   Make sure you are using or creating a new Ubuntu server (20.04, 22.04 LTS 64bit)
-   {{ data.name }} may not work on pre-installed servers.

:::

::: tip

For existing servers that are not usually updated, running the update command below before making a connection will avoid crashes during installation.

```bash
apt update
apt upgrade -y

```

:::

1. Go to page <a :href="data.url + '/servers/create'" target="_blank">create server</a>
2. Click to select Custom Server
3. Enter Server Name: is the server name
4. Enter the server's v4 IP
5. Select the authentication type as Password or SSH Key
   ::: warning

    {{ data.name }} only uses this information during the first installation, does not store it anywhere!

    :::

    1. If Password: enter SSH Password of `root` account
    2. If SSH Key: Select private key file and fill in passphrase (if any)  
       If the OpenSSH type private key file has the passphrase {{ data.name }} and cannot be read, please remove the passphrase from the key with the command:
        ```bash
        ssh-keygen -p -f path_to_private_key
        ```

6. Select the applications to install initially
7. Click add server.

## Connect to server via API

::: warning
If the server provider's `API Key` has not been registered, the connection cannot be made. [Registration instructions here](./connect-server-provider.md)
:::

1. Go to page <a :href="data.url + '/servers/create'" target="_blank">create server</a>
2. Select the providers that `{{ data.name }} supports
3. Select login information
4. Select Region, select Package
5. Enter the server name
6. Select pre-installed applications
7. Click connect new server

## Common problems

### Root account login disabled (OVH)

Some server providers disable the root user by default (such as **OVH**), instead there is a user account such as `ubuntu` that can be promoted to root

To allow `root` login, do the following

1. SSH Login to the account your server provider created for you, for example `ubuntu`
2. Then copy the command below and paste it into the terminal

    ```bash
    if [ "$EUID" -ne 0 ]; then
        sudo su
    fi

    # Find the line in the file that contains "PermitRootLogin"
    line1=$(grep -n -m 1 "^#*\s*PermitRootLogin" /etc/ssh/sshd_config | cut -d: -f1)
    # Replace the line with "PermitRootLogin yes"
    sed -i "${line1}s/.*/PermitRootLogin yes/" /etc/ssh/sshd_config

    # Find the line in the file that contains "PasswordAuthentication"
    line2=$(grep -n -m 1 "^#*\s*PasswordAuthentication" /etc/ssh/sshd_config | cut -d: -f1)
    # Replace the line with "PasswordAuthentication yes"
    sed -i "${line2}s/.*/PasswordAuthentication yes/" /etc/ssh/sshd_config

    # Restart the ssh service to apply the changes
    systemctl restart ssh

    # Set the password for the root user
    sudo passwd root
    ```

Return to {{ data.name }} and proceed to connect as instructed above.

### Please login as the user "ubuntu" rather than the user "root" (AWS)

With **AWS** servers, logging in with the `root` account will result in a message like this and the connection will be lost. Please log in to your `ubuntu` account and execute the following command

```bash
sudo su
sed -i -e 's/.*exit 142" \(.*$\)/\1/' /root/.ssh/authorized_keys
```
