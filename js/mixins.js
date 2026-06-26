const fly={
    fly(){
        console.log("fly");
    }
};
const swim={
    swim(){
        console.log("swim");

    }
};
class Duck{}
//mixins also called inheritence protyping to overcome multiple inheritence
Object.assign(Duck.prototype,fly,swim)
let d=new Duck();
d.swim();
d.fly();


