# Rclone WebUI

Đây là giao diện người dùng web dựa trên ReactJS cho dự án rclone cli

![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 13.15.19.png>)

![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 13.15.48.png>)

1. Để sử dụng `Rclone Web UI` bạn cần cài đặt `Rclone` trong ứng dụng máy chủ

    ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.31.09.png>)

2. Vào trang `Supervisor` > bấm `New Supervisor`
   ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.32.37.png>)

3. Cấu hình Supervior như hình sau
   ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.32.28.png>)

    Phần command bạn nhập theo như sau

    ```bash
    rclone rcd --rc-web-gui --rc-web-gui-no-open-browser --rc-user admin --rc-pass password --rc-addr :5572
    ```

    thay `admin` và `password` tương ứng với người dùng và mật khẩu tương ứng

4. Tới đây bạn có thể truy cập Rclone Web UI theo 2 cách `mở cổng 5572` hoặc `proxy qua tên miền`.

    1. Để mở port 5572 bạn xem [hướng dẫn sử dụng Firewall Rule](../server/firewall-rule.md), sau khi mở port xong bạn truy cập `http://ip-may-chu:5572`

    2. Để `proxy qua tên miền` bạn tạo 1 website và cấu hình như hình dưới đây
       ![](<../../images/docs/vi/tutorial/rclone-webui/Screenshot 2024-04-27 at 14.37.48.png>)

Xong!
