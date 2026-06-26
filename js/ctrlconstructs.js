let age=prompt("enter your age");
if (age>=18){
    console.log("eligible");
}else{
    console.log("not eligible");
}

//2

let num=Number(prompt("enter a number"));
if (num%2==0){
    console.log("even");
}else{
    console.log("odd");
}

//3
if (num>0){
    console.log("positive");
} else if (num<0){
    console.log("negative");
} else {
    console.log("zero");
}

//4
let marks=Number(prompt("enter amrks"));
if (marks>=40){
    console.log("pass")
    if (marks>=80){
        console.log("distinction")
    }
}

//5
let grade='D';
switch(grade){
    case 'A':
        console.log("excellenet");break;
    case 'B':
        console.log("good");break;    
     case 'C':
        console.log("average");break; 
     default:
        console.log("INVALID");break; 
    
}


//6
let month = 100;
switch(month){
    case 1:
    case 12:
    case 2:
        document.writeln("winter");
        break;
    case 3:
    case 4:
    case 5:
    case 6:
        document.write("summer");
        break;
    case 7:
    case 8:
        document.write("rainy");
        break;
    case 9:
    case 10:
    case 10:
        document.write("spring");
       break;
    default:
        document.write("invalid season");   

}

//7
n=Number(prompt("number"));
let sum=0
for (let i=1;i>=n;i++){
    sum=sum+i;
} 
console.log(sum);

//8
let i=1;
tot=0;
while(i<=n){
    tot+=i;
}
console.log(tot);

//9
let pin;
do {
   pin=parseInt(prompt("enter pin"));
} while(n!==1234);
console.log("granted");


//10
let numbe=[1,2,3,4,5];
let numbers=numbe.forEach.numb(num=>console.log(numb));


let fruits=["apple","banana","cherry"];

for(let fruit of fruits){
    console.log(fruit);
}
let stu={name:"john",age:33};
for(let key in stu){
    console.log(key+"is"+stu[key]);
}