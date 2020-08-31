 class Parent{
     constructor(){
         this.FatherName = "Shelim";
     }
 }
 class Son extends Parent{
     constructor(name){
         super();
         this.name = name;
     }
     getFullName(){
         console.log(`${this.name} ${this.FatherName}`);
     }//reused of parent class method or data
 }

 const Son1 = new Son("Mostafa");
 Son1.getFullName();
