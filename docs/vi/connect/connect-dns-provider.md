---
position: 3
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Kết nối DNS

Kết nối DNS cho phép bạn `{{ data.name }}` quản lý DNS, và tự động tạo bản ghi trong 1 số [trường hợp](#co-the-ban-chua-biet)

## Cloudflare

1. Đăng nhập vào tài khoản `Cloudflare` của bạn.
2. Truy cập trang API Token tại: https://dash.cloudflare.com/profile/api-tokens, sau đó nhấn vào nút `Create Token`
   ![](../../images/connect/cloudflare01.png)
3. Ở mục `Custom Token` nhấn `Get Started`
   ![](../../images/connect/cloudflare02.png)
4. Ở mục `Create Custom Token` lần lượt điền và chọn như trong hình
   ![](../../images/connect/cloudflare03.png)
5. Chọn `Create Token`
   ![](../../images/connect/cloudflare04.png)
6. Xong, hãy sao chép token ở dưới
   ![](../../images/connect/cloudflare05.png)
7. Truy cập trang <a :href="data.url + '/user/dns'" target="_blank">quản lý DNS</a> `{{ data.name }}`
8. Nhấn nút `Thêm Khóa`
9. Nhập mô tả về API Token này
10. Nhập API Token nhận được ở trên
11. Nhấn nút `Thêm API Token`

## Name.com

1. Đăng nhập vào tài khoản `Name.com` của bạn.
2. Truy cập trang API Token tại: https://www.name.com/account/settings/api
3. Nhập `Token name` và Nhấn nút `Generate new token`
4. Truy cập trang <a :href="data.url + '/user/dns'" target="_blank">quản lý DNS</a> `{{ data.name }}`
5. Nhấn nút `Thêm Khóa`
6. Nhập mô tả về API Token này
7. Nhập API Token nhận được ở trên
8. Nhấn nút `Thêm API Token`

## Quản lý DNS

Sau khi thêm khóa API thành công, hệ thống sẽ tự động lấy tất cả các domain bạn cho phép quản lý về.
Các bạn chỉ cần chọn vào domain nào cần quản lý.

![](../../images/connect/cloudflare06.png)

## Có thể bạn chưa biết?

Khi bạn tạo một trang web mới, mà tên miền nằm trong danh sách domain được quản lý tại `{{ data.name }}`.
Hệ thống sẽ tự động tạo 1 bản ghi DNS type A trỏ về máy chủ đang sử dụng để tạo tên miền.
