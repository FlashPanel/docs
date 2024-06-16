---
head:
    - - meta
      - name: description
        content: Hướng dẫn deploy website ASP.NET
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# Deploy ASP.NET website

<OgImage name="Deploy ASP.NET website" />

<!-- https://learn.microsoft.com/en-us/aspnet/core/host-and-deploy/linux-nginx?view=aspnetcore-8.0&tabs=linux-ubuntu -->

## Cấu hình website

Giả sử bạn có 1 website ASP.NET muốn chạy dưới domain `domain.com`

1. Vào [kho ứng dụng](../server/application.md), cài đặt ứng dụng `ASP.NET`

    ![](<../../images/docs/vi/tutorial/deploy-asp-dotnet/Screenshot 2024-05-28 at 12.58.32.png>)

2. Tạo trang web với cấu hình như sau

    ![](<../../images/docs/vi/tutorial/deploy-asp-dotnet/Screenshot 2024-05-28 at 13.02.34.png>)

    - Nhập domain
    - Chọn Proxy Port
    - Nhập port mà ứng dụng ASP.NET của bạn chạy, ví dụ 3000

3. Cài đặt mã nguồn cho trang web từ git hoặc tự tải lên

4. Update Database & Build & Publish

    Mở terminal cho website lên

    ![](<../../images/docs/vi/tutorial/deploy-asp-dotnet/Screenshot 2024-05-28 at 13.24.27.png>)

    ```bash
    dotnet ef database update
    dotnet build
    dotnet publish
    ```

5. Tạo Service cho website

    Sử dụng tính năng [quản lý Service](../server/service.md) để tạo service

    Tạo service có tên `domain_com` (bạn đặt domain_com hay gì tùy ý nhưng lưu ý là ngắn gọn, dễ nhớ, không có ký tự đặt biệt gì)

    Nội dung `domain_com` bạn tham khảo dưới đây

    ```ini{4}
    [Unit]
    Description=ASP.NET - domain.com

    [Service]
    WorkingDirectory=/home/flashvps/domain.com // [!code focus]
    ExecStart=/usr/bin/dotnet /home/flashvps/domain.com/bin/Debug/netcoreapp8.0/publish/domain_com.dll --urls "http://127.0.0.1:3000" // [!code focus]
    Restart=always
    RestartSec=10
    KillSignal=SIGINT
    SyslogIdentifier=domain_com // [!code focus]
    User=flashvps  // [!code focus]
    Environment=ASPNETCORE_ENVIRONMENT=Production
    Environment=DOTNET_PRINT_TELEMETRY_MESSAGE=false

    [Install]
    WantedBy=multi-user.target
    ```

    ::: warning

    - thay `3000` thành proxy port bạn đã khai báo lúc tạo website trước đó
    - Bạn hãy thay `domain.com` thành tên miền tương ứng với website của bạn
    - `flashvps` là user mà website đang chạy, hãy thay `flashvps` tương ứng với user mà website đang chạy (chú ý không được đặt là `root`)
    - `bin/Debug/netcoreapp8.0/publish/domain_com.dll` là đường dẫn tới file dll mà `dotnet publish` tạo ra
    - Linux có hệ thống tệp phân biệt chữ hoa chữ thường. Việc đặt `ASPNETCORE_ENVIRONMENT` thành `Production` sẽ dẫn đến tìm kiếm tệp cấu hình `appsinstall.Production.json`, chứ không phải `appssettings.production.json`.
    - Dấu phân cách dấu hai chấm (:) không được hỗ trợ trong tên biến môi trường. Hãy sử dụng dấu gạch dưới kép (\_\_) thay cho dấu hai chấm. Hệ thống sẽ chuyển đổi dấu gạch dưới kép thành dấu hai chấm khi các biến môi trường được đọc vào cấu hình. Trong ví dụ sau , khóa chuỗi kết nối `ConnectionStrings:DefaultConnection` được đặt vào tệp định nghĩa dịch vụ là `ConnectionStrings__DefaultConnection`
        ```ini{4}
        Environment=ConnectionStrings__DefaultConnection={Connection String}
        ```

    :::

Truy cập website để xem kết quả thành công nhé!
