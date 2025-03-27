// Create an object representing a person with name, age, and city properties.
let person={}

person.firstName="Saumiya"
person.lastName="Venkatesh"
person.age=23
person.degree="BE"
console.log(person)

// Access and modify its properties using dot notation and bracket notation.
console.log(person.firstName)
console.log(person["age"])
person["degree"]="BE CSE"
console.log(person["degree"])

//  Check if a property exists in an object using the hasOwnProperty() method.
console.log(person.hasOwnProperty("age"))


//  Use Object.keys() to get all property names of an object.
console.log(Object.keys(person))

//  Use Object.values() to get all values of an object.
console.log(Object.values(person))

//  Use Object.entries() to convert an object into an array of [key, value] pairs.
console.log(Object.entries(person))

// merge an object using Object.assign() or the spread operator { ...obj }.
let vehicle={
  variety:"Car",
  model:"Hyundai",
  type:"petrol"
}

let prop={
  color:"red",
  mileage:"120km/hr"
}

let merge=Object.assign(vehicle,prop)
console.log(merge)

// Modify the cloned object without affecting the original.
let student = { name: "Saumiya", age: 23 };
let clone1 = Object.assign({}, student);
let clone2 = { ...student };
clone1.age = 30;
clone2.name = "Venkatesh";

console.log(person);  
console.log(clone1); 
console.log(clone2);  

//  Loop through an object using for...in and Object.entries().
// Print each key-value pair.
let person = { name: "Saumiya", age: 23, city: "Bangalore" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
Object.entries(person).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// Try modifying it and observe the result.

//  Seal an object using Object.seal().

// Try adding/removing/modifying properties.

// Convert an array of objects into a single object using reduce().
let users = [{ id: 1, name: "A" }, { id: 2, name: "B" }];

let userObj = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {});

console.log(userObj);  


// Remove properties from an object dynamically based on a condition.
let students = { name: "John", age: 20, grade: "B", city: "Delhi" };

// Remove properties with string values
Object.keys(students).forEach(key => {
    if (typeof student[key] === "string") {
        delete student[key];
    }
});

console.log(student);  


