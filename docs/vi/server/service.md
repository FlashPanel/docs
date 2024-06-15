---
head:
    - - meta
      - name: description
        content: Systemd là một hệ thống quản lý dịch vụ và hệ thống khởi động cho các hệ điều hành Linux. Nó được thiết kế để khởi động, quản lý, và theo dõi các dịch vụ cũng như các tài nguyên hệ thống khác.
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# Systemd Service

<OgImage name="Systemd Service" />

## Systemd Service là gì?

Systemd là một hệ thống quản lý dịch vụ và hệ thống khởi động cho các hệ điều hành Linux. Nó được thiết kế để khởi động, quản lý, và theo dõi các dịch vụ cũng như các tài nguyên hệ thống khác.

Dưới đây là một số khái niệm cơ bản về Systemd:

1. **Unit**: Đây là một thành phần cơ bản trong Systemd. Mỗi unit là một cấu hình cho một loại đối tượng nào đó trong hệ thống (dịch vụ, ổ cứng, mount point, ...). Các loại unit phổ biến bao gồm:

    - **Service unit (`.service`)**: Quản lý các dịch vụ (daemons) trong hệ thống.
    - **Socket unit (`.socket`)**: Quản lý các socket, thường được kết hợp với service unit để khởi động dịch vụ dựa trên hoạt động mạng.
    - **Target unit (`.target`)**: Nhóm các unit lại với nhau, đại diện cho một trạng thái cụ thể của hệ thống (ví dụ: multi-user.target, graphical.target).
    - **Mount unit (`.mount`)**: Quản lý việc gắn kết hệ thống tập tin (file system).

2. **Service File**: Đây là tập tin cấu hình cho các service unit, nằm trong thư mục `/etc/systemd/system/` hoặc `/lib/systemd/system/`. Một service file bao gồm các phần chính:

    - `[Unit]`: Mô tả dịch vụ và định nghĩa các dependency (phụ thuộc).
    - `[Service]`: Thiết lập các thông số liên quan đến quá trình thực thi dịch vụ.
    - `[Install]`: Định nghĩa cách dịch vụ sẽ được kích hoạt hoặc vô hiệu hóa.

    Ví dụ về một service file đơn giản:

    ```
    [Unit]
    Description=Simple service test

    [Service]
    ExecStart=/bin/bash -c "echo Simple service - start && sleep 60 && echo Simple service - end"

    [Install]
    WantedBy=multi-user.target
    ```

3. **Các lệnh quản lý Systemd**:

    - `systemctl start <service>`: Khởi động dịch vụ.
    - `systemctl stop <service>`: Dừng dịch vụ.
    - `systemctl restart <service>`: Khởi động lại dịch vụ.
    - `systemctl enable <service>`: Kích hoạt dịch vụ để tự động khởi động khi hệ thống khởi động.
    - `systemctl disable <service>`: Vô hiệu hóa dịch vụ.
    - `systemctl status <service>`: Kiểm tra trạng thái của dịch vụ.
    - `journalctl -xe`: Xem các log của systemd.

4. **Journal**: Systemd sử dụng `journald` để ghi nhận log của hệ thống. Bạn có thể sử dụng `journalctl` để xem các log này.

Systemd đã trở thành một phần quan trọng của nhiều hệ điều hành Linux, mang lại khả năng quản lý dịch vụ mạnh mẽ và linh hoạt.

## Quản lý Service Unit

Trong systemd, một "Service Unit" là một unit đặc biệt được sử dụng để định nghĩa và quản lý các dịch vụ hệ thống. Quản lý các service unit là một phần quan trọng trong công việc của một quản trị viên hệ thống để đảm bảo rằng các dịch vụ hoạt động một cách ổn định và hiệu quả.

### Màn hình chính quản lý dịch vụ

**Tại màn hình chính của trang quản lý máy chủ**: Chọn Dịch Vụ
![](<../../images/docs/vi/server/service/Screenshot 2024-06-13 at 23.02.42.png>)

### Tạo và Cấu hình Service Unit:

Các bước để tạo và cấu hình 1 dịch vụ:

**Tại màn hình quản lý dịch vụ**:

-   Chọn Thêm mới dịch vụ
-   Điền các thông tin dịch vụ
-   Nhấn nút Thêm dịch vụ

![](<../../images/docs/vi/server/service/Screenshot 2024-06-13 at 23.05.02.png>)

### Sửa cấu hình Service Unit:

Các bước để sửa cấu hình 1 dịch vụ làm theo hướng dẫn trong ảnh sau:

**Tại màn hình chính quản lý máy chủ**:

-   Bấm vào biểu tượng bút chì cạnh dịch vụ muốn sửa
-   Điền các thông tin dịch vụ cần sửa hay bổ sung
-   Nhấn nút Sửa dịch vụ

### Các hành động khác trên màn hình chính quản lý dịch vụ:

![](<../../images/docs/vi/server/service/Screenshot 2024-06-13 at 23.05.43.png>)

1. **Khởi động dịch vụ**
2. **Khởi động lại dịch vụ**
3. **Dừng dịch vụ**
4. **Xem nhật ký bình thường**
5. **Xem nhật ký lỗi của dịch vụ**
6. **Kích hoạt dịch vụ để tự động khởi động khi hệ thống khởi động**
7. **Bỏ kich hoạt dịch vụ tự động khởi động khi hệ thống khởi động (Mình phải tự khởi động thủ công khi hệ thống khởi động)**
8. **Xóa dịch vụ**

## Tổng kết:

Ở trên là các bước cơ bản và khá là dễ dàng để thêm mới, chỉnh sửa, cũng như quản lý 1 dịch vụ do chính bạn tạo ra.
