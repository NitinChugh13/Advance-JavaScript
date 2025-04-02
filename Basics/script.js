function sayHello(){
    let you = prompt("What is your Name ?");
    console.log("Hello", you+"!");
}
sayHello();
let varContaingFunction = function(){
    let varInFunction = "I am in a function";
    console.log("Hi there",varInFunction);
};
varContaingFunction();
function tester(para1,para2){
    return para1+""+para2
};
const arg1 = "argument1";
const arg2 = "argument2";
console.log(tester(arg1,arg2));
let x = parseInt(prompt("Enter a number"));
let y = parseInt(prompt("Enter a number"));
function addTwoNum(x,y){  
    console.log(x+y);
}
addTwoNum(x,y);