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
//functions on a class are called methods
//when defining these methods , we dont use the function keyword 
// class Person{
//         constructor(firstname,lastname){
//             this.firstname = firstname;
//             this.lastname = lastname;
//         }
//         greet(){
//             console.log("Hello "+this.firstname+" "+this.lastname);
//         }
//         compliment(name,oject){
//             return "Thats a nice "+oject+" "+name;
//         }
//     }
//     let me = new Person("Nitin","Chugh");
//     // console.log(me.firstname);
//     // console.log(me.lastname);
//     // console.log(me);
//     me.greet();
//     console.log(me.compliment("Javascript","dog"));
//  class encapsulates the two things the data and the functions 
//  Abstraction is defined as the process of hiding the internal details and showing only the essential features of an object

//Properties 
//proprties are sometimes called fields,hold data for the class
//it is not possible to access the properties directly , but can be accessed by methods

// class person{
//     #firstname;//to make a variable private 
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
// }
// let p = new person("Nitin","Chugh");
// console.log(p.firstname);//undefined 
// console.log(p.#firstname);//error

// class person{
//     #firstname;//to make a variable private 
//     #lastname;
//     constructor(firstname,lastname){
//         if(firstname.startsWith("N")){
//             this.#firstname = firstname;
//     }
//     else{
//         this.#firstname = "M."+firstname;
//     }
//     this.#lastname = lastname;
// }
//   getfullname(){
//     return this.#firstname+" "+this.#lastname;
//   }
// }
// let p = new person("Bhumi","Chugh");
// console.log(p.getfullname());


//Getters and Setters 
//private members are always accessed through methods 
//public members can be asscessed directly by objects 
//class can have both public and private members

// class person{
//     #firstname;//to make a variable private 
//     #lastname;
//     constructor(firstname,lastname){
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     get firstname(){
//         return this.#firstname;
//     }
//     set firstname(firstName){
//         this.#firstname = firstName;
//     }
//     get lastname(){
//         return this.#lastname;
//     }
//     set lastname(lastName){
//         this.#lastname = lastName;
//     }
// }
// let p = new person("Nitin","Chugh");
// console.log(p.firstname);
// console.log(p.lastname);
// p.firstname = "Bhumi";
// console.log(p.firstname);
// p.lastname = "Chugh";
// console.log(p.lastname);

//Inheritance 
//class can inherit properties and methods from another class
//class can have only one parent class
//type of inheritance -> single , multiple , hierarchical , multilevel , hybrid  
//classes can have the child classes that can be inherited from the parent classes
//moving from generalized to specialized concept in the inheritance of classes 
// class Vechicle{
//     constructor(color,currentSpeed ,maxSpeed){
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;   
//     }
//     move(){
//         console.log("moving at",this.currentSpeed); 
//     }
//     accelerate(amount){
//         this.currentSpeed += amount;
//     }
// }
// class MotorCycle extends Vechicle{
//     constructor(color,currentSpeed ,maxSpeed,fuel){
//         super(color,currentSpeed ,maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie(){
//         console.log("Driving on one wheel");
//     }
// }
// let motor = new MotorCycle("Red",100,200,"Petrol");
// console.log(motor.color);
// console.log(motor.fuel);
// motor.accelerate(50);   
// motor.move();
//super keyword refers to the parent class


//Prototypes are used to add new properties and methods to objects
class Person{
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
    greet(){
        console.log("Hi,There!!");
    }
}
Person.prototype.getFullName = function(){
    return this.firstname+" "+this.lastname;
};
Person.prototype.favColor = "Blue";
let p = new Person("Nitin","Chugh");
console.log(p.getFullName());
console.log(p.favColor);
