//Callback- calling a function within another function
//setInterval - going to execute a function after a specific time


// console.log("Javascript is single threaded programming language")

// setTimeout(()=>{
//    console.log("It is synchronous in nature")
// },1000)

// console.log("It is interpreter")

// const order = (fruit, callback) => {
//   setTimeout(() => { 
//     console.log(`${stock.fruits[fruit]} was selected`);
//     callback(); 
//   }, 2000);
// };

//Callback Hell 

// const production = () => {
//   setTimeout(() => {
//     console.log("Production started");
//     setTimeout(()=>{
//        console.log("The fruit has been chopped")
//        setTimeout(()=>{
//            console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were selected`)
//            setTimeout(()=>{
//             console.log("Machine was started")
//             setTimeout(()=>{
//                console.log(`Icecream  was placed on ${stock.holder[0]}`)
//                setTimeout(()=>{
//                 console.log(`${stock.toppings[0]} was added as toppings`)

//               setTimeout(()=>{
//                 console.log("Served Icecream")
//               },2000)
//                },3000)
//             },2000)
//            },1000)
//        },1000)
//     },2000)
//   }, 0);
// };

// order(2, production);

//Promise Chaining

// let is_shopOpen=true;

// let order=(time,work)=>{
//     return new Promise((resolve,reject)=>{
//           if(is_shopOpen){

//             setTimeout(()=>{
//               resolve(work())
//             },time)
    
//           }
//           else{
//             reject(console.log("Our shop is closed"))
//           }
//     })
// }

// order(2000,()=>console.log(`${stock.fruits[0]} was selected`)).then(()=>{
//   return order(0,()=>console.log('Production has been started'))
// })
// .then(()=>{
//   return order(2000,()=> console.log("The fruit has been chopped"))

// })
// .then(()=>{
//   return order(1000, ()=>console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were selected`))
// })
// .then(()=>{
//   return order(1000,()=> console.log("Machine was started"))
// })
// .then(()=>{
//     return order(2000,()=>console.log(`Icecream  was placed on ${stock.holder[0]}`))
// })
// .then(()=>{
//   return order(3000, ()=>console.log(`${stock.toppings[0]} was added as toppings`))
// })
// .then(()=>{
//   return order(2000,()=>console.log("Served Icecream"))
// })
// .catch(()=>{
//   console.log("Customer Left")
// })
// .finally(()=>{
//   console.log("Day Ended,Our shop is closed")
// })

//Better way to write promises =>Async/Await

const stock = {
  fruits: ["Strawberry", "Mango", "Apple", "Guava", "Banana"],
  liquid: ["Water", "Ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanut"],
};

let is_shopOpen=false;

function time(ms){
  return new Promise((resolve,reject)=>{
    if(is_shopOpen){
      setTimeout(resolve,ms)
    }
    else{
      reject(console.log("The shop is closed"))
    }
  })
}

async function kitchen(){
  try{
    await time(2000)
    console.log(`${stock.fruits[0]} was selected`)
    await time(0)
    console.log('Production has been started')
    await time(1000)
    console.log("The fruit has been chopped")
    await time(1000)
    console.log(`${stock.liquid[0]} and ${stock.liquid[1]} were selected`)
    await time(3000)
    console.log(`${stock.toppings[0]} was added as toppings`)
    await time(2000)
    console.log("Served Icecream")
  }
  catch(error){
    console.log("Customer left")
  }
  finally{
    console.log("Day Ended,Our shop is closed")
  }
}

kitchen()