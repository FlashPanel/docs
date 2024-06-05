---
position: 40
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# WordPress WP Rocket

::: info
WP Rocket là một plugin tối ưu hóa hiệu suất cho các trang web được xây dựng trên nền tảng WordPress. Plugin này giúp tăng tốc độ tải trang web bằng cách tối ưu hóa các yếu tố như bộ nhớ cache, tập tin CSS và JavaScript, hình ảnh và các yếu tố khác. WP Rocket cung cấp một giao diện người dùng đơn giản để cấu hình và quản lý các thiết lập tối ưu hóa, giúp người dùng có thể cải thiện hiệu suất của trang web mà không cần phải là một chuyên gia về lập trình hoặc quản trị hệ thống.
:::

## Kích hoạt cấu hình Nginx cho `WP Rocket`

1. Đảm bảo plugin `WP Rocket` đã được cài đặt trong WordPress Admin
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 3.32.13.png>)
2. Quay lại bảng điều khiển trang web của `{{ data.name }}`, bấm ô `Nginx WordPress Rocket`
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 3.45.05.png>)
3. Bấm nút `Enabe`
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 3.45.38.png>)
4. Xác nhận kết quả

    1. Mở trình duyệt lên, nhấn `F12` để mở bảng Công cụ phát triển, chọn tab `Network`
    2. Nhập địa chỉ website của bạn
    3. Nếu thấy `X-Rocket-Nginx-Serving-Static: HIT` là OK

    ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 3.46.37.png>)

## Cấu hình WP-Cron

::: warning
Khi cấu hình WP Rocket xong thì khi người dùng truy cập, các tệp người dùng nhận được là các têp được lưu trong bộ nhớ đệm mà không cần phải thực thi bất kỳ PHP nào từ WordPress, điều này có thể khiến các công việc đã lên lịch của bạn không được gọi. Như bạn có thể đã biết, các công việc WP-Cron không phải là các công việc định kỳ thực sự và chỉ được thực thi khi bạn có lượt truy cập vào trang web của bạn.

Để đảm bảo các tác vụ đã lên lịch của bạn chạy khi cần, chúng tôi khuyên bạn nên vô hiệu hóa các công việc định kỳ WordPress và tạo một công việc định kỳ thực sự.
:::

1. Mở file `wp-config.php` thêm

    ```php
    define( 'DISABLE_WP_CRON', true );
    ```

    ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 15.57.24.png>)

2. Mở tab CronJobs và thêm
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 16.02.27.png>)

3. Các bạn thêm như sau:
   ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 16.03.55.png>)
    - Command: `cd /home/flashvps/main3.chungnguyen.xyz; php8.2 wp-cron.php` trong đó `/home/flashvps/main3.chungnguyen.xyz` các bạn thay thành đường dẫn tương ứng
      ![](<../../images/docs/vi/site/wp-rocket/Screenshot 2024-04-05 at 15.57.24-1.png>)
      `php8.2` là phiên bản php hiện tại đang dùng cho website này.
    - User: tương ứng với người dùng của website hiện tại
    - Cron Expression: ở minute sửa thành `*/15`
4. Ấn nút `Create CronJob`
