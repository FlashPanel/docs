---
head:
    - - meta
      - name: description
        content: Hướng dẫn deploy SerpBear
---

# Deploy SerpBear

1. Cài đặt ứng dụng `docker` trong tab ứng dụng của máy chủ

2. Tạo website proxy port đến cổng `4444` (cổng này bạn tùy ý quyết định)

![tạo website deploy SerpBear](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.32.31.png>)

3. Mở file manager cho server (không phải site)

Tiến hành tạo file `serpbear/docker-compose.yaml`

![tạo file docker-compose.yaml](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.35.10.png>)

4. Mở file `docker-compose.yaml` vừa tạo

![mở file docker-compose.yaml](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.38.12.png>)

5. Nhập nội dung cho file `docker-compose.yaml`

```yaml
version: "3.8"

services:
    app:
        image: towfiqi/serpbear
        restart: unless-stopped
        ports:
            - 3000:4444 # [!code warning]
        environment:
            - USER=admin # [!code warning]
            - PASSWORD=0123456789 # [!code warning]
            - SECRET=4715aed3216f7b0a38e6b534a958362654e96d10fbc04700770d572af3dce43625dd # [!code warning]
            - APIKEY=5saedXklbslhnapihe2pihp3pih4fdnakhjwq5 # [!code warning]
            - SESSION_DURATION=24
            - NEXT_PUBLIC_APP_URL=https://your-domain.com # [!code warning]
        volumes:
            - serpbear_appdata:/app/data
networks:
    my-network:
        driver: bridge
volumes:
    serpbear_appdata:
```

Lưu ý cho cấu hình những dòng bôi màu sau:

-   `3000:4444`: 3000 là cố định, 4444 là port của website serpbear mà bạn quyết định tạo ở bước 2
-   `USER`: Tên người dùng bạn muốn sử dụng để đăng nhập vào ứng dụng. ví dụ: `admin`
-   `PASSWORD`: Mật khẩu bạn muốn sử dụng để đăng nhập vào ứng dụng. Ví dụ: `0123456789`
-   `BÍ MẬT`: Khóa bí mật sẽ được sử dụng để mã hóa khóa và mật khẩu API của bên thứ 3. ví dụ: `4715aed3216f7b0a38e6b534a958362654e96d10fbc04700770d572af3dce43625dd`
-   `APIKEY`: Khóa API sẽ được sử dụng để truy cập API của ứng dụng. ví dụ: `5saedXklbslhnapihe2pihp3pih4fdnakhjwq5`
-   `SESSION_DUration`: Thời lượng (tính bằng giờ) của phiên đăng nhập của người dùng. ví dụ: `24`
-   `NEXT_PUBLIC_APP_URL`: URL nơi ứng dụng của bạn được lưu trữ và có thể truy cập được. ví dụ: `http://123.123.123.123:4444` hoặc `https://your-domain.com`

6. Khởi chạy ứng dụng

![run serpbear](<../../images/docs/vi/tutorial/deploy-serpbear/Screenshot 2024-07-10 at 13.58.48.png>)

Mở terminal server lên và chạy lệnh sau:

```bash
cd /root/serpbear
docker compose up -d
```
