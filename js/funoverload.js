//function with same name and different parameter
function add () {
    console.log(10+20);

}

function add(a) {
    console.log(a+10);
}

function add(a,b){
    console.log(a+b);
}

add();
add(10);
add(10,20);

//all above does not support function overloading..so..below
function add(...numbers){
    let sum =0;
    for (let num of numbers){
        sum+=num;
    }
    return sum;
} 
// ... -> 1d array   spread operator to ovvercome functio overloading..also called rest operator
console.log(add(10));
console.log(add(20,10))
console.log(add(10,20,30));

//es6 features
//string literal
//spread operator