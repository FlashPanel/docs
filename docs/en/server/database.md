---
position: 3
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Database

::: info
For servers running `MySQL` | `MariaDB` | `PostgreSQL` {{ data.name }} provides a number of advanced features that allow you to manage your database and database users as easily as , import/export, synchronization, ...
:::

## Install Database

### When creating a server

Create a server with the following database:

1. Go to <a :href="data.url + '/servers/create'" target="_blank">create server</a> page and follow the instructions in [Server Connection](.. /connect/connect-server.md)
2. In the `Choose pre-installed apps` section, select a database (**MySQL | MariaDB**)
   ![](<../../images/database/Screenshot 2024-03-23 at 17.50.27.png>)

{{ data.name }} will then automatically install the server with the selected database and create a database user `flashvps`, the user password being randomly generated. The database username and password will be sent to your mail when the server is created successfully.

### In the applications tab

If you later decide that you need to install a database on your server, you can install it through the server's `Applications` tab. Once installed, you will be able to manage your database through {{ data.name }}.

## Create database

You can create new databases through the server's Databases tab under {{ data.name }}. At a minimum, you must provide the name of your new database. Users can access the database.

1. At the `Database` tab > Select `Create Database`
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 9.38.05.png>)
2. Enter the name of the database you want to create and select the users who can access the database (**Optional**).
3. Select `Save`

## Create a database user

You can create additional database users through the `Database` tab of the {{ data.name }} control panel. To do so, you need to provide at least a username and password.

1. At the `Database` tab
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 9.56.42.png>)
2. Select `Create database user` and enter username, password, access scope, database you want to access
3. Select `Save`

## Import database

Method 1: From the `Database` tab

1. Select the `Database` you want to import > Click the `Import Database` button

    ![](<../../images/docs/vi/server/database/Screenshot 2024-05-02 at 8.50.41.png>)

2. Upload the database dump file you want to import, with the supported extension `.sql` or `.sql.gz`
3. After downloading is complete, the system will automatically send the database import command

Method 2: From `File Manager`

1. Open `File Manager` and navigate to the database dump file you want to import
2. Right-click and select `Import Database`

    ![](<../../images/docs/vi/server/database/Screenshot 2024-05-02 at 8.55.50.png>)

3. Select the `Database` you want to import > Click the `Submit` button

    ![](<../../images/docs/vi/server/database/Screenshot 2024-05-02 at 8.57.10.png>)

## Export database

1. Click on the `Export Database` button
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 9.56.44.png>)
2. Click the `Create Backup` button
3. Wait for the backup process to take place, after completion the `download` button will appear
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 11.12.21.png>)

## Synchronize the database

![](<../../images/database/Screenshot 2024-03-23 at 18.04.15.png>)
In {{ data.name }}, the database sync feature allows users to easily synchronize the names of databases and database usernames on the server. This way, the administrator can ensure that all database information on the server is synchronized so that it can be operated on the panel.

# Access MySQL remotely

See more [here](../tutorial/remote-mysql.md)

## phpMyAdmin

Unlike the panels or scripts you used before, phpMyAdmin in `{{ data.name }}` is a standalone website.

See more [here](phpmyadmin.md)
