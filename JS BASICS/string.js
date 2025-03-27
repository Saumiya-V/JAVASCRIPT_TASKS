// Write a JavaScript function that extracts the first 5 characters from the string "JavaScript is awesome!" using slice().

function subString(str){
  let subStr=str.slice(0,5);
  console.log(subStr);
}
subString("Javascript is awesome")


// Given the string "Frontend Development", extract "Development" using negative indices in slice().

function subStr(str){
  let result=str.slice(-11)
  console.log(result)
}
subStr("Frontend Development")


// Extract the word "great" from the string "Coding is great!" using slice().

function middle(){
  let str="Coding is great"
  let subStr=str.slice(10)
  console.log(subStr)
}
middle()

// Write a function that takes a string and two numbers (start and end) as arguments and returns the sliced substring.

function DynamicSlice(str,start,end){
  let subString=str.slice(start,end)
  console.log(subString)
}
DynamicSlice("I am Proud  Indian",5,10)


// Given a string, use slice() to remove its first character.
 let s="Closures";
 let rs=s.slice(1)
 console.log(rs);

// Write a function that removes the first and last character from any given string using slice().
function remSlice(str){
  let subStr=str.slice(1,str.length-1)
  console.log(subStr)
}
remSlice("Eyess")

// Create a function that checks whether a given string is a palindrome by comparing the original string with its reversed version (use slice() to reverse the string).

function palindrome(str){
  let reverse="";
  for(let i=str.length;i>0;i--){
    reverse+=str.slice(i-1,i)
  }
  if(reverse===str){
    console.log('It is palindrome')
  }
  else{
    console.log('Not a plaindrome')
  }
}
palindrome('mam')

// Write a function that takes a filename as input (e.g., "document.pdf", "image.jpeg") and extracts the file extension using slice().

function extention(str){
  let dotIndex=str.lastIndexOf('.');
  if(dotIndex === -1 || dotIndex === str.length-1){
    return "No extention";
  }
  return str.slice(dotIndex+1);
}


// Write a function that takes a string and returns it in uppercase and lowercase using toUpperCase() and toLowerCase().
// Create a function that returns the length of a given string using .length.
// Write a function that returns the 3rd character of a given string using charAt() and charCodeAt().
// Given " Hello World! ", remove the extra spaces using trim().

function strFunc(str){
  return{
    uppercase:str.toUpperCase(),
    lowercase:str.toLowerCase(),
    length:str.length,
    Third_char:str.charAt(2),
    charcode:str.charCodeAt(2),
    trim:str.trim(),
    replace:str.replace("Italy","India"),
    includes:str.includes("from"),
    firstOccurence:str.indexOf('a'),
    lastOccurence:str.lastIndexOf('a')
  }
}
console.log(strFunc(("   I am from Italy     ")))










