---
position: 999
---

# Cookbook

<!-- ## Trang web đang triển khai bị kẹt
Hiếm khi ứng dụng của bạn có thể bị kẹt ở trạng thái 'đang triển khai'. Khi điều này xảy ra, bạn có thể đặt lại trạng thái triển khai ở dưới cùng bên phải của bảng quản lý trang web bằng cách sử dụng menu thả xuống Tự trợ giúp. -->

## Sử dụng cách ly người dùng (isolation user) với các trang web hiện có

Hiện tại, không thể sử dụng những người dùng bị cô lập để quản lý các trang web hiện có đã được tạo mà tùy chọn cách ly người dùng tắt. Thay vào đó, bạn sẽ cần tạo một trang web mới với tùy chọn cách ly người dùng được bật.

## Uncommitted Commits During Deployment

Lỗi này có thể xảy ra khi các tệp dưới quyền kiểm soát nguồn trong thư mục trang web đã bị ứng dụng thay đổi và sẽ bị ghi đè bởi triển khai mới.

Để khắc phục điều này, bạn nên SSH vào thư mục trang web của mình và chạy lệnh sau để loại bỏ các thay đổi:

`git reset --hard && git clean -df`

Bạn cũng nên xem lại ứng dụng của mình và sửa bất kỳ phần nào của ứng dụng có thể đang ghi vào thư mục được kiểm soát nguồn trên máy chủ của bạn. Nếu không, bạn có thể tiếp tục gặp phải lỗi này trong các lần triển khai tiếp theo.
