<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# OpenLiteSpeed

::: info
OpenLiteSpeed là một máy chủ web mã nguồn mở được phát triển và duy trì bởi LiteSpeed Technologies. Nó là một phiên bản "nhẹ" của LiteSpeed Web Server, một máy chủ web cung cấp hiệu suất cao và tính năng mạnh mẽ.

OpenLiteSpeed được thiết kế để cung cấp một giải pháp máy chủ web nhanh, nhẹ và hiệu quả cho các dự án và môi trường phát triển. Nó hỗ trợ nhiều tính năng như xử lý đa luồng, cache, HTTP/2, SSL/TLS, rewrite rules, và nhiều tính năng khác giúp tối ưu hóa hiệu suất và bảo mật của các trang web và ứng dụng web.

Một trong những điểm mạnh của OpenLiteSpeed là hiệu suất cao và khả năng mở rộng tốt, giúp xử lý một lượng lớn các yêu cầu web một cách hiệu quả, đặc biệt là trong môi trường có tải lớn. Ngoài ra, với phiên bản mã nguồn mở, OpenLiteSpeed cũng phù hợp với các dự án và môi trường có ngân sách hạn chế.

OpenLiteSpeed là một lựa chọn máy chủ web hấp dẫn cho các dự án và môi trường phát triển muốn sử dụng một giải pháp mã nguồn mở, hiệu quả và dễ dàng cấu hình.
:::

## Cài đặt OpenLiteSpeed

![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 12.06.20.png>)

## Truy cập OpenLiteSpeed Web Admin

Sau khi cài đặt xong OpenLiteSpeed, bạn có thể truy cập OpenLiteSpeed Web Admin: `https://ip:port`.
Khi truy cập trang web admin lần đầu bạn sẽ gặp cảnh báo bảo mật `Your connection is not private` `NET::ERR_CERT_AUTHORITY_INVALID`.
Cảnh báo này không có gì nghiêm trọng, vì mặc định web admin OpenLiteSpeed sử dụng chứng chỉ tự ký trên máy chủ.

Bạn có thể chọn 1 trong 2 cách là tiếp tục truy cập hoặc cài đặt chứng chỉ SSL cho web admin

## Cách 1: Tiếp tục truy cập trên Chrome

![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.47.08.png>)
![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.47.17.png>)

## Cách 1: Tiếp tục truy cập trên Safari

![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.55.29.png>)
![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.42.38.png>)

Bấm `Visit Website`
![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 21.42.55.png>)

## Cách 2: Cài đặt chứng chỉ SSL cho web admin

1. Tạo 1 website trong `{{ data.name }}`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.06.35.png>)

    ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.07.26.png>)

2. Cài đặt [SSL](../site/ssl.md) cho website vừa tạo, và lấy ra ID chứng chỉ trong demo này là `101082`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.37.15.png>)

3. Mở terminal lên và chạy lệnh dưới đây

    ```bash
    # thay 101082 thành id tương ứng với SSL ID của website # [!code warning]
    sed -i 's/admin\/conf\/webadmin/conf\/cert\/101082\/server/' /usr/local/lsws/admin/conf/admin_config.conf
    sudo /usr/local/lsws/bin/lshttpd -t
    sudo systemctl restart lsws
    ```

4. Truy cập web admin bằng domain:port (mặc định 7080)
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-13 at 22.48.48.png>)

## LiteSpeed Cache

::: info
LiteSpeed ​​Cache (còn gọi là LSCache) được xây dựng từ đầu và tích hợp vào tất cả các sản phẩm máy chủ LiteSpeed. Nó có thể:

-   tăng tốc đáng kể nội dung trang web động (như các trang PHP)
-   cung cấp khả năng xử lý nội dung tĩnh hiệu quả hơn (như hình ảnh)
-   giảm tải máy chủ

:::

### LiteSpeed Cache for WordPress

1. Cài đặt plugin trực tiếp từ màn hình **Plugin** > **Add New**
2. Tìm kiếm `LiteSpeed ​​Cache` trong hộp tìm kiếm. Nhấn Cài đặt ngay và Kích hoạt plugin.
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-14 at 13.54.18.png>)
3. Kiểm tra bằng cách truy cập trang: [Check LSCache](https://check.lscache.io/)

## 413 Request Entity Too Large

1. Kiểm tra phiên bản php website đang dùng, trong ví dụ này là `7.4`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-17 at 18.22.19.png>)
2. Vào cài đặt `OpenLiteSpeed`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.50.11.png>)
3. Tìm đến đường dẫn `lsphp74/etc/php/7.4` và mở file `php.ini`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.51.14.png>)
4. Tìm kiếm giá trị cài đặt `upload_max_filesize` trong file `php.ini` mặc định là `2M` tức là 2 megabyte, sửa thành giá trị bạn mong muốn
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.52.16.png>)
5. Bấm nút `khởi động lại` OpenLiteSpeed
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-19 at 5.58.29.png>)

## Cấu hình chuyển hướng trong OpenLiteSpeed

1. Truy cập vào [web admin](#truy-cap-openlitespeed-web-admin) và Chọn Virtual Host cần chuyển hướng
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.38.23.png>)

2. Chọn tab `Context` bấm `Add New`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.39.17.png>)

3. Chọn type `Redirect` và bấm `Next`
   ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.40.14.png>)

4. Tại đây bạn có thể bắt đầu cấu hình rồi.

    ![](<../../images/docs/vi/server/openlitespeed/Screenshot 2024-04-26 at 10.52.20.png>)

    - URL: đường dẫn cần chuyển hướng. Ở đây bạn chỉ nhập URL thôi nhé. Không kèm tên miền (Ví du ở đây mình để là /index.html)
    - External Redirect: Bạn chọn Yes
    - Status Code: Có nhiều kiểu mã HTTP. Vì mình chuyển hướng nên chọn 301 (chuyển hướng vĩnh viễn)
    - Destination URI: URL đích cần chuyển.
    - Lưu cấu hình

    Với cấu hình trên thì khi người dùng truy cập vào https:/domain.com/index.html, hệ thống sẽ tự chuyển sang https:/domain.com/admin.html

5. Cuối cùng là bạn khởi động lại dịch vụ để áp dụng các thay đổi.
