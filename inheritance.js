class Parent{
    constructor(){
        this.fatherName = 'Schwerznegger';
    }
}
class Child extends Parent{
    constructor(name){
        super();//must use korte hbe
        this.name = name;
    }
    getFullName(){
        return `${this.name} ${this.fatherName}`;
    }
}
const baby = new Child('Arnold');
const baby2 = new Child('Tom');
console.log(baby.getFullName());
console.log(baby);
console.log(baby2);