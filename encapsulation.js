class Student{
    constructor(){
        let name, marks;//not directly calling
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;//this.name is class variable
    }

    getMarks(){
        return this.marks;
    }
    setMarks(marks){
        this.marks = marks;
    }
}
const std1 = new Student();
std1.setName('mostafa');
std1.setMarks(20);

console.log(std1.getName(),std1.getMarks());