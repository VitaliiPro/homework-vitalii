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

function getSubjects(students) {
    const subName = Object.keys(students.subjects);
    const result = subName.map((letter) => (letter.charAt(0).toUpperCase() + letter.slice(1)).replaceAll('_', ' '));
    return result;
};

console.log(getSubjects(students[1]));

//#2

function getAverageMark (students) {
    const assessments = Object.values(students.subjects);
    const combinedArrays = assessments[0].concat(assessments[1], assessments[2]);
    const sumAssessments = combinedArrays.reduce((previousValue, currentValue) => previousValue + currentValue);
    return (sumAssessments / combinedArrays.length).toFixed(2);
};

console.log(getAverageMark(students[0]));

//#3 

function getStudentInfo(students) {
  return {
    course: students.course,
    name: students.name,
    averageMark: getAverageMark(students)
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