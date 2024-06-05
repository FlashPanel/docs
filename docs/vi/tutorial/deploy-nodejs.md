# Deploy NodeJS website

Giả sử bạn có 1 website nodejs muốn chạy dưới domain `api.domain.com`

1. Đảm bảo 2 ứng dụng `NodeJS` và `PM2` được cài đặt trên máy chủ
2. Tạo trang web với cấu hình như sau

    ![](<../../images/docs/vi/tutorial/deploy-nodejs/Screenshot 2024-05-20 at 19.35.05.png>)

    - Nhập domain
    - Chọn Proxy Port
    - Nhập port mà ứng dụng nodejs của bạn chạy, ví dụ 3000

3. Cài đặt mã nguồn cho trang web từ git hoặc tự tải lên
4. Ở dưới local mình start nodejs bằng lệnh `node indexjs`
   thì trên môi trường production mình chạy lệnh
   `pm2 start index.js --name my-api`
   ![](<../../images/docs/vi/tutorial/deploy-nodejs/Screenshot 2024-05-20 at 19.38.34.png>)
5. Lần sau mỗi khi cập nhật code mới bạn chỉ cần chạy lại lệnh
   `pm2 restart my-api`
