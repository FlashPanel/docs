---
head:
    - - meta
      - name: description
        content: Hướng dẫn Self-Hosted Chatwoot
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
import OgImage from '../../.vitepress/components/OgImage.vue'
</script>

# Chatwoot

<OgImage name="# Self-Hosted Chatwoot" />

## Chatwoot là gì?

Chatwoot là một nền tảng phần mềm nguồn mở dùng để quản lý và hỗ trợ khách hàng qua các kênh giao tiếp khác nhau. Chatwoot tập trung vào việc giúp doanh nghiệp tương tác hiệu quả với khách hàng thông qua các kênh như: 1. Email 2. Live Chat (trực tiếp trên website) 3. Social Media (Facebook, Twitter, Instagram, WhatsApp, Telegram, v.v.) 4. SMS 5. API để tích hợp với các hệ thống khác.

### Tính năng chính của Chatwoot

-   Hỗ trợ đa kênh (Omnichannel): Tích hợp nhiều nền tảng để hỗ trợ khách hàng tại một nơi duy nhất.
-   Cộng tác nhóm: Cho phép các thành viên trong nhóm làm việc chung, chuyển giao hội thoại hoặc phân công nhiệm vụ dễ dàng.
-   Automation: Tự động hóa các tác vụ lặp đi lặp lại như trả lời tin nhắn, gắn thẻ hoặc chuyển tiếp hội thoại.
-   Báo cáo và phân tích: Theo dõi hiệu suất của đội ngũ hỗ trợ và số liệu quan trọng như thời gian phản hồi, số lượng yêu cầu đã giải quyết.
-   Tùy chỉnh giao diện: Cung cấp API và webhook để tùy chỉnh theo nhu cầu của từng doanh nghiệp.
-   Nguồn mở: Bạn có thể tải về và triển khai trên máy chủ của riêng mình hoặc sử dụng bản dịch vụ đám mây của `Chatwoot`.

### Ưu điểm

-   Miễn phí và nguồn mở (có thể tự host để tiết kiệm chi phí).
-   Tích hợp dễ dàng với các công cụ và dịch vụ khác.
-   Tính linh hoạt cao, phù hợp cho cả doanh nghiệp nhỏ lẫn lớn.

### Sử dụng Chatwoot trong thực tế

• Dùng làm hệ thống hỗ trợ khách hàng trực tuyến.
• Quản lý và trả lời tin nhắn từ mạng xã hội trong một giao diện duy nhất.
• Hỗ trợ khách hàng trên website thông qua live chat.

Từ nay, với {{ data.name }}, việc cài đặt `Chatwoot` trở nên đơn giản hơn bao giờ hết. Bạn chỉ cần vài bước đơn giản, không cần thao tác phức tạp, vẫn có thể triển khai ngay trên server của mình!

## Yêu cầu phần cứng

-   CPU: 2 cores
-   RAM: 4 GB

## 1-Click Cài đặt Chatwoot

Bước 1: Tạo một Website Mới

Bước 2: Sau khi website được tạo thành công, nhấp vào Manage để mở giao diện quản lý.

Bước 3: Cài đặt Chatwoot

-   Trong giao diện quản lý website, tìm mục Install Source Code.
-   Tại đây, bạn sẽ thấy tùy chọn `Chatwoot` trong danh sách.
-   Nhấp vào biểu tượng `Chatwoot`, sau đó bấm nút Install.

![install Chatwoot](<../../images/docs/vi/tutorial/uptime-kuma/Screenshot 2024-11-26 at 12.32.26.png>)

Bước 4: Hoàn tất

-   {{ data.name }} sẽ tự động tải và cài đặt mã nguồn `Chatwoot`.
-   Sau khi hoàn tất, bạn có thể truy cập vào website vừa cài đặt để bắt đầu sử dụng `Chatwoot` ngay lập tức.
    Dưới đây là một bản tài liệu mẫu để giải thích cách sử dụng công cụ `cwctl` mà bạn đang phát triển:

---

## Sử dụng Chatwoot

Sau khi hoàn tất cài đặt, truy cập website bạn đã tạo sẽ thấy màn hình cài đặt thông tin **Quản trị viên**, nhập các mục để hoàn tất cài đặt

![screen install](<../../images/docs/vi/tutorial/chatwoot/Screenshot 2024-11-23 at 3.01.47.png>)

### Tạo inbox

-   Bấm nút `New Inbox`
    ![new inbox chatwoot](<../../images/docs/vi/tutorial/chatwoot/Screenshot 2024-11-29 at 10.49.19.png>)

-   Chọn channel là website
-   Nhập thông tin channel
-   Bấm nút `Create Inbox`
-   Thêm người được phép truy cập vào inbox, và bấm nút `Add Agents`
-   Và `inbox` đã sẵn sàng, lúc này nó cho 1 đoạn mã để bỏ vào website sử dụng

```js
<script>
  (function(d,t) {
    var BASE_URL="https://chat.flashpanel.io";
    var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
    g.src=BASE_URL+"/packs/js/sdk.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g,s);
    g.onload=function(){
      window.chatwootSDK.run({
        websiteToken: '*****',
        baseUrl: BASE_URL
      })
    }
  })(document,"script");
</script>
```

Bạn hãy copy mã này đưa vào website cần sử dụng là OK.

### Gửi thông tin người dùng tới Chatwoot bằng SDK

Khi bạn sử dụng đoạn code phía trên, người dùng truy cập website gửi tin nhắn cho bạn sẽ hiện thị tên ngẫu nhiên.

Với những website có người dùng đăng nhập, chúng ta muốn người gửi tin nhắn chứa thông tin đăng nhập như tên, email,... ta thêm đoạn script sau:

```js
<script>
  (funct(function (d, t) {
  var BASE_URL = "https://chat.flashpanel.io";
  var g = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  g.src = BASE_URL + "/packs/js/sdk.js";
  g.defer = true;
  g.async = true;
  s.parentNode.insertBefore(g, s);
  g.onload = function () {
    window.chatwootSDK.run({
      websiteToken: "*****",
      baseUrl: BASE_URL,
    });
  };
})(document, "script");

window.addEventListener("chatwoot:ready", function () {
  window.$chatwoot.setUser(`user-id`, {
    name: "FlashPanel", // Name of the user
    avatar_url: "", // Avatar URL
    email: "admin@flashpanel.io", // Email of the user
    identifier_hash: "", // Identifier Hash generated based on the webwidget hmac_token
    phone_number: "", // Phone Number of the user
    description: "", // description about the user
    country_code: "", // Two letter country code
    city: "", // City of the user
    company_name: "", // company name
    social_profiles: {
      twitter: "", // Twitter user name
      linkedin: "", // LinkedIn user name
      facebook: "", // Facebook user name
      github: "", // Github user name
    },
  });
});
</script>
```

Trong đoạn script trên ta thấy có 1 mục là `identifier_hash`, mục này xác định rằng `user-id` xác nhận được tạo bởi máy chủ. Tham khảo cách tạo `identifier_hash` bằng `php` dưới đây

```php
hash_hmac('sha256', 'user-id', 'chatwoot-inbox-hmac-token');
```

![](<../../images/docs/vi/tutorial/chatwoot/Screenshot 2024-11-29 at 11.08.33.png>)

Khi bật `Enforce User Identity Validation` thì những yêu cầu không hợp lệ sẽ bị từ chối.

## **cwctl - Công cụ quản lý Chatwoot**

`cwctl` là một công cụ dòng lệnh giúp đơn giản hóa việc cài đặt, nâng cấp và quản lý `Chatwoot`. Công cụ này hỗ trợ các thao tác thường gặp như nâng cấp, kiểm tra log, và khởi động lại dịch vụ.

Sau khi cài đặt thành công `Chatwoot` danh sách câu lệnh này sẽ xuất hiện ở phần quản lý site.

![chatwoot command](<../../images/docs/vi/tutorial/uptime-kuma/Screenshot 2024-11-26 at 12.57.21.png>)

### **Nâng cấp Chatwoot**

```bash
cwctl123456 --upgrade
```

-   Công cụ sẽ tự động tải về phiên bản ổn định mới nhất của Chatwoot và áp dụng cập nhật.

### **Mở Ruby Console**

```bash
cwctl123456 --console
```

-   Lệnh này giúp bạn truy cập trực tiếp vào môi trường Ruby console của `Chatwoot` để thực hiện các thao tác nâng cao hoặc debug.

### **Xem log hệ thống**

```bash
cwctl123456 --logs web
cwctl123456 --logs worker
```

-   **web**: Hiển thị log từ máy chủ web.
-   **worker**: Hiển thị log từ worker xử lý các tác vụ nền.

### **Khởi động lại Chatwoot**

```bash
cwctl123456 --restart
```

-   Lệnh này dừng và khởi động lại toàn bộ dịch vụ `Chatwoot`.

Với tính năng One-Click Install, {{ data.name }} giúp bạn triển khai `Chatwoot` nhanh chóng mà không cần tốn nhiều thời gian và công sức. Hãy trải nghiệm ngay để tận dụng tối đa tiềm năng của công cụ giám sát mạnh mẽ này!
