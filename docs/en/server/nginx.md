<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Nginx

## What is Nginx?

Nginx is a very popular, open source web server software that is widely used around the world. Initially, Nginx was developed by Igor Sysoev to solve the C10k problem, which is handling 10,000 concurrent connections on a single server. However, over time, Nginx has become a powerful and versatile server software with many different features.

### Key features of Nginx

1. **HTTP Server:**

    - Nginx is capable of serving static websites very quickly and efficiently.
    - Supports modern HTTP methods such as HTTP/2, HTTPS, and SSL/TLS.

2. **Reverse Proxy:**

    - Nginx is often used as a reverse proxy to balance load and distribute traffic to the application servers behind it.
    - Supports caching to improve performance and reduce application server load.

3. **Load Balancing:**

    - Nginx can distribute load to multiple backend servers, helping to improve load capacity and enhance application availability.

4. **Mail Proxy Server:**

    - Supports email protocols such as IMAP, POP3, and SMTP.

5. **Supports optimization features:**
    - Caching: Stores static content or request results to reduce server load.
    - Compression: Supports content compression to reduce transmission size.
    - Throttle requests: Supports limiting the number of requests to protect the server from denial of service (DDoS) attacks.

### Benefits of using Nginx

-   **High performance and scalability:** Nginx is optimized to handle multiple concurrent connections with low system resources.
-   **Simple and flexible configuration:** Nginx's configuration is very clear and easy to expand.
-   **Stability and reliability:** Nginx is very stable and has been used in many large systems.
-   **Strong community support:** With a large developer and user community, there is a lot of documentation and support for Nginx.

In short, Nginx is a powerful and flexible solution for many needs of modern web systems, from serving static content to reverse proxies and load balancing.

## Redirect https www to non-www

In the system, using `{{ data.name }}` by default redirects http://www.domain.com to https://domain.com.

However, `https://www.domain.com` will not redirect to https://domain.com because browsers like Chrome allow this, but for Safari, it is more strict than accessing Accessing `https://www.domain.com` will result in an error.

To redirect https www to non-www, do the following

1. Inside the website domain.com you will see the Alias ​​Domain section, click add

    ![](<../../images/docs/vi/server/nginx/Screenshot 2024-05-21 at 17.07.46.png>)

2. Enter the alias domain name, press <kbd>TAB</kbd> or <kbd>Enter</kbd> or <kbd>,</kbd> to confirm
3. Click the `Add Alias ​​Domain` button
4. Proceed to issue SSL for `www.domain.com` as usual
5. Go to the `Nginx` tab and click `Redirect`

    ![](<../../images/docs/vi/server/nginx/Screenshot 2024-05-21 at 18.26.49.png>)

    - Memo: enter any note
    - From: /
    - To: `https://domain.com$request_uri` replace `domain.com` with the corresponding domain
    - Type: `permanent redirect`

![](<../../images/docs/vi/server/nginx/Screenshot 2024-05-21 at 18.28.11.png>)

    Click `New Rewrite Rule`

6. Click the `Sync` button to apply the changes

## Use another PHP version in the subfolder

Suppose the website you are running has a subfolder running another source code. You want to run it with a different PHP version than the one you are selecting for the website.

On the nginx tab click on the `Add Custom Config` button

-   Position: server
-   Nội dung:

    ```nginx
    location ^~ /subfolder/ {
        try_files $uri $uri/ /subfolder/index.php?$query_string;
        location ~ \.php$ {
            try_files $uri $uri/ =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php8.1-fpm-www.sock;
            fastcgi_index index.php;
            include fastcgi_params;
        }
    }
    ```

    Note 1: Change subfolder to correspond to your current subfolder.

    Note 2: in `php8.1-fpm-www.sock`, change `8.1` to the corresponding php version you want, `www` corresponds to flashvps linux user, please change it to the current linux user that the website is running Set it if it is not flashvps linux user.
