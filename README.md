BÁO CÁO TRIỂN KHAI PHÂN HỆ CRUD QUẢN LÝ PHÒNG (BÀI 3)

Phân tích thiết kế giải thuật
Khởi tạo (Init): Sử dụng cấu trúc Array of Objects lưu danh sách phòng ban đầu gồm P101, P102, P103.
Thêm mới (Create): Dùng phương thức push() để thêm phần tử phòng mới P104 vào cuối mảng.
Cập nhật (Update): Tìm vị trí index của phòng qua findIndex() theo roomId === "P101", sau đó truy cập theo index để cập nhật status = "OCCUPIED".
Xóa phòng (Delete): Tìm vị trí index của phòng P103, kiểm tra điều kiện index !== -1 rồi dùng splice(index, 1) để xóa bỏ hoàn toàn phần tử ra khỏi mảng.
Báo cáo (Read): Dùng vòng lặp hoặc console.table() để in danh sách dữ liệu trực quan sau mỗi thao tác.
Bảng Test Cases kiểm thử các thao tác CRUD
Trường hợp kiểm thử	Thao tác thực hiện	Dữ liệu đầu vào	Kết quả mong đợi
Create: Thêm phòng mới	Thêm P104 vào danh sách	roomId: P104, roomType: VIP Suite, price: 3500000, status: VACANT	Mảng tăng từ 3 lên 4 phòng, P104 nằm cuối danh sách
Update: Khách check-in	Cập nhật trạng thái P101	roomId: P101, status mới: OCCUPIED	Phòng P101 chuyển trạng thái thành OCCUPIED
Delete: Ngừng kinh doanh	Xóa phòng P103 khỏi hệ thống	roomId: P103 bằng splice	Mảng còn lại 3 phòng (P101, P102, P104), không còn P103
About
No description, website, or topics provided.
Resources
Readme
Activity
Custom properties
Stars
0 stars
Watchers
0 watching
Forks
0 forks
Report repository
Releases
No releases published
Packages
No packages published
Contributors
1
 (1)
@Anktuns1004
Anktuns1004
Languages
