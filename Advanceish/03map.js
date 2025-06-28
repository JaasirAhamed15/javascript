
var mymap=new Map();

mymap.set(1,"Uno");
mymap.set(2,"Dos");
mymap.set(3,"Tres");
mymap.set(4,"Cuatro");

console.log(mymap);


for (let key of mymap.keys()) {
    console.log("value is ",key);
}
for (let value of mymap.values()) {
    console.log("value is ",value);
}



for (let [key,value] of mymap) {
    console.log(`key is:${key} and value is:${value}`);
}


mymap.forEach((value,key)=>console.log(`key is:${key} and value is:${value}`));