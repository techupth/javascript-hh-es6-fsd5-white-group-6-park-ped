// Exercise #1 : Merging object
// Variable studentProfile เป็น Object ที่มี Property ดังนี้
// name คือ Property ที่มี Value เป็น String ที่เก็บชื่อของนักเรียน
// age คือ Property ที่มี Value เป็น Number ที่เก็บอายุของนักเรียน
// scores คือ Property ที่มี Value เป็น Object ที่คะแนนในแต่ละวิชาของนักเรียนในรูปแบบ Key-Value Pair

// Variable additionalProperties เป็น Object ที่มี Property ดังนี้
// photo คือ Property ที่มี Value เป็น String ที่เก็บ URL ภาพของนักเรียน
// hobbies คือ Property ที่มี Value เป็น Array ของ String ที่เก็บงานอดิเรกของนักเรียน
// ให้สร้าง Variable ชื่อ newStudentProfile เป็น Object

// Property ของ Object เกิดจากการรวม Property ของ Variable studentProfile และadditionalProperties ทั้งหมด โดยใช้ Spread Operator

let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let additionalProperties = {
  photo: "https://placedog.net/500",
  hobbies: ["Football", "Coding"],
};

const newStudentProfile = { ...studentProfile, ...additionalProperties };

console.log(newStudentProfile);
// เมื่อทำการแสดงผลค่าของ newStudentProfile ออกมาดูทางหน้าจอด้วย console.log() จะต้องได้ผลลัพธ์ออกมาเป็นแบบนี้
//***output
//  {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   photo: 'https://placedog.net/500',
//   hobbies: [ 'Football', 'Coding' ]
// }
