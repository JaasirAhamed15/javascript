

// import User from './07classes.js';

const User=require('./07classes.js');

const jaasir= new User("jaasir","jaasir@gmail.com");
console.log(jaasir.getInfo());

jaasir.enrollcourse("React JS");
jaasir.enrollcourse("Angular JS");

console.log(jaasir.getcourselist());

let courses = jaasir.getcourselist();
courses.forEach((c)=>console.log(c));