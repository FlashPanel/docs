---
position: 4
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Bộ nhớ đệm

## Giới thiệu

Sau khi [cài đặt một máy chủ](../connect/connect-server.md), Bạn có thể đi tới [Ứng dụng](../server/application.md) để cài đặt `Memcached` và `Redis`. Theo mặc định, không có dịch vụ nào trong số này được hiển thị công khai và chỉ có thể được truy cập từ bên trong máy chủ của bạn.

## Kết nối với Redis

Redis và Memcache đều có sẵn thông qua 127.0.0.1 và các cổng mặc định của chúng.

```
MEMCACHED_HOST=127.0.0.1
MEMCACHED_PORT=11211

REDIS_HOST=127.0.0.1
REDIS_PASSWORD=null
REDIS_PORT=6379
```

## Kết nối bên ngoài

Khi sử dụng ứng dụng khách GUI (GUI Client) hoặc ứng dụng khách bên ngoài khác để kết nối với ứng dụng bộ nhớ đệm của bạn, bạn sẽ cần sử dụng xác thực SSH
