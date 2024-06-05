---
position: 999
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Chuyển giao máy chủ

::: info
Tính năng chuyển giao máy chủ cho phép bạn chuyển quyền sở hữu máy chủ từ người sở hữu hiện tại sang người khác. Sau khi bạn chuyển giao máy chủ, người sở hữu mới sẽ có thể truy cập và quản lý máy chủ của mình.
:::

## Chuyển máy chủ

Để chuyển máy chủ trong {{ data.name }}, bạn cần thực hiện các bước sau:

1. Truy cập vào trang <a :href="data.url + '/user/server-transfer'" target="_blank">Chuyển giao máy chủ</a>
2. Chọn máy chủ mà bạn muốn chuyển giao.
3. Nhập email của người mà bạn muốn chuyển giao quyền sở hữu máy chủ đó.
4. Xác nhận thông tin và bấm nút `Transfer`.
5. Một email hướng dẫn sẽ được gửi đến cho người nhận.

::: warning
Máy chủ được chia sẻ sẽ có hiệu lực trong khoảng 15 phút.
:::

## Nhận máy chủ

1. Truy cập vào trang <a :href="data.url + '/user/server-transfer'" target="_blank">Chuyển giao máy chủ</a>
2. Chọn tab `Server receiving history`
3. Danh sách máy chủ đang chuyển giao sẽ xuất hiện ở đây, bấm vào icon `Nhận` và thực hiện hành động đồng ý
