---
position: 3
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Kết nối DNS

Kết nối DNS cho phép bạn `{{ data.name }}` quản lý DNS, và tự động tạo bản ghi trong 1 số [trường hợp](#co-the-ban-chua-biet)

## Cloudflare

Dưới đây là hướng dẫn sử dụng để tạo API Token Cloudflare với các quyền cụ thể cho **Zone (Đọc)**, **DNS (Chỉnh sửa)** và **SSL và Chứng chỉ (Chỉnh sửa)**.

Hướng dẫn này sẽ hướng dẫn bạn cách tạo API Token trong Cloudflare với các quyền sau:

-   **Zone**: Đọc
-   **DNS**: Chỉnh sửa
-   **SSL và Chứng chỉ**: Chỉnh sửa

API Token là một cách an toàn để cấp quyền truy cập hạn chế vào các phần cụ thể trong tài khoản Cloudflare của bạn. Hãy làm theo các bước bên dưới để tạo và định cấu hình API Token của bạn.

### **Bước 1: Đăng nhập vào Cloudflare**

1. Mở trình duyệt web của bạn và truy cập [https://dash.cloudflare.com/](https://dash.cloudflare.com/).
2. Nhập thông tin đăng nhập tài khoản Cloudflare của bạn và đăng nhập.

### **Bước 2: Vào Cài đặt API Token**

1. Trong bảng điều khiển Cloudflare, nhấp vào **biểu tượng hồ sơ** của bạn ở góc trên bên phải.
2. Chọn **Hồ sơ của tôi** từ menu thả xuống.
3. Trong menu bên trái, hãy nhấp vào **[API Token](https://dash.cloudflare.com/profile/api-tokens)**.

### **Bước 3: Tạo API Token mới**

1. Trên trang API Token, hãy nhấp vào nút **Tạo mã thông báo**.
2. Trong **Mã thông báo tùy chỉnh**, hãy nhấp vào **Bắt đầu**.

### **Bước 4: Định cấu hình quyền của API Token**

1. **Đặt tên cho mã thông báo**

    - Nhập tên có ý nghĩa cho token như:  
      **"API Token cho {{ data.name }}"**.

2. **Thêm quyền**

    - Nhấp vào **+ Thêm nữa** để định cấu hình quyền.
    - **Zone:**
        - Loại: **Zone**
        - Dịch vụ: **Zone**
        - Quyền: **Read**
    - **DNS:**
        - Loại: **Zone**
        - Dịch vụ: **DNS**
        - Quyền: **Edit**
    - **`SSL and Certificate`:**
        - Loại: **Zone**
        - Dịch vụ: **`SSL and Certificate`**
        - Quyền: **Edit**

3. **Điều chỉnh phạm vi tài nguyên (Tùy chọn)**
    - Nếu bạn muốn mã thông báo chỉ áp dụng cho các miền hoặc vùng cụ thể, hãy chọn **Chỉ định vùng** và thêm vùng theo cách thủ công. Nếu không, hãy để nguyên là **Tất cả các vùng**.

### **Bước 5: Xem xét và tạo API Token**

1. Nhấp vào **Tiếp tục tóm tắt**.
2. Xem lại các quyền và tài nguyên để đảm bảo mọi thứ đều chính xác.
3. Nhấp vào **Tạo mã thông báo**.

### **Bước 6: Lưu API Token**

1. Sau khi mã thông báo được tạo, Cloudflare sẽ hiển thị **API Token** của bạn.
2. Sao chép mã thông báo và lưu trữ an toàn.

    > **Quan trọng:** Đây là lần duy nhất bạn có thể xem mã thông báo. Nếu bạn làm mất nó, bạn sẽ cần phải tạo một cái mới.

### **Bước 7: Nhập API Token vào {{ data.name }}**

Khi bạn đã tạo API Token, hãy làm theo các bước sau để thêm nó vào {{ data.name }}:

1. Đi tới trang <a :href="data.url + '/user/dns'" target="_blank">Quản lý DNS</a> trong `{{ data.name }}`.
2. Nhấn nút **`Thêm khóa`**.
3. Nhập **mô tả** cho API Token (ví dụ: "API Token Cloudflare để quản lý DNS").
4. Dán **API Token** bạn nhận được ở bước trước vào trường được chỉ định.
5. Nhấp vào nút **`Thêm API Token`** để lưu nó.

API Token của bạn hiện đã được nhập thành công vào {{ data.name }}, cho phép bạn quản lý DNS, chứng chỉ SSL và cài đặt liên quan trực tiếp từ nền tảng.

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
