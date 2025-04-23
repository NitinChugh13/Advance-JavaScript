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
const fruits = new Map();
fruits.set("Apple",500);
fruits.set("Banana",300);
fruits.set("Orange",400);
// console.log(fruits);
// fruits.set("Apple",1000);
// console.log(fruits);
// //The get() method 
// console.log(fruits.get("Apple"));
// console.log(fruits.size);
// console.log(fruits.delete("Apple"));
// fruits.clear();
console.log(fruits);
console.log(fruits.has("Apple"));
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
let text = "";
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
let sum = 0;
for(const x of fruits.values()){
    sum += x;
}
console.log(sum);
console.log(typeof(sum));



