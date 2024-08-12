---
head:
    - - meta
      - name: description
        content: "WireGuard: fast, modern, secure VPN tunnel"
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# WireGuard VPN

<OgImage name="WireGuard VPN" />

## VPN là gì?

VPN hay Mạng riêng ảo tạo ra kết nối mạng riêng tư giữa các thiết bị thông qua Internet. VPN được sử dụng để truyền dữ liệu một cách an toàn và ẩn danh qua các mạng công cộng. VPN hoạt động bằng cách ẩn địa chỉ IP của người dùng và mã hóa dữ liệu để chỉ người được cấp quyền nhận dữ liệu mới có thể đọc được.

-   **Lợi ích của VPN**:
    -   Bảo mật dữ liệu khi truy cập mạng công cộng.
    -   Bảo vệ quyền riêng tư trực tuyến.
    -   Truy cập nội dung bị chặn địa lý.
-   **Các loại VPN phổ biến**: L2TP, OpenVPN, PPTP, IPsec.

## WireGuard VPN là gì?

WireGuard là một giao thức truyền thông và phần mềm mã nguồn mở miễn phí, triển khai các mạng riêng ảo được mã hóa. Nó nhằm mục đích nhẹ hơn và hoạt động tốt hơn IPsec và OpenVPN, hai giao thức đường hầm phổ biến. Giao thức WireGuard chuyển lưu lượng truy cập qua UDP.

-   **Ưu điểm của WireGuard**:
    -   Hiệu suất cao: Sử dụng các thuật toán mã hóa hiện đại, nhẹ và nhanh.
    -   Đơn giản trong cấu hình: Cấu hình dễ hiểu và dễ triển khai.
    -   Bảo mật mạnh mẽ: Sử dụng mã hóa mạnh và cơ chế xác thực hiện đại.

## Cài đặt WireGuard

-   Chọn máy chủ cần cài đặt WireGuard, sau đó vào trang [Ứng dụng](./application.md)
-   Chọn ứng dụng chưa được cài đặt, tìm ứng dụng có tên là `WireGuard` bấm cài đặt

![trang cài đặt WireGuard](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.08.48.png>)

## Kết nối WireGuard VPN

![truy cập trang quản lý WireGuard](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.25.16.png>)

Sau khi cài đặt xong `WireGuard` bạn có thể vào trang quản lý `WireGuard` để tạo client

### Tạo client WireGuard

![Tạo client WireGuard](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.28.54.png>)

Bấm nút `Create Client` để tạo, nhập tên và gửi

Sau khi tạo thành công, bạn có thể tải về cấu hình WireGuard Client

![Tải về cấu hình WireGuard Client](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.30.21.png>)

### Cài đặt ứng dụng WireGuard

Truy cập [trang cài đặt WireGuard](https://www.wireguard.com/install/) để tải về ứng dụng WireGuard

![WireGuard Client](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.33.52.png>)

### Nhập file cấu hình WireGuard Client

Bấm nút + `Import Tunnel from File` để nhập file cấu hình là file được tải về ở bước trên, bấm xác nhận nếu có.

![Import Tunnel](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 18.35.03.png>)

Cuối cùng là bấm nút `Active`

![](<../../images/docs/vi/server/wireguard-vpn/Screenshot 2024-08-12 at 22.23.29.png>)
