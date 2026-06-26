let Student={ 
    name:"anjum",
    age:22,

    study(){
        console.log("study");
    }
};
console.log(Student.name);
console.log(Student.age);
Student.study();

class Employee {
    name="abhi";
    age=23;

    study(){
        console.log("study hard")

    }
}
let s = new Employee();
console.log(s.name);
console.log(s.age);
s.study();



class Stu {
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    study(){
        console.log("study hard")

    }
}
let su = new Stu("ab",22);
console.log(su.name);
console.log(su.age);
su.study();
    

class ShoppingCart {
    constructor(){
        this.items=[];
    }
    addItem(item){
        this.items.push(item);
        console.log(item+"added to cart");
    }
    viewCart(){
        console.log("your cart contains:"+this.items.join(", "));
    }
}

const myCart=new ShoppingCart();
myCart.addItem("Laptop");
myCart.addItem("phone");
myCart.viewCart();