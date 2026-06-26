 function add() {
    let c = 10 + 20;
    console.log(c);
 }
 add()

 function sq() {
    let num = 3;
    document.writeln(num*num);
 }
 sq();

 function circle() {
    const pi = 3.14;
    let area = pi * 4 * 4;
    document.write(area);
    
    let perimeter = 4 * pi * 4 *4;
    document.write(perimeter);
      
}
 circle();

 function si() {
    let p = 100;
    let t = 2;
    let r = 4;
    let i = (p* t * r) /100;
    document.write(i); 
 }
 si();

 function rec() {
    let l=10;
    let w=20;
    let area = l*w;
    document.write(area);
 }
 rec();

 function rec2(l,w){
    area=l*w;
    return area;

 }
 document.write(area(10,20));
   
function rec3() {
    let l=10;
    let w=20;
    let area = l*w;
    return area;
} 
document.write(rec3());

function rec2(l,w){
    area=l*w;
    document.write(area);

 }
 area(10,20);
