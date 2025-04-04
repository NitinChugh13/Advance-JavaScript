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
let addTwoNumbers = (x,y) =>  x+y ;
let resultArr = [];
for(let i=0;i<10;i++){
    let result = addTwoNumbers(i,2*i);
    resultArr.push(result);
}
console.log(resultArr);

