---
position: 1
---

# Cron Job

## Cron Job là gì?

Tiện ích dòng lệnh cron, còn được gọi là cron job là một bộ lập lịch công việc trên các hệ điều hành giống Unix. Người dùng thiết lập và duy trì môi trường phần mềm sử dụng cron để lên lịch công việc chạy định kỳ vào những thời điểm, ngày tháng hoặc khoảng thời gian cố định.

## Ưu điểm khi sử dụng Cron Job

Một trong những nổi khổ của các sysadmin chắc hẳn là việc phải làm task cả ngày lẫn đêm. Một số task cần phải thực hiện xuyên đêm, hay phải làm vào những ngày cuối tuần. Thế ta phải bỏ thời gian rảnh rỗi mỗi tối để chạy các lệnh, script ngoài giờ sao? Hay lúc nào cũng phải thức đêm để chạy các bản backup hay cập nhật?

Nhờ **Cron Job**, bạn sẽ tiết kiệm được lượng lớn thời gian khi lên lịch thực hiện task lặp lại nhiều lần, không cần phải cố gắng ghi nhớ và tạo đi tạo lại những công việc định kì.

## Hạn chế khi sử dụng Cron Job

Cron Jobs chỉ có thể thực hiện câu lệnh theo chu kỳ 1 phút trở lên, trong trường hợp muốn thực hiện các công việc lặp lại theo chu kỳ thấp hơn 1 phút sẽ không làm được.

## Cú pháp Cron Job

1 job sẽ có 2 thành phần chủ yếu đó là

-   Cron Expression: Chỉ ra chu kỳ lặp lại công việc
-   Command: Lệnh sẽ thực thi

## Cron expression là gì?

![](../../images/cron-tab.png)

Như ở hình trên các bạn thấy, `* * * * *` chính là Cron expression

Cron expression là 5 kí tự cách nhau 1 khoảng trắng, mỗi kí tự đại diện cho 1 ý nghĩa khác nhau, hãy cùng tìm hiểu:

1. Kí tự thứ 1: Chỉ ra thực thi tại phút bao nhiêu?
2. Kí tự thứ 2: Chỉ ra thực thi tại giờ nào?
3. Kí tự thứ 3: Chỉ ra thực thi tại ngày nào trong tháng?
4. Kí tự thứ 4: Chỉ ra thực thi tại tháng nào trong năm?
5. Kí tự thứ 5: Chỉ ra thực thi tại ngày nào trong tuần?

Ở trên chúng ta đã biết được mỗi vị trí tương ứng với 1 ý nghĩa, tiếp theo chúng ta cùng tìm hiểu **KHOẢNG GIÁ TRỊ ĐƯỢC PHÉP** tại mỗi vị trí

1. Kí tự thứ 1: 0-59 (phút)
2. Kí tự thứ 2: 0-23 (giờ)
3. Kí tự thứ 3: 1-31 (ngày)
4. Kí tự thứ 4: 1-12 (tháng)
5. Kí tự thứ 5: 0-6 (thứ, 0 là chủ nhật)

Sau khi nắm được khoảng giá trị chúng ta tiếp tục tìm hiểu về **KÍ TỰ ĐẶC BIỆT**

"**\***": Tất cả giá trị trong khoảng cho phép. Ví dụ nếu sử dụng ở kí tự 1 thì là mỗi phút, kí tự 2 thì là mỗi giờ, ... mỗi ngày, mỗi tháng

"**,**": Sử dụng để liệt kê giá trị. Ví dụ bạn muốn thực thi vào 7h sáng và 7h tối thì tại kí tự thứ 2 bạn sẽ điền là **7,19**

"**-**": Chỉ ra khoảng giá trị. Ví dụ bạn muốn thực thi trong khoảng từ 7h sáng tới 7h tối thì tại kí tự thứ 2 bạn sẽ điền là **7-19**

"**/**" : Chỉ ra bước nhảy giá trị. Ví dụ bạn muốn thực thi mỗi 5 phút một lần thì tại kí tự thứ 1 bạn sẽ điền là **0/5** (bắt đầu ở 0 phút, sau đó mỗi 5 phút)

Như vậy sau khi kết hợp 3 yếu tố trên, bạn có thể xây dựng 1 cron expression theo ý muốn:

Ví dụ:

`* * * * *` mỗi phút, mỗi giờ, mỗi ngày, mỗi tháng, mỗi ngày trong tuần. Tóm lại là mỗi phút đến khi sập máy chủ

`0 * * * *` mỗi giờ

`0 0 * * *` mỗi 12h đêm

`0 0 * * 0` mỗi chủ nhật, lúc 12h đêm

`0 0 1 * *` vào ngày 1 mỗi tháng, lúc 12h đêm

`0 22 * * 1-5` từ thứ 2 đến thứ 6, lúc 22h tối.

`23 0-20/2 * * *` từ 0 đến 20 giờ (lúc 23 phút), cách nhau 2 tiếng.

Bạn muốn thử sức chứ?

`0 0,12 1 */2 *` ???

`0 4 8-14 * *` ???

`0 0 1,15 * 3` ???

`5 0 * 8 *` ???

`15 14 1 * *` ???
