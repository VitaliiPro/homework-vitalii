const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

//#1

const studentsInPairs = () => {
    const maleArr = [];
    const femaleArr = [];
    const result = [];

    for(student of students) {
        if (student.endsWith('а')) {
            femaleArr.push(student);
        } else {
            maleArr.push(student);
        }
    };
    
    for (let i = 0; i < maleArr.length; i++) {
        result.push([maleArr[i], femaleArr[i]]);
    }

    return result;
};

//#2

const getProjectThems = (teams, themes) => {
    return teams.map((team, i) => {
        const theme = (themes.length > i) ? themes[i] : themes[0];
        return [team.join(' і '), theme];
    }); 
};

//#3

const ratingStudents = (students, marks) => {
    let result = [];
    for(let i = 0; i < students.length; i++){
        result.push([students[i], marks[i]]);
    };
    return result;
};

//#4
const randomMark = () => Math.floor(Math.random() * 5) + 1;
const getMarkPairs  = (studentsPairsWithThemes) => {
    const result = [];
    for(let i = 0; i < studentsPairsWithThemes.length; i++){
        result.push(studentsPairsWithThemes[i].concat(randomMark()));
    };
    return result;
};


//#1
const teams = studentsInPairs();
//#2
const studentsPairsWithThemes = getProjectThems(teams, themes);
//#3
const rating = ratingStudents(students, marks);
//#4 
const marksPairs = getMarkPairs(studentsPairsWithThemes);

console.log(studentsInPairs());
console.log(getProjectThems(teams, themes));
console.log(ratingStudents(students, marks));
console.log(getMarkPairs(studentsPairsWithThemes));