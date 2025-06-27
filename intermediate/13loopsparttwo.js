
const states=[
    "Kerala",
    "Tamil Nadu",
    "Karnataka",
    1947,
    "Andhra Pradesh",
    "Telangana",
    "Maharashtra",
    "Gujarat",
    "Rajasthan",
]

var i=0;

for(;;){
    if(i>3) break;
    console.log(i);
    i++;
}

states.forEach((s)=>(console.log(s)))
states.forEach((s)=>console.log(s));