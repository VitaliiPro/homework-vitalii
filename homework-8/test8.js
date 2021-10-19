
class Student {
    constructor (university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.studentMarks = [5, 4, 4, 5];
        this.studentPresent = true;
    }

    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
    }

    get marks() {
        if (this.studentPresent) {
            return this.studentMarks;
        } else {
            return null;
        }
    }

    set marks(mark) {
        if (!this.studentPresent) {
            return null;
        } else {
        this.studentMarks.push(mark);
        return this.studentMarks;
        }
    }

    getAverageMark() {
        return this.studentMarks.reduce((acc, item) => acc += item) / this.studentMarks.length;
    }

    dismiss() {
        this.studentPresent = false;
    }

    recover() {
        this.studentPresent = true;
    }
}


class BudgetStudent extends Student {
    constructor (university, course, fullName) {
        super(university, course, fullName);
        setInterval(() => this.getScholarship(), 30000)
    }


    getScholarship() {
        if (this.getAverageMark() >= 4 && this.studentPresent) {
            console.log('Ви отримали 1400 грн. стипендії');
        } 
    }
}

const vitalii = new Student('Національний Університет Львівська Політехніка', 4, 'Vitalii Tarasiuk');
console.log(vitalii)
console.log(vitalii.getInfo());
console.log(vitalii.marks);
vitalii.marks = 5;
console.log(`Середній бал ${vitalii.getAverageMark()}`);
// Виганяємо студента
vitalii.dismiss();
console.log(vitalii.marks);
// Повертаємо студента
vitalii.recover();
console.log(vitalii.marks);


