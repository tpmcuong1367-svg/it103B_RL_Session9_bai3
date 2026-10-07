let rooms = [
  {
    roomId: "P101",
    roomType: "Standard Single",
    pricePerNight: 800000,
    status: "VACANT"
  },
  {
    roomId: "P102",
    roomType: "Deluxe Ocean View",
    pricePerNight: 1500000,
    status: "VACANT"
  },
  {
    roomId: "P103",
    roomType: "Standard Twin",
    pricePerNight: 1100000,
    status: "MAINTENANCE"
  }
];

function displayRooms(title) {
  console.log(`${title}`);
  console.table(rooms);
}

displayRooms("DANH SÁCH PHÒNG BAN ĐẦU");

const newRoom = {
  roomId: "P104",
  roomType: "VIP Suite",
  pricePerNight: 3500000,
  status: "VACANT"
};
rooms.push(newRoom);
displayRooms("SAU KHI THÊM PHÒNG P104");

const targetUpdateId = "P101";
const updateIndex = rooms.findIndex((room) => room.roomId === targetUpdateId);

if (updateIndex !== -1) {
  rooms[updateIndex].status = "OCCUPIED";
  console.log(`[Thông báo] Đã cập nhật trạng thái phòng ${targetUpdateId} thành OCCUPIED.`);
} else {
  console.log(`[Lỗi] Không tìm thấy phòng ${targetUpdateId} để cập nhật.`);
}
displayRooms("SAU KHI CẬP NHẬT TRẠNG THÁI PHÒNG P101");

const targetDeleteId = "P103";
const deleteIndex = rooms.findIndex((room) => room.roomId === targetDeleteId);

if (deleteIndex !== -1) {
  rooms.splice(deleteIndex, 1);
  console.log(`[Thông báo] Đã xóa phòng ${targetDeleteId} ra khỏi hệ thống.`);
} else {
  console.log(`[Lỗi] Không tìm thấy phòng ${targetDeleteId} để xóa.`);
}
displayRooms("SAU KHI XÓA PHÒNG P103 (NGỪNG KINH DOANH)");