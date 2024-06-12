# Hướng dẫn triển khai ứng dụng Python/Flask

## Cài đặt Python, pip và các gói cần thiết khác

```bash
sudo apt install python3 python3-pip python3-venv -y
```

## Tạo website

Giả sử ứng dụng python của bạn chạy ở cổng `1406`

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-12 164349.png>)

Trỏ DNS website về máy chủ và [cài SSL](../site/ssl.md)

## Tạo môi trường ảo

Thiết lập một môi trường ảo và kích hoạt nó:

```bash
python3 -m venv venv
source venv/bin/activate
```

## Cài đặt phụ thuộc ứng dụng

```bash
pip install -r requirements.txt
```

## Sử dụng Gunicorn để deploy

### Lý do sử dụng `gunicorn`

Gunicorn (Green Unicorn) là một HTTP server WSGI (Web Server Gateway Interface) cho các ứng dụng Python. Nó được thiết kế để phục vụ các ứng dụng web Python trong môi trường sản xuất, cung cấp khả năng xử lý đồng thời và quản lý tải trọng tốt hơn so với việc chỉ sử dụng server tích hợp sẵn của Flask.

### Cài đặt `gunicorn`

```bash
pip install gunicorn
```

### 7. Test Your Application

Chạy ứng dụng của bạn để đảm bảo nó hoạt động:

```bash
gunicorn --bind 0.0.0.0:1406 app:app
```

Trong lệnh `gunicorn --bind 0.0.0.0:1406 app:app`, phần `app:app` có nghĩa là:

1. **Tên tệp ứng dụng**: Phần trước dấu hai chấm (`:`) là tên của tệp Python chứa ứng dụng Flask của bạn. Trong trường hợp này, tệp Python là `app.py`.
2. **Tên đối tượng ứng dụng**: Phần sau dấu hai chấm (`:`) là tên của đối tượng ứng dụng Flask trong tệp Python đó. Trong trường hợp này, đối tượng ứng dụng là `app`.

Kết hợp lại, `app:app` nói với Gunicorn rằng:

-   Tìm tệp `app.py`.
-   Trong tệp `app.py`, tìm đối tượng Flask được đặt tên là `app`.

Gunicorn sẽ:

1. Mở tệp `app.py`.
2. Tìm đối tượng Flask được định nghĩa là `app`.
3. Chạy ứng dụng Flask bằng Gunicorn, lắng nghe trên tất cả các địa chỉ IP (`0.0.0.0`) ở cổng `1406`.

### 9. Set Up a Systemd Service for Gunicorn

Create a systemd service file for your app:

```bash
sudo nano /etc/systemd/system/myapp.service
```

Add the following content:

```ini
[Unit]
Description=Gunicorn instance to serve myapp
After=network.target

[Service]
User=your_user
Group=www-data
WorkingDirectory=/path/to/your/myapp
Environment="PATH=/path/to/your/myapp/venv/bin"
ExecStart=/path/to/your/myapp/venv/bin/gunicorn --workers 3 --bind unix:myapp.sock -m 007 app:app

[Install]
WantedBy=multi-user.target
```

Start and enable the service:

```bash
sudo systemctl start myapp
sudo systemctl enable myapp
```

### 10. Adjust Nginx Configuration for Unix Socket

Update the Nginx configuration to use the Unix socket:

```nginx
server {
    listen 80;
    server_name your_domain_or_IP;

    location / {
        proxy_pass http://unix:/path/to/your/myapp/myapp.sock;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Restart Nginx:

```bash
sudo systemctl restart nginx
```

Your Python app should now be deployed and accessible via your server’s IP address or domain.
