
class Student {
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get getMarks() {
        return [this.marks];
    }

    set setMarks(marks) {
        this.marks = marks;
        this.marks.push(marks);
    }
}

const vitalii = new Student('Національний Університет Львівська Політехніка', 4, 'Vitalii Tarasiuk');
console.log(vitalii.getInfo());
