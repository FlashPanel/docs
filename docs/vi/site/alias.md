---
position: 2
---

# Tên miền bí danh

::: info
Alias hay còn gọi Parked domain cho phép chúng ta chạy một website trên nhiều domain khác nhau. Alias là một domain khác với domain chính nhưng có cùng cấu trúc thư mục với domain chính.
:::

## Thêm tên miền bí danh

1. Tại trang quản lý website, bấm nút `Add`
   ![](<../../images/docs/vi/site/alias/Screenshot 2024-04-03 at 14.18.01.png>)
2. Nhập tên miên bí danh, bấm phím <kbd>TAB</kbd> hoặc <kbd>Enter</kbd> hoặc <kbd>,</kbd> để xác nhận
   ![](<../../images/docs/vi/site/alias/Screenshot 2024-04-03 at 14.26.41.png>)
3. Bấm nút `Add Alias Domain`

## Cấu hình dành riêng cho mã nguồn WordPress

Sau khi Alias hoàn tất bạn cần thêm đoạn sau vào file `wp-config.php` tại website chính (domain chính, website được alias tới). Nếu không thêm đoạn này thì khi người dùng truy cập vào domain Alias sẽ `tự chuyển hướng về domain chính`

::: code-group

```php [http]
define('WP_SITEURL', 'http://' . $_SERVER['HTTP_HOST']);
define('WP_HOME', 'http://' . $_SERVER['HTTP_HOST']);
```

```php [https]
define('WP_SITEURL', 'https://' . $_SERVER['s_HOST']);
define('WP_HOME', 'https://' . $_SERVER['HTTP_HOST']);
```

:::
