---
position: 1
---

<script setup>
import { data } from '../../.vitepress/config.data.ts'
</script>

# Kết nối máy chủ

## Kết nối máy chủ có sẵn

::: info

Máy chủ có sẵn là máy chủ không được khởi tạo tự động qua API

:::

::: warning

-   Đảm bảo rằng bạn đang sử dụng hoặc tạo một máy chủ Ubuntu mới (20.04, 22.04 LTS 64bit)
-   {{ data.name }} có thể sẽ không hoạt động trên máy chủ đã cài đặt sẵn từ trước.

:::

::: tip

Đối với các máy chủ có sẵn thường không được cập nhật, chạy lệnh cập nhật dưới đây trước khi thực hiện kết nối sẽ tránh tình trạng treo khi đang cài đặt.

```bash
apt update
apt upgrade -y

```

:::

1.  Truy cập trang <a :href="data.url + '/servers/create'" target="_blank">tạo máy chủ</a>
2.  Bấm chọn Custom Server
3.  Nhập Server Name: là tên máy chủ
4.  Nhập IP v4 của máy chủ
5.  Chọn kiểu chứng thực là Password hoặc SSH Key
    ::: warning

    {{ data.name }} chỉ sử dụng thông tin này trong lần cài đặt đầu tiên, không lưu trữ bất cứ đâu!

    :::

    1.  Nếu là Password: nhập SSH Password của `root` account
    2.  Nếu là SSH Key: Chọn file private key và điền passphrase (nếu có)  
        Nếu file private key loại OpenSSH mà có passphrase {{ data.name }} sẽ không đọc được, bạn vui lòng gỡ passphrase ra khỏi key bằng lệnh:
        ```bash
        ssh-keygen -p -f path_to_private_key
        ```

6.  Chọn các ứng dụng sẽ cài đặt ban đầu
7.  Nhấn thêm máy chủ.

## Kết nối máy chủ thông qua API

::: warning
Nếu chưa đăng ký `API Key` của nhà cung cấp máy chủ thì sẽ không thể thực hiện kết nối. [Hướng dẫn đăng ký tại đây](./connect-server-provider.md)
:::

1.  Truy cập trang <a :href="data.url + '/servers/create'" target="_blank">tạo máy chủ</a>
2.  Chọn các nhà cung cấp mà `{{ data.name }} hỗ trợ
3.  Chọn thông tin đăng nhập
4.  Chọn Khu vực, chọn Gói
5.  Nhập tên máy chủ
6.  Chọn các ứng dụng cài đặt sẵn
7.  Nhấn kết nối máy chủ mới

## Vấn đề thường gặp

### Root account bị vô hiệu hóa đăng nhập (OVH)

Một số nhà cung cấp máy chủ mặc định vô hiệu hóa người dùng root (chẳng hạn như **OVH**), thay vào đó có 1 tài khoản người dùng chẳng hạn `ubuntu` và người dùng này có thể lên quyền root

Để cho phép `root` login bạn làm như sau

1.  SSH Login vào tài khoản nhà cung cấp máy chủ tạo cho bạn, chẳng hạn `ubuntu`
2.  Sau đó copy lệnh dưới đây và dán vào terminal

    ```bash
    if [ "$EUID" -ne 0 ]; then
        sudo su
    fi

    # Find the line in the file that contains "PermitRootLogin"
    line1=$(grep -n -m 1 "^#*\s*PermitRootLogin" /etc/ssh/sshd_config | cut -d: -f1)
    # Replace the line with "PermitRootLogin yes"
    sed -i "${line1}s/.*/PermitRootLogin yes/" /etc/ssh/sshd_config

    # Find the line in the file that contains "PasswordAuthentication"
    line2=$(grep -n -m 1 "^#*\s*PasswordAuthentication" /etc/ssh/sshd_config | cut -d: -f1)
    # Replace the line with "PasswordAuthentication yes"
    sed -i "${line2}s/.*/PasswordAuthentication yes/" /etc/ssh/sshd_config

    # Restart the ssh service to apply the changes
    systemctl restart ssh

    # Doi mat khau cho user root
    sudo passwd root
    ```

Quay lại {{ data.name }} và tiến hành kết nối như hướng dẫn ở trên.

### Please login as the user "ubuntu" rather than the user "root" (AWS)

Với các máy chủ **AWS** thì đăng nhập tài khoản `root` vào sẽ có thông báo như thế này và mất kết nối. Bạn hãy đăng nhập tài khoản `ubuntu` và thực hiện lệnh sau

```bash
sudo su
sed -i -e 's/.*exit 142" \(.*$\)/\1/' /root/.ssh/authorized_keys
```
