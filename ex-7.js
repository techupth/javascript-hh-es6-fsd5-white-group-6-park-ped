// Exercise #7: Optional Chaining

// Variable employee1 เป็น Object ที่มี Property ดังนี้

// name คือ Property ที่มี Value เป็น String ที่เก็บชื่อของพนักงาน
// age คือ Property ที่มี Value เป็น Number ที่เก็บอายุของพนักงาน
// ให้แก้ไขโค้ดในโจทย์ให้มีผลลัพธ์ดังนี้

const employee1 = {
  name: "John",
  age: 20,
};

const result1 = employee1.scores?.english;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

const result2 = employee2.scores?.english ?? "English score is not defined";

// เมื่อทำการ console.log() ตัว result1 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น undefined
// เมื่อทำการ console.log() ตัว result2 จะได้ผลลัพธ์แสดงทางหน้าจอเป็น English score is not defined
console.log(result1);
console.log(result2);
