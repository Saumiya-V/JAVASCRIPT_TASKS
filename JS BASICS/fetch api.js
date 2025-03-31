//Fetch Api provides a simple and modern way to make http request in javascript ,that returns promise and resolves to response object

fetch("https://jsonplaceholder.typicode.com/users/1")
.then((response)=>{
  if(!response.ok){
    throw new Error(`HTTP error status:${response.status}`)
  }
  return response.json()
})
.then((data)=>console.log(data))
.catch((error)=>console.log(error))

// Send a POST request to create a new user (name, email, and username) at https://jsonplaceholder.typicode.com/users.


fetch('https://jsonplaceholder.typicode.com/users',{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    name:'Saumiya',
    email:'saumiya477@gmail.com',
    username:'Saum#26'
  })
}).then((response)=>response.json())
.then((data)=>console.log("Success:",data))
.catch((error)=>console.error("Error:",error))


//Try updating the username of the user with id: 1 at https://jsonplaceholder.typicode.com/users/1.

fetch("https://jsonplaceholder.typicode.com/users/1",{
  method:"PUT",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify({
    id:1,
    username:'Divya'
  })
})
.then((response)=>response.json())
.then((data)=>console.log('Updated:',data))
.catch((error)=>console.error("Error:",error))

//Async / Await
//async keyword makes a function to return promise and await pauses the execution until the promises are resolved.

async function postFetch(){
  try{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts/1');
    if(!response.ok){
      throw new Error(`HTTP Error status:${response.status}`)
    }
    else{
      let data=await response.json();
      console.log(data)
    }
  }
  catch(error){
    console.log(error)
  }
}

postFetch