class Employee{
    constructor(name){
        this.name = name;
    }
    sayHello(){
        console.log(`Salut ${this.name}`);
    }
}
class Manager extends Employee{
    constructor(name, lname){
        super(name);
        this.lname = lname;
    }
    sayHello(){
        console.log(`Salut ${this.name} ${this.lname}`)
    }
}

const ang =  new Employee('Popescu');
ang.sayHello("Ionescu");
const man = new Manager("Dumitrescu","Dan");
man.sayHello("Ionescu");
