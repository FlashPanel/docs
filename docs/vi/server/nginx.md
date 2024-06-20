<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Nginx

## Nginx là gì?

Nginx là một phần mềm máy chủ web mã nguồn mở, rất phổ biến, được sử dụng rộng rãi trên toàn thế giới. Ban đầu, Nginx được phát triển bởi Igor Sysoev nhằm giải quyết vấn đề C10k, tức là xử lý 10.000 kết nối đồng thời trên một máy chủ. Tuy nhiên, theo thời gian, Nginx đã trở thành một phần mềm máy chủ mạnh mẽ và đa năng với nhiều tính năng khác nhau.

### Các tính năng chính của Nginx

1. **Máy chủ HTTP:**

    - Nginx có khả năng phục vụ các trang web tĩnh rất nhanh chóng và hiệu quả.
    - Hỗ trợ các phương thức HTTP hiện đại như HTTP/2, HTTPS, và SSL/TLS.

2. **Proxy ngược (Reverse Proxy):**

    - Nginx thường được sử dụng làm proxy ngược để cân bằng tải (load balancing) và phân phối lưu lượng truy cập đến các máy chủ ứng dụng phía sau nó.
    - Hỗ trợ caching để cải thiện hiệu suất và giảm tải cho máy chủ ứng dụng.

3. **Cân bằng tải (Load Balancing):**

    - Nginx có thể phân phối tải đến nhiều máy chủ backend, giúp cải thiện khả năng chịu tải và tăng cường tính sẵn sàng của ứng dụng.

4. **Máy chủ proxy thư điện tử (Mail Proxy Server):**

    - Hỗ trợ các giao thức email như IMAP, POP3, và SMTP.

5. **Hỗ trợ tính năng tối ưu hóa:**
    - Caching (Bộ nhớ đệm): Lưu trữ các nội dung tĩnh hoặc các kết quả yêu cầu để giảm tải cho máy chủ.
    - Compression (Nén): Hỗ trợ nén nội dung để giảm kích thước truyền tải.
    - Throttle requests (Giới hạn số yêu cầu): Hỗ trợ giới hạn số lượng yêu cầu để bảo vệ máy chủ khỏi các tấn công từ chối dịch vụ (DDoS).

### Lợi ích của việc sử dụng Nginx

-   **Hiệu suất cao và khả năng mở rộng:** Nginx được tối ưu hóa để xử lý nhiều kết nối đồng thời với tài nguyên hệ thống thấp.
-   **Cấu hình đơn giản và linh hoạt:** Cấu hình của Nginx rất rõ ràng và dễ dàng mở rộng.
-   **Tính ổn định và độ tin cậy:** Nginx rất ổn định và đã được sử dụng trong nhiều hệ thống lớn.
-   **Hỗ trợ cộng đồng mạnh mẽ:** Với cộng đồng người dùng và phát triển rộng lớn, có rất nhiều tài liệu và hỗ trợ cho Nginx.

Tóm lại, Nginx là một giải pháp mạnh mẽ và linh hoạt cho nhiều nhu cầu của hệ thống web hiện đại, từ phục vụ nội dung tĩnh đến proxy ngược và cân bằng tải.

## Redirect https www sang non-www

Trong hệ thống sử dụng `{{ data.name }}` mặc định redirect http://www.domain.com sang https://domain.com.

Tuy nhiên `https://www.domain.com` sẽ không redirect sang https://domain.com được vì ở các trình duyệt có tính khắc khe cao như Safari hay trên mobile, việc truy cập vào `https://www.domain.com` sẽ bị lỗi.

Để redirect https www sang non-www các bạn làm như sau

1. Vào bên trong website domain.com sẽ thấy mục `www Enable`
   ![](<../../images/docs/vi/server/nginx/Screenshot 2024-06-20 at 12.37.30.png>)

2. Nhấn nút `Enable` là xong.

## Sử dụng PHP version khác trong subfolder

Giả sử trang web bạn đang chạy, có 1 thư mục con `subfolder` chạy 1 mã nguồn khác, bạn muốn chạy với phiên bản PHP khác phiên bạn đang chọn của web site.

Ở tab nginx bấm vào nút `Add Custom Config`

-   Position: server
-   Content:

    ```nginx
    location ^~ /subfolder/ {
        try_files $uri $uri/ /subfolder/index.php?$query_string;
        location ~ \.php$ {
            try_files $uri $uri/ =404;
            fastcgi_split_path_info ^(.+\.php)(/.+)$;
            fastcgi_pass unix:/var/run/php/php8.1-fpm-www.sock;
            fastcgi_index index.php;
            include fastcgi_params;
        }
    }
    ```

    Lưu ý 1: Thay subfolder thành tương ứng với thư mục con hiện tại của bạn.

    Lưu ý 2: trong `php8.1-fpm-www.sock` thay `8.1` thành phiên bản php tương ứng bạn muốn, `www` tương ứng với flashvps linux user, bạn hãy thay thành linux user hiện tại mà website đang đặt nếu không phải là flashvps linux user nhé.
