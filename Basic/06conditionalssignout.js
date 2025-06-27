
var authentication=false;

if (authentication) {
    console.log("Show signout button");

}else{
    console.log("Show login option");
}


result = authentication ? "Show signout button" : "Show login option";
console.log(result);