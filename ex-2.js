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
//วิธีที่ 1 ปรับฟอร์มของ studentScores ให้เหมือน scores ของ studentProfile
// studentScores = {scores :{ ...studentProfile.scores, ...studentScores }};
// let newStudentProfile = {
//   ...studentProfile,
//   ...studentScores,
// }
//วิธีที่ 2
let newStudentProfile = {
  ...studentProfile,
  scores: { ...studentProfile.scores, ...studentScores },
};
// console.log(studentScores);
console.log(newStudentProfile);
