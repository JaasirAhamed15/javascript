var user={
    firstname:"Jaasir",
    laastname:"Ahamed",
    role:"admin",
    logincount:32,
    facebooksignedIn:true
}

console.log(user);
console.log(user.firstname);
console.log(user["laastname"]);

user.logincount=44;

console.log(user);
console.table(user);