//Concurrency is the process of executing multiple tasks at the same time
//asynchronous programming is the process of executing multiple tasks at the same time
//Callbacks : It is function which is passed as argument to another function
// function doSomething(callback){
//     callback();
// }
// function sayHi(){
//     console.log("Hello!!");
// }
// doSomething(sayHi);

// function judge(grade){
//     switch(true){
//         case grade == "A":
//         console.log("You got an amazing grade: ",grade);
//         break;
//         case grade == "B":
//         console.log("You got a good grade: ",grade);
//         break;
//         case grade == "C":
//         console.log("You got a normal grade: ",grade);
//         break;
//         default:
//         console.log("You got a bad grade: ",grade);
//         break;
//     }
// }
// // judge("A");
// function getGrade(score , callback){
//     let grade;
//     switch(true){
//         case score > 90:
//         grade = "A";
//         break;
//         case score > 80:
//         grade = "B";
//         break;
//         case score > 70:
//         grade = "C";
//         break;
//         default:
//         grade = "F";
//         break;
//     }
//     callback(grade);
// }
// getGrade(80,judge);
// getGrade(50,judge);
// getGrade(95,judge);

//Callbacks becomes become really valueable in asynchronous context.

// setInterval(encourage , 500);
//     function encourage(){
//         console.log("Keep coding");
//     }


//We call this callback hell or chirstmas tree problem 

//Promises 

//With promises we can handle asynchronous code in a more structured way
//This function needs the two parameter and these parameters are callbacks . We have called them resolve and reject
//When resolve is called the promise is resolved and when reject is called the promise is rejected

// let promise = new Promise((function(resolve,reject){
//     let a = 5;
//     let b = 10;
//     if(a<b){
//         resolve(a);
//     }else{
//         reject("too high");
//     }
// }));

// promise.then(
//     function(result){
//         console.log("Success: "+ result);
//     },
//     function(error){
//         console.log("Error: "+ error);
//     }
// );

const promise = new Promise((resolve,reject)=>{
    // resolve("Success!!");
    reject("Error!!");
}).then(value=>{
    console.log(value);
    return "WE";
})
.then(value=>{
    console.log(value);
    return "can";
})
.then(value=>{
    console.log(value);
    return "chain";
})
.then(value=>{
    console.log(value);
    return "promises";
})
.then(value=>{
    console.log(value);
})
.catch(value=>{
    console.log(value);
}); 

//Async and await 
// with async keyword,we can make a funv=c return a promise.this makes the promise nicer to read and look like synchcronus code.
// await keyword wait until the promise in down.it only works in asynchronus code.
// function saySomething(x){
//     return new Promise(resolve =>{
//         setTimeout(() =>{
//             resolve("something" +x);
//         }, 2000);
//     });
// }
// async function talk(x) {
//     const words= await saySomething(x);
//     console.log(words);
    
// }
// talk(2);
// talk(4);
// talk(8);

// EVENT LOOP
// js is a single threaded LockManager.a thread means a path of execution.the single executer is the event loop it executes the acrual Worker.
// even though js is single threaded,it doesnt mean that it cannot outsource tasks and wait for them to come back.it do things in miltithreaded manner

// CALL STACK AND CALLBACK QUEUE
// EVENT LOOP is a process that is constantly monitoring this call stack and ehenever there are tasks to do.
// console.log("hi there");
// add(4,5);
// console.log(add);

// function add(x,y){
//     return x+y;
// }

// async code goes to callback queue
// console.log("hi there");
// setTimeout(() => console.log("sorry i am late"), 1000);
// console.log(add(4,5));

// function add(x,y){
//     return x+y;
// }
// the settimeout task gets outsourced to the browser web api.when its done,this appears in a special place: the callback quue
// when the call stack is empty the event loop will check the callback quueue for work to do.
// console.log("hi there");
// setTimeout(() => console.log("sorry i am late"), 0);
// console.log(add(4,5));

// function add(x,y){
//     return x+y;
// }
