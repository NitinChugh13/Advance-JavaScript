//CLASSES IN JS 
//Classes and Objects 
//Classes are a template for creating objects 
//Objects are instances of a class 
//Classes are used to create objects that have similar properties and methods
//Elements of a class -> constructor
// let dog = {
//     name:"Javascript",
//     weight:10,
//     color:"white",
//     breed:"Golden Retriever",
// };

// class ClassName {
//     constructor(prop1,prop2){
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//   }
// }
// let obj = new ClassName("Nitin","Chugh");
// console.log(obj.prop1);
// console.log(obj.prop2);
// let obj1 =new ClassName("Hello","World");
// console.log(obj1.prop1);
// console.log(obj1.prop2);
//The this kkeyword refers to the object it belongs to , so it is the first property of instance of the class 

// class Dog  {
//    constructor(dogName,weight,color,breed){
//        this.dogName = dogName;
//        this.weight = weight;
//        this.color = color;
//        this.breed = breed;
//    }
// }
// let p = new Dog("Javascript",10,"white","Golden Retriever");
// console.log(p.dogName);
// console.log(p);
// console.log(p.dogName, " is a ",p.breed);

//There can only be a single constructor function in a class
//start the class name with the capital letter 
// class Person{
//     constructor(firstname,lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let me = new Person("Nitin","Chugh");
// console.log(me.firstname);
// console.log(me.lastname);
// console.log(me);

//Elements of a class -> Methods
//when defining these methods , we dont use the function keyword 
class Person{
        constructor(firstname,lastname){
            this.firstname = firstname;
            this.lastname = lastname;
        }
        greet(){
            console.log("Hello "+this.firstname+" "+this.lastname);
        }
        compliment(name,oject){
            return "Thats a nice "+oject+" "+name;
        }
    }
    let me = new Person("Nitin","Chugh");
    // console.log(me.firstname);
    // console.log(me.lastname);
    // console.log(me);
    me.greet();
    console.log(me.compliment("Javascript","dog"));