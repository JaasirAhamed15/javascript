function init(){
    var firstname="Jaasir";
    function sayfirstname(){
        console.log(firstname);
    }
    sayfirstname();
}
init();


function doaddition(x){
    return function(y){
        return x+y;
    }
}
var add5=doaddition(5);
console.log(add5(10));  
console.log(doaddition(5)(10)); // 15

// doaddition()()();//curring