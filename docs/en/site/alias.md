---
position: 2
---

# Alias ​​domain name

::: info
Alias, also known as Parked domain, allows us to run a website on many different domains. Alias ​​is a domain that is different from the main domain but has the same directory structure as the main domain.
:::

## Add alias domain

1. On the website management page, click the `Add` button
   ![](<../../images/docs/vi/site/alias/Screenshot 2024-04-03 at 14.18.01.png>)
2. Enter the alias domain name, press <kbd>TAB</kbd> or <kbd>Enter</kbd> or <kbd>,</kbd> to confirm
   ![](<../../images/docs/vi/site/alias/Screenshot 2024-04-03 at 14.26.41.png>)
3. Click the `Add Alias ​​Domain` button

## Configuration specific to WordPress source code

After Alias ​​is completed, you need to add the following to the `wp-config.php` file on the main website (main domain, the website aliased to). If you do not add this paragraph, when users access the Alias ​​domain, they will automatically redirect to the main domain

::: code-group

```php [http]
define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);
```

```php [https]
define('WP_SITEURL', 'https://' . $_SERVER['s_HOST']);
define('WP_HOME', 'https://' . $_SERVER['HTTP_HOST']);
```

:::
