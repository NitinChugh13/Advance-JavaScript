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
