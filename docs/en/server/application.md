---
position: 2
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Application

The application is the place to store and manage server applications, where you can install, remove, or pause any application for the server.
Currently {{ data.name }} is supporting the installation of many applications, including:

-   PHP
-   Nginx
-   MySQL
-   MariaDB
-   MongoDB
-   Redis
-   Memcached
-   NodeJS
-   PM2
-   Melisearch
-   Typesense
-   Rclone
-   Go
-   MinIO
-   ...

## Install apps

1. Select the server to manage
2. Click on the `Applications` icon to go to the application management page
   ![](<../../images/application/Screenshot 2024-03-23 at 17.28.37.png>)
3. Select the uninstalled application
   ![](<../../images/application/Screenshot 2024-03-23 at 17.37.46.png>)
4. Click the install button
   ![](<../../images/application/Screenshot 2024-03-23 at 17.41.15.png>)

## Uninstall the application

1. Select the server to manage
2. Click on the `Applications` icon to go to the application management page
   ![](<../../images/application/Screenshot 2024-03-23 at 17.28.37.png>)
3. Click the uninstall button
   ![](<../../images/application/Screenshot 2024-03-23 at 17.42.53.png>)

## Actions on installed applications

![](<../../images/application/Screenshot 2024-03-23 at 17.44.12.png>)

1. Configure the application
2. View the logs that the application records
3. Install PHP extensions (PHP applications only)
4. Start the application
5. Restart the application
6. Stop running the application
