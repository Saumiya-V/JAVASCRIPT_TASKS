const arr=["India","USA","Australia","France","London"];
arr.push("China","Korea");
arr.pop()
arr.shift()
arr.unshift("Isreal")
arr.includes("France")
arr.indexOf("China")
console.log(arr)

// Sort an array in ascending and descending order using .sort().
arr.sort()
console.log(arr)
arr.reverse()
console.log(arr)

// Use .map() to create a new array that doubles each number in an array.
let arr2=[2,4,6,8,10,12,14]
let resArr=arr2.map((num)=>num*2)
console.log(resArr)

// Use .filter() to return only even numbers from an array.
let arr3=[12,45,67,34,90,23,66,78]
let result=arr3.filter(even)
function even(num){
  return num%2===0;
}
console.log(result)

// Use .reduce() to find the sum of all numbers in an array.
let sum=arr3.reduce((acc,curr)=>{
 return  acc+=curr;
})
console.log(sum)

// Remove duplicates from an array using .filter() and .indexOf().
let arr4=[21,56,78,90,34,21,56,98,90,34];
let arrUnique=arr4.filter((item,index)=>{
 return arr4.indexOf(item)===index
})
console.log(arrUnique)

// Flatten a nested array using .flat().
// let arrNest=[[1,2,3],[5,6,7],[8,9,10]];
// let flatArr=arrNest.flat()
// console.log(flatArr)


//  Find the maximum and minimum number in an array using .reduce().
let max=arr4.reduce((acc,curr)=>{
  if(curr>acc){
    acc=curr;
  }
  return acc
})
console.log(max)

let min=arr4.reduce((acc,curr)=>{
  if(curr<acc){
    acc=curr
  }
  return acc
})
console.log(min)

//  Use .some() and .every() to check conditions in an array.
const arrElement=[23,25,53,59,21,35,8,5,3,8]
let allover18=arrElement.some(myFunc);
function myFunc(value,index,arr){
  return value>18
}
console.log(allover18)

//  Use .find() to get the first element greater than 50 in an array.
let val=arr4.find(myFunction)
function myFunction(value){
  return value>50
}
console.log(val)

//  Use .findIndex() to get the index of the first number divisible by 5.
let firstIndex=arr4.findIndex(func)
function func(value){
  return value%5===0
}
console.log(firstIndex)

//  Combine two arrays using .concat() and [...spread].
const arra1=["Karl Max","Lenin"]
const arra2=["Castro","Che guavara"]
console.log(arra1.concat(arra2))
arra1.push(...arra2)
console.log(arra1)

//  Use .slice() to extract part of an array.
let arrSlice=arra1.slice(0,2)
console.log(arrSlice)

// Use .splice() to modify an array by removing or inserting elements.
let arra=["banana","goa","apple","guava"]
let splArra=arra.splice(0,2,"kiwi")
console.log(splArra)
console.log(arra)

//  Convert an array into a string using .join().
let array1=["Hello","India","this","is","PM Modi","speaking"]
const res=array1.join(" ")
console.log(res)

//  Group an array of objects by a property (e.g., group users by age).
let student=[{name:"Meena",age:23},{name:"Tina",age:18},{name:"Nivi",age:23},{name:"Divya",age:18}]

let groupByAge=student.reduce((acc,stud)=>{
     let key =stud.age;
     if(!acc[key]){
      acc[key]=[]
     }
     acc[key].push(stud)
     return acc
},{})
console.log(groupByAge)

//  Sort an array of objects based on a numeric or string property.
let op=student.sort((a,b)=>a.age-b.age)
console.log(op)

let sorted=student.sort((a,b)=>a.name.localeCompare(b.name))
console.log(sorted)

//  Count the occurrences of each element in an array using .reduce().
let arra3=[23,45,67,89,90,23,67,89]
let occurCount=arra3.reduce((acc,curr)=>{
  acc[curr]=(acc[curr] || 0)+1
  return acc
},{})
console.log(occurCount)

//  Create a function that removes falsy values (false, 0, null, "", undefined, NaN).

let arra4=[0,1,false,null,"",undefined,3];

function remFalse(arr){
  return arra4.filter(Boolean)
}

console.log(remFalse(arra4))
