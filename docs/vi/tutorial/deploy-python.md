# Deploy Python/Flask App

## Cài đặt Python, pip và các gói cần thiết khác

Mở terminal dành cho `root` user, chạy lệnh cài Python venv, chỉ chạy 1 lần nếu đây là lần đầu tiên bạn Deploy Python/Flask App

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-16 at 14.14.53.png>)

```bash
sudo apt install python3-venv -y
```

## Tạo website

Giả sử ứng dụng python của bạn chạy ở cổng `1406`

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-12 164349.png>)

Trỏ DNS website về máy chủ và [cài SSL](../site/ssl.md)

## Tạo môi trường ảo

Mở terminal dành cho site, chạy lệnh thiết lập một môi trường ảo và kích hoạt nó:

![](<../../images/docs/vi/tutorial/deploy-python/Screenshot 2024-06-16 at 14.19.57.png>)

```bash
python3 -m venv venv
source venv/bin/activate
```

## Cài đặt phụ thuộc ứng dụng

Nếu bạn có file `requirements.txt` ở trong mã nguồn thì dùng lệnh dưới đây, còn không thì cài các gói thủ công

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

### Test Your Application

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

### Thiết lập dịch vụ Systemd

Sử dụng tính năng [quản lý Systemd Service](../server/service.md) để chạy gunicorn mà không cần phải giữ terminal.

Cấu hình tham khảo như sau:

```ini
[Unit]
Description=domain.com web application
After=network.target

[Service]
User=flashvps
WorkingDirectory=/home/flashvps/domain.com
Environment="PATH=/home/flashvps/domain.com/venv/bin"
ExecStart=/home/flashvps/domain.com/venv/bin/gunicorn --workers 3 --bind 0.0.0.0:1406 app:app

[Install]
WantedBy=multi-user.target
```

::: warning

1. Bạn nên thay `/home/flashvps/domain.com` thành đường dẫn đến thư mục website tương ứng của bạn.
2. `--workers 3`: Tùy chọn này chỉ định số lượng worker processes Gunicorn sẽ sử dụng. Ở đây, nó được cấu hình để sử dụng 3 worker processes. Worker processes giúp Gunicorn xử lý nhiều yêu cầu đồng thời, cải thiện hiệu suất của ứng dụng.

3. `--bind 0.0.0.0:1406`: Tùy chọn này chỉ định địa chỉ IP và cổng mà Gunicorn sẽ lắng nghe. `0.0.0.0` có nghĩa là lắng nghe trên tất cả các địa chỉ IP của máy chủ, và `1406` là cổng sẽ được sử dụng. Điều này cho phép ứng dụng có thể truy cập từ bất kỳ địa chỉ IP nào trên cổng `1406`.

:::

Ứng dụng Python của bạn bây giờ sẽ được triển khai và có thể truy cập được thông qua địa chỉ IP hoặc miền của máy chủ của bạn.
