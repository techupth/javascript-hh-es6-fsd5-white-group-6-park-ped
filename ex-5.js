// Exercise #5: Rest Operators

// ให้ Declare ตัว Function ที่ชื่อว่า sum โดยมีรายละเอียดดังนี้

// รับ Parameter เป็นตัวเลขเข้ามากี่ตัวก็ได้
// Return ออกไปเป็นผลรวมของตัวเลขที่ส่งเข้ามาจาก Parameter ทั้งหมด
// ตัวอย่างโปรแกรม

function sum(num1, num2, ...rest) {
  return (
    num1 +
    num2 +
    (rest.length > 0
      ? rest.reduce((acccumulator, currentValue) => acccumulator + currentValue)
      : 0)
  );
}
let result1 = sum(1, 2, 3, 4, 5, 6, 7, 8);
let result2 = sum(1, 2, 3, 4);

console.log(`Result ${result1}`);
console.log(`Result ${result2}`);
// เมื่อทำการแสดงผลค่าของ result1 ออกมาดูทางหน้าจอด้วย console.log() จะได้ผลลัพธ์เป็น "Result 36"
// เมื่อทำการแสดงผลค่าของ result2 ออกมาดูทางหน้าจอด้วย console.log() จะได้ผลลัพธ์เป็น "Result 10"
