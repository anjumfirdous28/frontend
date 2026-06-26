let arr=[10, 20, "bye"]
console.log(arr);  

let a= new Array(1,2,3,4)
console.log(a);

a.push(5)
a.unshift(0)
console.log(a)
a.pop()
a.shift()
console.log(a)

//splice and slice
// //splice(start,delete count,item1,item2..)
a.splice(1,2)
console.log(a);
//slice returns copy not inplace like splice
a.splice(1,0,300,20)
console.log(a)

//replace
a.splice(1,1,20)
console.log(a)

part=a.slice(1,4);
console.log(a);
console.log(part);

//
let fruits=["apple","banana","mango","pomegranate","berry"]
console.log(fruits.indexOf("mango"));
console.log(fruits.includes("mango"));
console.log(fruits.sort());
console.log(fruits.reverse())
fruits.forEach(fruit=>console.log(fruit));
let num=[1,2,3,4,5]
sq=num.map(n=>n**2);
console.log(sq);

even= num.filter(n=>n%2==0);
console.log(even);