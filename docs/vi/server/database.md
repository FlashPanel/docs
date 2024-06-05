---
position: 3
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Cơ sở dữ liệu

::: info
Đối với các máy chủ chạy `MySQL` | `MariaDB` | `PostgreSQL` {{ data.name }} cung cấp một số tính năng nâng cao cho phép bạn quản lý cơ sở dữ liệu và người dùng cơ sở dữ liệu của bạn một cách dễ dàng như quản lý cơ sở dữ liệu, người dùng, nhập/xuất, đồng bộ, ...
:::

## Cài đặt Cơ sở dữ liệu

### Khi tạo máy chủ

Tạo một máy chủ với cơ sở dữ liệu như sau:

1.  Truy cập trang <a :href="data.url + '/servers/create'" target="_blank">tạo máy chủ</a> và làm theo hướng dẫn ở [Kết nối máy chủ](../connect/connect-server.md)
2.  Tại mục chọn `Choose pre-installed apps` hãy chọn 1 cơ sở dữ liệu (**MySQL | MariaDB**)
    ![](<../../images/database/Screenshot 2024-03-23 at 17.50.27.png>)

Sau đó, {{ data.name }} sẽ tự động cài đặt máy chủ cùng với cơ sở dữ liệu đã được chọn và tạo một người dùng cơ sở dữ liệu `flashvps`, mật khẩu người dùng được tạo ngẫu nhiên. Tên người dùng cơ sở dữ liệu và mật khẩu sẽ được gửi đến mail của bạn khi máy chủ được tạo thành công.

### Trong tab ứng dụng

Nếu sau này bạn quyết định rằng bạn cần cài đặt cơ sở dữ liệu trên máy chủ của mình, bạn có thể cài đặt thông qua tab `Ứng dụng` của máy chủ. Sau khi cài đặt, bạn sẽ có thể quản lý cơ sở dữ liệu của mình thông qua {{ data.name }}.

## Tạo cơ sở dữ liệu

Bạn có thể tạo cơ sở dữ liệu mới thông qua tab Cơ sở dữ liệu của máy chủ trong {{ data.name }}. Tối thiểu, bạn phải cung cấp tên của cơ sở dữ liệu mới của mình. Người dùng có thể truy cập cơ sở dữ liệu.

1. Tại tab `Cơ sở dữ liệu` > Chọn `Tạo Cơ sở dữ liệu`
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 9.38.05.png>)
2. Nhập tên cơ sở dữ liệu muốn tạo và chọn người dùng có thể truy cập cơ sở dữ liệu (**Tùy chọn**).
3. Chọn `Lưu`

## Tạo người dùng cơ sở dữ liệu

Bạn có thể tạo thêm người dùng cơ sở dữ liệu thông qua tab `Cơ sở dữ liệu` của bảng điều khiển {{ data.name }}. Để làm như vậy, bạn cần cung cấp tối thiểu tên người dùng, mật khẩu.

1. Tại tab `Cơ sở dữ liệu`
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 9.56.42.png>)
2. Chọn `Tạo người dùng cơ sở dữ liệu` và nhập tên người dùng, mật khẩu, phạm vi truy cập, cơ sở dữ liệu muốn truy cập
3. Chọn `Lưu`

## Nhập cơ sở dữ liệu

Cách 1: Từ tab `Cơ sở dữ liệu`

1. Chọn `Cơ sở dữ liệu` muốn nhập > Bấm vào nút `Import Database`

    ![](<../../images/docs/vi/server/database/Screenshot 2024-05-02 at 8.50.41.png>)

2. Tải lên file dump cơ sở dữ liệu muốn nhập, với phần mở rộng hỗ trợ là `.sql` hoặc `.sql.gz`
3. Sau khi tải xong, hệ thống sẽ tự động gửi lệnh nhập cơ sở dữ liệu

Cách 2: Từ `File Manager`

1. Mở `File Manager` và tìm đến file dump cơ sở dữ liệu muốn nhập
2. Click chuột phải chọn `Import Database`

    ![](<../../images/docs/vi/server/database/Screenshot 2024-05-02 at 8.55.50.png>)

3. Chọn `Cơ sở dữ liệu` muốn nhập > Bấm vào nút `Submit`

    ![](<../../images/docs/vi/server/database/Screenshot 2024-05-02 at 8.57.10.png>)

## Xuất cơ sở dữ liệu

1. Bấm vào nút `Export Database`
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 9.56.44.png>)
2. Bấm vào nút `Create Backup`
3. Đợi quá trình backup diễn ra, sau khi hoàn thành nút `download` sẽ xuất hiện
   ![](<../../images/docs/vi/server/database/Screenshot 2024-04-23 at 11.12.21.png>)

## Đồng bộ cơ sở dữ liệu

![](<../../images/database/Screenshot 2024-03-23 at 18.04.15.png>)
Trong {{ data.name }}, tính năng đồng bộ cơ sở dữ liệu cho phép người dùng dễ dàng đồng bộ hóa tên của các cơ sở dữ liệu và tên người dùng cơ sở dữ liệu trên máy chủ. Bằng cách này, người quản trị có thể đảm bảo rằng tất cả các thông tin cơ sở dữ liệu trên máy chủ được đồng bộ để có thể thao tác trên panel.

# Truy cập MySQL từ xa

Xem thêm [ở đây](../tutorial/remote-mysql.md)

## phpMyAdmin

Không giống như các panel hay các script bạn sử dụng trước đây, phpMyAdmin trong `{{ data.name }}` là một website độc lập.

Xem thêm [ở đây](phpmyadmin.md)
