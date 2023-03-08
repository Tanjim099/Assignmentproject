const marks = [85, 76, 92, 88, 90];

let highestMarks = marks[0]; // assume the first student has the highest marks

for (let i = 1; i < marks.length; i++) {
  highestMarks = marks[i] > highestMarks ? marks[i] : highestMarks; // update the highestMarks variable
}

console.log(`The highest marks scored by a student in the class is: ${highestMarks}`);