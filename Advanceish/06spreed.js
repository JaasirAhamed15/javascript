

var result=Math.max(2,5,7,50,8,9,10);

console.log(result);

var obj={}

Object.assign(obj,{a:1,b:2,c:3},{z:9,y:8,x:7});
console.log(obj);


function someone(a,b){
    return a+b;
}
var mya=[5,4];

console.log(someone(...mya));//spreed operator
function sumtwo(...args){
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
}

console.log(sumtwo(2,3,1,5,7));

