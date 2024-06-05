# n8n

## Cài đặt

1. Cài đặt [ứng dụng](../server/application.md) `nodejs`
2. Cài đặt [ứng dụng](../server/application.md) `pm2`
3. Mở terminal lên và gõ lệnh cài `n8n`

    ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-06-02 at 12.06.53.png>)

    ```bash
    npm -g install n8n
    ```

    ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-06-02 at 12.08.47.png>)

4. Vẫn tại terminal bước 3, start `n8n` bằng lệnh

    ::: code-group

    ```bash [http://ip:port]
    N8N_SECURE_COOKIE=false pm2 start n8n
    pm2 save
    ```

    ```bash [http://domain.com]
    # thay domain.com thành địa chỉ website của bạn
    N8N_SECURE_COOKIE=false WEBHOOK_URL=http://domain.com pm2 start n8n
    pm2 save
    ```

    ```bash [https://domain.com]
    # thay domain.com thành địa chỉ website của bạn
    WEBHOOK_URL=https://domain.com pm2 start n8n
    pm2 save
    ```

    :::

    ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.02.50.png>)

## Truy cập

Để truy cập UI `n8n` bạn có 2 lựa chọn, dùng với dạng `http://ip:port` hoặc `domain`

### Dùng với dạng `ip:port`

1. Sử dụng tính năng [Firewall Rule](../server/firewall-rule.md)
2. Thêm firewall rule như sau:
   ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.11.06.png>)

    Name: nhập `n8n`
    Port: nhập `5678`
    ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.12.29.png>)
    Ấn nút `Add Firewall`

3. Mở trình duyệt nhập với `http://ip:5678` thay `ip` thành ip máy chủ của bạn
   ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.15.19.png>)

### Dùng với dạng `domain`

Giả sử bạn có tên miền là `domain.com` và bạn muốn sử dụng `n8n.domain.com` để truy cập UI `n8n`:

1. [Tạo 1 trang web](../site/basic.md#tao-trang-web) có tên là `n8n.domain.com`
   ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.21.15.png>)
2. Vào phần `nginx` của website để chỉnh sửa
   ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.23.26.png>)
3. Kéo xuống dưới, thêm dòng có dấu + (cộng) và xóa đi những dòng có dấu - (trừ)

    ```nginx
    listen 80;
    listen [::]:80;
    server_name n8n.lprht7cqot3f7k.flashvps.xyz;
    server_tokens off;
    root /home/flashvps/n8n.lprht7cqot3f7k.flashvps.xyz;

    # ssl_certificate ###
    # ssl_certificate_key ###
    ssl_session_timeout 1d;
    ssl_session_cache shared:FlashSSL:10m;
    ssl_session_tickets off;
    ssl_dhparam /etc/nginx/dhparams.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384;
    ssl_prefer_server_ciphers off;

    add_header Strict-Transport-Security "max-age=63072000" always;
    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.html index.php;

    charset utf-8;

    # USER CUSTOM CONFIG (CAN MOVE, DO NOT REMOVE!)

    location / {
        proxy_pass http://localhost:5678;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        #proxy_read_timeout 86400s;
        #proxy_send_timeout 86400s;
        # [!code ++:4]
        chunked_transfer_encoding off;
        proxy_buffering off;
        proxy_cache off;
    }

    # Deny files starting with a . (dot) except .well-known
    location ~ /\.(?!well-known).* {
        deny all;
    }
    # [!code --:17]
    location ~* \.(3gp|gif|jpg|jpeg|png|ico|wmv|avi|asf|asx|mpg|mpeg|mp4|pls|mp3|mid|wav|swf|flv|exe|zip|tar|rar|gz|tgz|bz2|uha|7z|doc|docx|xls|xlsx|pdf|iso|eot|svg|ttf|woff|woff2)$ {
        gzip_static off;
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
        access_log off;
        expires 30d;
        break;
    }

    location ~* \.(txt|js|css)$ {
        add_header Pragma public;
        add_header Cache-Control "public, must-revalidate, proxy-revalidate";
        access_log off;
        expires 30d;
        break;
    }
    ```

4. Bấm nút `Edit Nginx Configuration` để thay đổi
5. Bấm nút `Sync` để áp dụng thay đổi.
   ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.33.06.png>)
6. Mở trình duyệt và truy cập trang `n8n.domain.com` (thay domain.com thành tên miền của bạn)
   ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 17.35.08.png>)

    Hiển thị như thế này là thành công
    ![](<../../images/docs/vi/tutorial/n8n/Screenshot 2024-03-30 at 20.19.16.png>)
