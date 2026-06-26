class Parent {
    constructor(name){
        this.name=name;

    }
    marry(){
        console.log("marry at 27");
    }
}
class child extends Parent{
    constructor(name,age){
        super(name);
        this.age=age;
    }
    marry(){
        super.marry();
        console.log("marry at 28");

    }
}
let c=new child("harry",25);
console.log(c.name);
console.log(c.age);
c.marry();