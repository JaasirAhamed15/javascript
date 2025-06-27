
// var counter=document.querySelector(".counter");
// var followers=document.querySelector(".followers");

//tthis is for the getelement by id
var counter=document.getElementById("counter");
var followers=document.getElementById("followers");



let count=1;
setInterval(() => {
    if(count<1000){
        count++;
        counter.innerText=count;
    }
    else{
        clearInterval();
    }
}, 1);


setTimeout(()=>{

    followers.innerText="Followewrs in Intagram!"
},5000)