---
position: 40
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# WordPress WP Rocket

::: info
WP Rocket is a performance optimization plugin for websites built on the WordPress platform. This plugin helps increase website loading speed by optimizing elements like cache, CSS and JavaScript files, images, and others. WP Rocket provides a simple user interface for configuring and managing optimization settings, making it possible for users to improve site performance without needing to be an expert in programming or administration. system.
:::

## Enable Nginx configuration for `WP Rocket`

1. Make sure the `WP Rocket` plugin is installed in WordPress Admin
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 3.32.13.png>)
2. Return to the `{{ data.name }}` site dashboard, click the `Nginx WordPress Rocket` tile
   ![](<../../images/docs/en/site/wp-rocket/Screenshot 2024-04-05 at 3.45.05.png>)
3. Press the `Enabe` button
   ![](<../../images/docs/en/site/wp-rocket/Screenshot 2024-04-05 at 3.45.38.png>)
4. Confirm results

    1. Open the browser, press `F12` to open the Development Tools panel, select the `Network` tab
    2. Enter your website address
    3. If you see `X-Rocket-Nginx-Serving-Static: HIT` is OK

    ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 3.46.37.png>)

## Configure WP-Cron

::: warning
Once WP Rocket is configured, when the user accesses, the files the user receives are cached files without having to execute any PHP from WordPress, which can cause failed jobs. Your scheduler is not called. As you may already know, WP-Cron jobs are not true cron jobs and are only executed when you have visits to your site.

To ensure your scheduled tasks run when needed, we recommend that you disable WordPress cron jobs and create a true cron job.
:::

1. Open the `wp-config.php` file further

    ```php
    define( 'DISABLE_WP_CRON', true );
    ```

    ![](<../../images/docs/en/site/wp-rocket/Screenshot 2024-04-05 at 15.57.24.png>)

2. Open CronJobs tab and add
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 16.02.27.png>)

3. You add the following:
   ![](<../../images/docs/en/site/wp-rocket/Screenshot 2024-04-05 at 16.03.55.png>)
    - Command: `cd /home/flashvps/main3.chungnguyen.xyz; php8.2 wp-cron.php` in which `/home/flashvps/main3.chungnguyen.xyz` you change to the corresponding path
      ![](<../../images/docs/en/site/wp-rocket/Screenshot 2024-04-05 at 15.57.24-1.png>)
      `php8.2` is the current php version being used for this website.
    - User: corresponds to the user of the current website
    - Cron Expression: in minute, change to `*/15`
4. Press the `Create CronJob` button
