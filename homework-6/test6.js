const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];



// #1

function getSubjects(student) {
    const subjects = Object.keys(student.subjects);
    const result = subjects.map((subject) => (subject.charAt(0).toUpperCase() + subject.slice(1).toLowerCase()).replaceAll('_', ' '));
    return result;
};

console.log(getSubjects(students[0]));

//#2

function getAverageMark (student) {
    const marks = [];
    for (let key in student.subjects) {
      const subjMarks = student.subjects[key];
      marks.push(...subjMarks);
    }
    const sumAssessments = marks.reduce((previousValue, currentValue) => previousValue + currentValue);
    return (sumAssessments / marks.length).toFixed(2);
};

console.log(getAverageMark(students[0]));

//#3 

function getStudentInfo(student) {
  return {
    course: student.course,
    name: student.name,
    averageMark: getAverageMark(student)
  }
};

console.log(getStudentInfo(students[1]));

//#4

function getStudentsNames(students) {
  return students.map(value => value.name).sort();
};

console.log(getStudentsNames(students));

//#5

function getBestStudent(students) {
  return students.reduce((prev, cur) => getAverageMark(prev) > getAverageMark(cur) ? prev : cur).name;
};
console.log(getBestStudent(students));

//#6

function calculateWordLetters(word) {
  const result = {};
  word.split('').map(value => !result[value] ? result[value] = 1 : result[value]++);
  return result
};

console.log(calculateWordLetters('тест'));