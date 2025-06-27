
var testarray=[2,4,6,3,1,5,9,8];

console.log(testarray.fill('h',2,5));//the first is the fill value then the secont is the starting valuen then third value is the from last to the arrray


const mynumber=[23,24,25,55,66,77,87,98];

const result=mynumber.filter((num)=> num != 55);
console.log(result);

//slice and splice

var user=['Ted','Tim','Ton','Sam','Sor','Sod'];

console.log(user.slice(1,3));//first is start and the secound is the stop value

user.splice(1,3,"Hi");//the first is the start value the the secound is the last value the start to stop the entire will remove 
console.log(user);