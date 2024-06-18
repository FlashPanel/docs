<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# OpenLiteSpeed

::: info
OpenLiteSpeed ​​is an open source web server developed and maintained by LiteSpeed ​​Technologies. It is a "lightweight" version of LiteSpeed ​​Web Server, a web server that offers high performance and powerful features.

OpenLiteSpeed ​​is designed to provide a fast, lightweight and efficient web server solution for projects and development environments. It supports many features such as multithreading, caching, HTTP/2, SSL/TLS, rewrite rules, and many more that help optimize the performance and security of websites and web applications.

One of the strengths of OpenLiteSpeed ​​is its high performance and good scalability, which helps it handle a large number of web requests efficiently, especially in high-load environments. In addition, with its open source version, OpenLiteSpeed ​​is also suitable for projects and environments with limited budgets.

OpenLiteSpeed ​​is an attractive web server choice for projects and development environments that want an open source, efficient, and easily configurable solution.
:::

## Install OpenLiteSpeed

![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 12.06.20.png>)

## Access OpenLiteSpeed ​​Web Admin

After installing OpenLiteSpeed, you can access OpenLiteSpeed ​​Web Admin: `https://ip:port`.
When accessing the admin website for the first time you will encounter the security warning `Your connection is not private` `NET::ERR_CERT_AUTHORITY_INVALID`.
This warning is not serious, because by default the OpenLiteSpeed ​​web admin uses a self-signed certificate on the server.

You can choose one of two ways: continue accessing or install an SSL certificate for the web admin

## Method 1: Continue accessing on Chrome

![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.47.08.png>)
![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.47.17.png>)

## Method 1: Continue accessing on Safari

![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.55.29.png>)
![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.42.38.png>)

Click `Visit Website`
![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.42.55.png>)

## Method 2: Install SSL certificate for web admin

1. Create a website in `{{ data.name }}`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.06.35.png>)

    ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.07.26.png>)

2. Install [SSL](../site/ssl.md) for the website you just created, and get the certificate ID in this demo which is `101082`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.37.15.png>)

3. Open terminal and run the command below

    ```bash
    # change 101082 to the id corresponding to the website's SSL ID # [!code warning]
    sed -i 's/admin\/conf\/webadmin/conf\/cert\/101082\/server/' /usr/local/lsws/admin/conf/admin_config.conf
    sudo /usr/local/lsws/bin/lshttpd -t
    sudo systemctl restart lsws
    ```

4. Access web admin using domain:port (default 7080)
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.48.48.png>)

## LiteSpeed ​​Cache

::: info
LiteSpeed ​​Cache (also known as LSCache) is built from the ground up and integrated into all LiteSpeed ​​server products. It can:

-   significantly speeds up dynamic website content (like PHP pages)
-   provides more efficient handling of static content (like images)
-   reduce server load

:::

### LiteSpeed ​​Cache for WordPress

1. Install the plugin directly from the **Plugin** > **Add New** screen
2. Search for `LiteSpeed ​​​​Cache` in the search box. Click Install Now and Activate the plugin.
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-14 at 13.54.18.png>)
3. Check by visiting the page: [Check LSCache](https://check.lscache.io/)

## 413 Request Entity Too Large

1. Check the php version your website is using, in this example it is `7.4`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-17 at 18.22.19.png>)
2. Go to `OpenLiteSpeed` settings
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.50.11.png>)
3. Navigate to the path `lsphp74/etc/php/7.4` and open the file `php.ini`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.51.14.png>)
4. Search for the `upload_max_filesize` setting value in the `php.ini` file. The default is `2M`, which is 2 megabytes, and change it to the value you desire
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.52.16.png>)
5. Click the OpenLiteSpeed ​​`restart` button
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.58.29.png>)

## Configure redirects in OpenLiteSpeed

1. Access [web admin](#access-cap-openlitespeed-web-admin) and Select Virtual Host to redirect
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.38.23.png>)

2. Select the `Context` tab and click `Add New`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.39.17.png>)

3. Select type `Redirect` and click `Next`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.40.14.png>)

4. Here you can start configuration.

    ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.52.20.png>)

    - URL: path to redirect. Here you only enter the URL. No domain name included (For example, here I put it /index.html)
    - External Redirect: Choose Yes
    - Status Code: There are many types of HTTP codes. Because I redirected, I chose 301 (permanent redirect).
    - Destination URI: Destination URL to transfer.
    - Save configuration

    With the above configuration, when users access https:/domain.com/index.html, the system will automatically switch to https:/domain.com/admin.html

5. Finally, you restart the service to apply the changes.
