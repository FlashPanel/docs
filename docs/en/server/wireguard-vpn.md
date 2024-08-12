---
head:
    - - meta
      - name: description
        content: "WireGuard: fast, modern, secure VPN tunnel"
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# WireGuard VPN

<OgImage name="WireGuard VPN" />

## What is a VPN?

VPN or Virtual Private Network creates a private network connection between devices over the Internet. VPNs are used to transmit data securely and anonymously over public networks. VPNs work by hiding the user's IP address and encrypting data so that only the person authorized to receive the data can read it.

-   **Benefits of VPN**:
    -   Data security when accessing public networks.
    -   Protect your privacy online.
    -   Access geo-blocked content.
-   **Popular VPN types**: L2TP, OpenVPN, PPTP, IPsec.

## What is WireGuard VPN?

WireGuard is a free, open source software and communications protocol that implements encrypted virtual private networks. It aims to be lighter and perform better than IPsec and OpenVPN, two popular tunneling protocols. The WireGuard protocol passes traffic over UDP.

-   **Advantages of WireGuard**:
    -   High performance: Uses modern, lightweight and fast encryption algorithms.
    -   Simplicity in configuration: Configuration is easy to understand and deploy.
    -   Strong security: Uses strong encryption and modern authentication mechanisms.

## Install WireGuard

-   Select the server that needs to install WireGuard, then go to the [Application] page(./application.md)
-   Select the application that is not installed, find the application named `WireGuard` and click install

![WireGuard installation page](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.08.48.png>)

## WireGuard VPN connection

![access WireGuard management page](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.25.16.png>)

After installing `WireGuard`, you can go to the `WireGuard` management page to create a client

### Create WireGuard client

![Create WireGuard client](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.28.54.png>)

Click the `Create Client` button to create, enter a name and send

After successful creation, you can download the WireGuard Client configuration

![Download WireGuard Client configuration](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.30.21.png>)

### Install the WireGuard application

Visit [WireGuard installation page](https://www.wireguard.com/install/) to download the WireGuard application

![WireGuard Client](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.33.52.png>)

### Import the WireGuard Client configuration file

Click the + `Import Tunnel from File` button to import the configuration file downloaded in the step above, click confirm if available.

![Import Tunnel](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.35.03.png>)

Finally, click the `Active` button

![](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 22.23.29.png>)
