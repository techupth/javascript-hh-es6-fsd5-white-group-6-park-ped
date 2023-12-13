// Exercise #3: Merging the Arrays

// Variable orders เป็น Array ของ Object ที่มี Property ดังนี้
// orderId คือ Property ที่มี Value เป็น String ที่เก็บรหัสคำสั่งซื้อ
// paymentType คือ Property ที่มี Value เป็น String ที่ประเภทการจ่ายเงิน
// totalPrice คือ Property ที่มี Value เป็น Number ที่เก็บราคารวม
// Variable additionalOrders เป็น Array ของ Object ที่มี Property เหมือนกับ orders
// ให้ Declare ตัว Variable newOrders เป็น Array ที่มีรายละเอียดดังนี้
// Value เป็น Element ทั้งหมดที่อยู่ใน Array orders และ additionalOrders รวมกัน
// เมื่อ ทำการแสดงผลค่าของ newOrders ออกมาดูทางหน้าจอด้วย console.log() จะต้องได้ผลลัพธ์ออกมาเป็นแบบนี้

let orders = [
  { orderId: "A001", paymentType: "Cash", totalPrice: 2500 },
  { orderId: "A002", paymentType: "Credit Card", totalPrice: 4000 },
  { orderId: "A003", paymentType: "Credit Card", totalPrice: 6000 },
];

let additionalOrders = [
  { orderId: "A004", paymentType: "Credit Card", totalPrice: 611000 },
  { orderId: "A005", paymentType: "Credit Card", totalPrice: 45000 },
];

const newOrders = [...orders, ...additionalOrders];
console.log(newOrders);

//output***
// [
//   {
//     orderId: "A001",
//     paymentType: "Cash",
//     totalPrice: 2500,
//   },
//   {
//     orderId: "A002",
//     paymentType: "Credit Card",
//     totalPrice: 4000,
//   },
//   {
//     orderId: "A003",
//     paymentType: "Credit Card",
//     totalPrice: 6000,
//   },
//   {
//     orderId: "A004",
//     paymentType: "Credit Card",
//     totalPrice: 611000,
//   },
//   {
//     orderId: "A005",
//     paymentType: "Credit Card",
//     totalPrice: 45000,
//   },
// ];
