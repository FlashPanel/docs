---
head:
    - - meta
      - name: description
        content: Hướng dẫn cài đặt email
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Mail

## Cài đặt

1. **Truy cập Tab Mail**

    - Truy cập trang quản lý server và chọn tab **Mail**.
    - Nếu bạn chưa cài đặt mail server, bạn sẽ được hướng dẫn qua **6 bước**.

2. **Bước 1: Thông tin cơ bản**

    - Nhập tên miền email (ví dụ: `example.com`).
    - Nhập tên miền phụ cho mail server (ví dụ: `mail.example.com` hoặc `smtp.example.com`).

3. **Bước 2: Cài đặt SSL**

    - Cài đặt SSL cho tên miền phụ mail server (`mail.example.com`) giống như khi cài đặt SSL cho website.

4. **Bước 3: Cài đặt DNS**

    - Đặt record MX cho tên miền (`example.com`), trỏ đến `mail.example.com`.
    - Đặt record A cho mail server (`mail.example.com`), trỏ đến IP của server (ví dụ: `11.22.33.44`).
    - Nếu DNS management được kích hoạt cho `example.com`, FlashPanel sẽ tự động cài đặt các record này.

5. **Bước 4: Cài đặt Mail Server**

    - Nhấn **Continue** để cài đặt mail server tự động.

6. **Bước 5: Cài đặt DKIM, DMARC & SPF**

    - Các record này giúp cải thiện khả năng giao hàng email và ngăn chặn email rác.
    - Cài đặt giống như **Bước 3**, và nếu DNS management được kích hoạt, FlashPanel sẽ tự động cài đặt các record này.

7. **Bước 6: Cài đặt SSL cho Mail Server**
    - Nhấn **Submit** để kích hoạt SSL cho mail server.

## Quản lý tài khoản

-   Sau khi cài đặt xong, **Trang quản lý tài khoản** sẽ xuất hiện.
-   Bạn có thể **thêm, xóa, và sửa** tài khoản email dễ dàng từ giao diện này.

## Kết nối với client email

Sau khi cài đặt xong, bạn có thể sử dụng **client email** (ví dụ: MacOS Mail, Mozilla Thunderbird, Microsoft Outlook) để quản lý email.

### Cài đặt chung:

-   **Incoming Mail Server:** Sử dụng **IMAP** (khuyến nghị).
-   **IMAP Server:** `mail.example.com`
-   **IMAP Port:** `993` (SSL/TLS enabled)
-   **Outgoing SMTP Server:** `mail.example.com`
-   **SMTP Port:** `465` (SSL/TLS enabled) or `587` (STARTTLS enabled)
-   **Authentication:** Sử dụng tài khoản email của bạn.

---

### MacOS Mail

1. Mở **Mail** và truy cập **Mail > Add Account**.
2. Chọn **Other Mail Account** và nhấn **Continue**.
3. Nhập **tên miền email** và **mật khẩu**, sau đó nhấn **Sign In**.
4. Cài đặt **Incoming Mail Server**:
    - IMAP Server: `mail.example.com`
    - Username: Tên miền email đầy đủ
    - Password: Mật khẩu email
5. Cài đặt **Outgoing Mail Server**:
    - SMTP Server: `mail.example.com`
    - Username: Tên miền email đầy đủ
    - Password: Mật khẩu email
6. Nhấn **Sign In**, sau đó lưu cài đặt.

---

### Mozilla Thunderbird

1. Mở **Thunderbird** và truy cập **Account Settings**.
2. Nhấn **Add Mail Account**.
3. Nhập **tên miền email** và **mật khẩu**, sau đó nhấn **Continue**.
4. Thunderbird sẽ tự động phát hiện cài đặt; nếu không:
    - **Incoming Server (IMAP):** `mail.example.com`, Port `993`, SSL/TLS
    - **Outgoing Server (SMTP):** `mail.example.com`, Port `465` or `587`, SSL/TLS or STARTTLS
    - **Authentication:** Normal password
5. Nhấn **Done** để hoàn thành cài đặt.

---

### Microsoft Outlook

1. Mở **Outlook** và truy cập **File > Add Account**.
2. Chọn **Manual setup or additional server types**, sau đó nhấn **Next**.
3. Chọn **IMAP** và nhập:
    - **Incoming Mail Server:** `mail.example.com`
    - **Outgoing Mail Server:** `mail.example.com`
4. Nhấn **More Settings** > **Outgoing Server** tab:
    - Check **My outgoing server (SMTP) requires authentication**.
5. Đi đến **Advanced** tab:
    - **IMAP Port:** `993`, Use SSL
    - **SMTP Port:** `465` (SSL) or `587` (STARTTLS)
6. Nhấn **OK**, sau đó **Next**, và **Finish**.

---

Mail server của bạn đã được cài đặt xong và sẵn sàng để sử dụng!
