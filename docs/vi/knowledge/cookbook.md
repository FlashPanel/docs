---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Cookbook

## Công việc đã lên lịch Không chạy

Điều quan trọng cần lưu ý là chỉ cần một công việc đã lên lịch được cấu hình sai sẽ phá vỡ tất cả các công việc trong bộ lập lịch. Bạn nên xác minh rằng tần suất và các lệnh của bạn là chính xác bằng cách sử dụng một công cụ như [Crontab.guru](https://crontab.guru/).

## Quy tắc tường lửa SSH bị xóa

Nếu bạn đã xóa quy tắc tường lửa (thường là cổng 22) khỏi giao diện người dùng `{{ data.name }}` hoặc trực tiếp trên máy chủ, `{{ data.name }}` sẽ không thể kết nối với máy chủ và sẽ không thể tạo lại quy tắc này cho bạn.

Để khắc phục điều này, bạn sẽ cần truy cập trực tiếp vào máy chủ thông qua nhà cung cấp của mình và thêm lại cổng SSH theo cách thủ công. DigitalOcean cho phép bạn kết nối từ xa thông qua bảng điều khiển của họ.

`{{ data.name }}` sử dụng `ufw` cho tường lửa, vì vậy khi bạn đã kết nối với máy chủ, bạn cần chạy phần sau với quyền `root`:

```bash
ufw allow 22
```

Với 22 là giá trị cổng SSH hiện tại của máy chủ
