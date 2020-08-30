class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'gachigacha';
    }
}

const student1 = new Student(1, 'mostafa');
console.log(student1.id, student1.name);
const student2 = new Student(2, 'rumi');
console.log(student1, student2);