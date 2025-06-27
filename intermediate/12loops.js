
// for (let i = 0; i<=10; i++) {
//     console.log(i);
    
// } 


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

// for (let i = 0; i < states.length; i++) {
//     if(typeof states[i] !== "string") {
//         // continue; 
//         break;
//     }
//     console.log(states[i]);
// }

let i=0;
while (i<states.length) {
    console.log(states[i]);
    i++;
}
console.log("While loop ended\n");
let j=0;
do{
    console.log(states[j]);
    j++;
}while(j<states.length);
console.log("Do while loop ended");