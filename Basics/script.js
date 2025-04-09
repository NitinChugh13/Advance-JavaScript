// function sayHello(){
//     let you = prompt("What is your Name ?");
//     console.log("Hello", you+"!");
// }
// sayHello();

// let varContaingFunction = function(){
//     let varInFunction = "I am in a function";
//     console.log("Hi there",varInFunction);
// };
// varContaingFunction();
// function tester(para1,para2){
//     return para1+" "+para2
// };
// const arg1 = "Nitin";
// const arg2 = "Chugh";
// console.log(tester(arg1,arg2));

// function addTwoNum(x,y){  
//     x = parseInt(prompt("Enter a number"));
//     y = parseInt(prompt("Enter a number"));

//     console.log(x+y);
// }
// addTwoNum(5,3);

// let arr=[];
// arr.push("arrangement");
// console.log(arr);

//default arguments are the trailing elements (last argument)
// function addTwoNum(x=20,y=30){  
//     console.log(x+y);
// }
// addTwoNum();
// addTwoNum(6,6);
// addTwoNum(10);
// addTwoNum(1,2,3,4);//it will only consider 1,2 

//Arrow Function
// let doingstuff = x => console.log(x);//no bracket is required for single variable
// doingstuff("Great!!");

// let add = (x,y) =>  console.log(x+y);
// add(6,7);

// const arr = ["squirrel","alpaca","buddy"];
// arr.forEach(e => console.log(e));

//Spread and Rest operators 
// let spread =["so","much","fun"];
// let message = ["javascript","is",spread,"and","very","powerful"];//print with square brackets 
// let message1 = ["javascript","is",...spread,"and","very","powerful"];//print without square brackets 

// console.log(message);
// console.log(message1);

//Spread is used during function at te time of invoke 
// function add(x,y){
//     console.log(x+y);
// }
// let arr =[5,9];
// add(...arr);

// function addFourNumbers(x,y,z,w){
//     console.log(x+y+z+w);
// }
// let arr =[5,9];
// let brr =[6,7];
// addFourNumbers(...arr,...brr);

//Rest operator is used during function definition 
// function someFunction(para1 , ...para2){
//     console.log(para1,para2);
// }
// someFunction("hi","there!","how are you??");//hi [ 'there!', 'how are you??' ]

//Returning Function Values 
// let addTwoNumbers = (x,y) =>  x+y ;
// console.log(addTwoNumbers(12,15));
// let resultArr = [];
// for(let i=0;i<10;i++){
//     let result = addTwoNumbers(i,2*i);
//     resultArr.push(result);
// }
// console.log(resultArr);

// let addTwoNumbers = (x,y) =>  {
//     console.log("Adding...");
//     return x+y;
// }
// console.log(addTwoNumbers(12,15));

//Variable scope in function 
//let and const are blocked scope 
// function testAvailability(x){
//     console.log("Available Here",x);
// }
// testAvailability("Hi");
// console.log("Not Available ",x);//reference error


// function testAvailability(){
//     let y ="Logical Variable";
//     console.log("Available Here",y);
// }
// testAvailability();
// console.log("Not Available ",y);//reference error

// function testAvailability(){
//     let y = "I will Return";
//     console.log("Available here",y);
//     return y;
// }
// let z = testAvailability();
// console.log(z);
// console.log(y);//reference error 


// function doingStuff(){
//     if(true){
//         var x = "local";
//     }
//     console.log(x);
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         let x = "local";
//     }
//     console.log(x);
// }
// doingStuff();//reference error

//we can access the variable before initialization using var
// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x = "local";
//     }
// }
// doingStuff();

// function doingStuff(){
//     if(true){
//         console.log(x);
//         let x = "local";
//     }
// }
// doingStuff();//reference error 

// function doingStuff(){
//     if(true){
//         const x = "local";
//     }
//     console.log(x);//reference error
// }

//Global Scope 
//GLobal variables should not be formed when needed necessirely
//occupies the memory permanently 
//in best practices global variables are not used 
// let globalVariable = "Accessible Everywhere";
// console.log("Outside Function: ",globalVariable);

// function creatingNewScope(x){
//     console.log("Acessing global variable in function: ",globalVariable);

// }
// creatingNewScope("Some parameter");
// console.log("STill available:",globalVariable);

//global variable can be hide by the local variable
let x = "Global";
function doingStuff() {
    let x = " local";
    console.log(x);
}
doingStuff();
console.log(x);