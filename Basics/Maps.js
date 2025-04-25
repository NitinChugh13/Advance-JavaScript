//Javascript Maps 
//Maps are used to store key value pairs 
// in objects the key can be of type only string or symbol
//But in maps the key can be of any datatype 
//Map is a predefined class 
//Create a map
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",400]
// ]);
// fruits.set("apples",100);
// console.log(fruits);
//The set() Method 
//we can set and reset the values of the map attributes 
// const fruits = new Map();
// fruits.set("Apple",500);
// fruits.set("Banana",300);
// fruits.set("Orange",400);
// console.log(fruits);
// fruits.set("Apple",1000);
// console.log(fruits);
// //The get() method 
// console.log(fruits.get("Apple"));
// console.log(fruits.size);
// console.log(fruits.delete("Apple"));
// fruits.clear();
// console.log(fruits);
// console.log(fruits.has("Apple"));
//Difference between Object and map 
//Object is a collection of key value pairs 
//Map is a collection of key value pairs 
//Object is used to store data in key value pairs 
//Map is used to store data in key value pairs
//object do not have  the size property and maps has size property 
//Objects have default kkeys and maps do not have default keys 


//JS Maps Methods 
//Map.set()=>new insertion and reset 
//Map.typeof()
//Map.instanceof()
//Map.get()
//Map.size()
//Map.delete()
//Map.clear()=>to clear the map
//Map.has()=>returns true or false and checkks the membership 
//Map.forEach()=>iterates over the map
//Map.entries()=>returns an array of key value pairs
//Map.keys()=>returns an array of keys
//Map.values()=>returns an array of values
// let text = "";
// fruits.forEach((value,key)=>{
//     text += key+" "+value+" ";
// });
// console.log(text);
// console.log(typeof(text));
// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// }
// console.log(text);
// console.log(typeof(text));
// for(const x of fruits.keys()){
//     text += x;
// }
// console.log(text);
// console.log(typeof(text));
// for(const x of fruits.values()){
//     text += x;
// }
// console.log(text);
// console.log(typeof(text));
//Sum of all va;ues 
// let sum = 0;
// for(const x of fruits.values()){
//     sum += x;
// }
// console.log(sum);
// console.log(typeof(sum));

//create objects 
// const apples = {name:"Apples"}; 
// const bananas = {name:"Bananas"};       
// const oranges = {name:"Oranges"};
// //Create map 
// const fruits = new Map();
// //Add new elements to map
// fruits.set(apples,500);
// fruits.set(bananas,300); 
// fruits.set(oranges,400);
// console.log(fruits);
// console.log(fruits.get("apples"));   

//Java Script Map.groupBy(): groupBy() method is used to group the elements of an array based on a specific property.
// const fruits = [
//     { name: "apple", quantity: 1000 },
//     { name: "banana", quantity: 5 },
//     { name: "orange", quantity: 8 },
//     { name: "apple", quantity: 1500 },
//     { name: "banana", quantity: 300 },
//     { name: "orange", quantity: 1200 },
// ];
// // CAll back function to group elements
// function myCallback({quantity}) {
//     return quantity>200?"ok":"low";
// }
// //group by Quantity 
// const result = Map.groupBy(fruits,myCallback);
// console.log(result);

//JavaScript Destructuring
//destructringassignment syntax unpack object properties into variables:
//let{firstName,lastName} = person;
//it can also unpackk arrays
// const person = {
//     firstName:"Nitin",
//     lastName:"Chugh",
//     age:20
// };
//Destructuring 
// let {firstName,lastName,age} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
//order of the properties do not matter but keys should be same 
//changing order
// let{lastName,firstName,age} = person;  
// console.log(firstName); 
// console.log(lastName);
// console.log(age);   
//Note : Destructuring is not destructive .
//It does not change the original object
//We can also add the default argument that are not present in the object 
// let{firstName,lastName,age,country="India"} = person;
// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(country);

//Object property Alias 
// let{lastName:name} = person;    
// console.log(name);
// console.log(person.lastName);

//String Destructuring 
//used to unpack the string 
// let name  = "GurukulTheSchools";
//destructng 
// let[a1,a2,a3,a4,a5] = name;
// console.log(name);
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);
//create array 
// const fruits = ["Bananas","Oranges","Apples","Mangoes"];
//destructring 
// let[fruit1,fruit2]=fruits;
// console.log(fruit1);
// console.log(fruit2);
//Skkipping the array values 
// let[fruit1,,,fruit2] = fruits;
// console.log(fruit1);//bananas
// console.log(fruit2);//Mangoes after sipping 2 as there are 3 commas 

//Array position values 
// let{[0]:fruit1 , [1]:fruit2} = fruits;
// console.log(fruit1);
// console.log(fruit2);

// The rest property 
// const numbers = [10,20,30,40,50,60,70];
// //destructuring 
// const[a,b, ...rest] = numbers ;
// console.log(a);
// console.log(b);

//Destructuring maps
// const fruits = new Map([
//     ["apples",500],
//     ["bananas",300],
//     ["oranges",200],
// ]);
// //destructuring
// let text = "";
// for(const[key,value] of fruits){
//     text+=key+" "+"is"+" "+value;
// }
// console.log(text);
// let firstName = "John";
// let lastName = "Doe";
// //Destructring 
// [firstName,lastName] = [lastName,firstNmae];

//Exponential operator 
// let x  = 5;
// let z = x**2;
// console.log(z);

//Java Script array includes()

// const fruits = ["Bananas","Oranges","Apples","Mangoes"];
// // console.log(fruits.includes("Apples"));//true
// //changing position of sorting
// console.log(fruits.includes("Bananas",3));//false

//The include()method is case sensitive 
//synchronous programming leads to the blocking of whole program if a function fails 

//Trailing comma also known as the dandling or terminal comma is a comma that appears at the end of an array literal or an object literal.
//Trailing commas are optional and do not affect the behavior of the array or object literal.
//trailing commas have been legal in JavaScript since version 2015

//Using trailing commas in array literals

// const arr = [
//     "one",
//     "two",
//     "three",
// ];

//if more than one trailing comas are created then it leads to undefined values in the array
// const arr = [
//     "one",
//     "two",
//     "three",,,
// ];
// console.log(arr);
// console.log(arr.length);

// const sparseArray  = [1,,,4,5,,];
// console.log(sparseArray);
// console.log(sparseArray.length);

//Concept of trailing commas in Object 
// const object = {
//     firstName:"Nitin",
//     lastName:"Chugh",   
//     age : 20,
// }

// const person ={
//     firstName:"Nitin",
//     ,
//     lastName:"Chugh",   
//     age : 20,
// }It will give syntax error unlike array 

function createRectangle(
    w,
    h,
    d,
){/*...*/}

