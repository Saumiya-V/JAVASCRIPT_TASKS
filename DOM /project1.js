let btn= document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person')


const quotes= [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
  { quote: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
  { quote: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
  { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" }
];

btn.addEventListener("click",function(){
  let random =  Math.floor(Math.random()*quotes.length);

  quote.innerText=quotes[random].quote;
  person.innerText=quotes[random].author;
})
