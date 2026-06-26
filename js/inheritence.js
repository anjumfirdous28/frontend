 class Employee{
    constructor(name,age,role){
        this.name=name;
        this.age=age;
        this.role=role;
    }
    display(){
        console.log(this.name);
        console.log(this.age);
    }
    desig(){
        console.log(this.role);
    }
 }
 class Developer extends Employee{
    work(){
        console.log("coding");
    }
    desig(){
        console.log("qa")
    }
 }
 class Tester extends Employee{
    work(){
        console.log("Debugging");
    }
    desig(){
        console.log("SDE")
    }
 }
let d =new Developer("ab",22,"python developer");
d.display();
d.desig();
d.work();

let t =new Tester("abc",24,"tester developer");
t.display();
t.desig( );
t .work();

class Animal {
    eat() {
        console.log("Eating");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Barking");
    }
}
d = new Dog();
d.eat();
d.bark(); 

//multilevel
class Animal {
    eat(){
        console.log("eating");
    }

}
class Dog extends Animal{
    bark(){
        console.log("barking");
    }
}
class Puppy extends Dog{
    laugh(){
        console.log("laughing");
    }
}
p=new Puppy();
p.bark();
p.eat();
p.laugh();

//hieracial
//one parent many child keeping animal as parent
//one as dog above
class Cat extends Animal {
    meow(){
        console.log("meowing");

    }
}
c=new Cat();
c.meow();
c.eat();
d=new Dog();
d.eat();
//multiple
//one after other parent


//hybrid
//two to more types of inheritence
class Fruit {
    yummy(){
        console.log("yummy");
    }
}
class Mango extends Fruit {
    summer(){
        console.log("summer fruit");
    }
}
class Strawberry extends Fruit{
    winter(){
        console.log("winter fruit");
    }
}
class Raw extends Mango{
    kacha(){
        console.log("kacha mango");
    }
} 
m=new Mango();
s=new Strawberry();
r=new Raw();
m.yummy();
m.summer();
s.yummy();
s.winter();
r.yummy();
r.summer();
r.kacha();

//fruit to mango-single level
//fruit to mango to raw-multilevel
//fruit to strawberry and mango-hierarchial
 