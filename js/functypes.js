//func declaration
function greet() {
    console.log("hello");
}
greet()


//FUNCTION EXPRESSION
let greet1 =function() {
    console.log("hi");
}
greet1()

//arrow function
let greet2 = () => console.log("arrow");
greet2();

//iife ->immediately invoked function expression also called anonymous function
//can run without being called
(function() {
    console.log("iife");
})();



function add(a,b,c) {
    let d = a+b+c;
    console.log(d);
}
add(2,3,4);

let addd = (a,b,c) => console.log(a+b+c);
addd(10,20,30);

let sum = function(a,b,c){
    console.log(a+b+c);
}
sum(10,20,20);

(function(a,b,c){
    console.log(a+b+c);
}(5,5,5));