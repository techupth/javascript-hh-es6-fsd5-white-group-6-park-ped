// Exercise #2 : Merging Nested Object

// Variable studentProfile เป็น Object ที่มี Property ดังนี้
// name คือ Property ที่มี Value เป็น String ที่เก็บชื่อของนักเรียน
// age คือ Property ที่มี Value เป็น Number ที่เก็บอายุของนักเรียน
// scores คือ Property ที่มี Value เป็น Object ที่คะแนนในแต่ละวิชาของนักเรียนในรูปแบบ Key - Value
// เก็บข้อมูลคะแนนแต่ละวิชาของนักเรียนในรูปแบบ Key เป็นชื่อวิชา และ Value เป็นคะแนนของวิชานั้น
// ให้สร้าง Variable ชื่อ newStudentProfile เป็น Object มีรายละเอียดดังนี้

// Property ของ Object newStudentProfile จะต้องมี Property ของ studentProfile ทั้งหมด
// ใน Property scores ของ Object newStudentProfile จะมี Value ของ Object studentScores เพิ่มเข้าไปด้วยโดยใช้ Spread Operator
// เมื่อทำการแสดงผลค่าของ newStudentProfile ออกมาดูทางหน้าจอด้วย console.log() จะต้องได้ผลลัพธ์ออกมาเป็นแบบนี้

let studentProfile = {
  name: "John",
  age: 20,
  scores: {
    thai: 40,
  },
};

let studentScores = {
  math: 30,
  english: 70,
  tech: 100,
};

const newStudentProfile = {
  ...studentProfile,
  scores: { ...studentProfile.scores, ...studentScores },
};
console.log(newStudentProfile);

//output****
// {
//   name: 'John',
//   age: 20,
//   scores: { thai: 40, math: 30, english: 70, tech: 100 }
// }
