

fetch('https://api.chucknorris.io/jokes/random')
.then(responce=>{
   return responce.json();
    
})
.then((data)=>{
    // console.log("Data is",data)
    var joke=data.value;
    console.log("Joke is",joke);
})
.catch()

