---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Hồ sơ

## Cập nhật

Bạn có thể cập nhật tên và mật khẩu của mình từ trang <a :href="data.url + '/user/profile'" target="_blank">Hồ sơ</a> của {{ data.name }} trong hồ sơ người dùng của bạn

## Bảo mật tài khoản với xác thực hai yếu tố (2FA)

Bạn có thể thêm Xác thực Hai yếu tố (2FA) vào tài khoản của mình từ <a :href="data.url + '/user/profile'" target="_blank">Hồ sơ</a>. Sau khi bạn bật 2FA, hãy nhớ quét mã vạch 2FA vào ứng dụng xác thực trên điện thoại của bạn.

Sau khi bật 2FA, {{ data.name }} sẽ hiển thị:

-   Mã QR (bạn nên quét)
-   Một số mã khôi phục

Mã khôi phục phải được lưu trữ an toàn và có thể được sử dụng nếu bạn không còn quyền truy cập vào thiết bị 2FA của mình. Mã khôi phục chỉ có thể được sử dụng một lần. Bạn có thể tạo lại mã khôi phục bất kỳ lúc nào từ <a :href="data.url + '/user/profile'" target="_blank">Hồ sơ</a> của mình.

::: warning **! Sử dụng 2FA**  
Chúng tôi khuyên bạn nên sử dụng ứng dụng Two-Factor (2FA) như [Google Authenticator](https://support.google.com/accounts/answer/1066447), `Authy`,... trên điện thoại thông minh để quản lý cấu hình {{ data.name }} 2FA của bạn.
:::
