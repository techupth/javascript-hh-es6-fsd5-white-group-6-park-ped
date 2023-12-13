// Exercise #4: Merging Nested Array

// Variable studentProfile เป็น Object ที่มี Property ดังนี้
// name คือ Property ที่มี Value เป็น String ที่เก็บชื่อของนักเรียน
// age คือ Property ที่มี Value เป็น Number ที่เก็บอายุของนักเรียน
// scores คือ Property ที่มี Value เป็น Object ที่คะแนนในแต่ละวิชาของนักเรียนในรูปแบบ Key - Value
// hobbies คือ Property ที่มี Value เป็น Array ของ String ที่เก็บงานอดิเรกของนักเรียน
// Variable additionalHobbies เป็น Array ของ String ที่เก็บงานอดิเรกของนักเรียน
// ให้สร้าง Variable ชื่อ newStudentProfile เป็น Object มีรายละเอียดดังนี้

// Property ของ Object newStudentProfile จะต้องมี Property ของ studentProfile ทั้งหมด
// ใน Property hobbies ของ Object newStudentProfile จะมี Value ของ Array additionalHobbies เพิ่มเข้าไปด้วยโดยใช้ Spread Operator
// เมื่อทำการแสดงผลค่าของ newStudentProfile ออกมาดูทางหน้าจอด้วย console.log() จะต้องได้ผลลัพธ์ออกมาเป็นแบบนี้
let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
  hobbies: ["Football", "Coding"],
};

let additionalHobbies = ["Painting", "Yoga"];

// Start coding here
const newStudentProfile = {
  ...studentProfile,
  hobbies: [...studentProfile.hobbies, ...additionalHobbies],
};
console.log(newStudentProfile);
//output***
// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40 },
//   hobbies: [ 'Football', 'Coding', 'Painting', 'Yoga']
// }
