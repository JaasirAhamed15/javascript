var name="jaasir";
console.log("Line number2",name);

function sayname(){
    var name='mr.j';
    console.log("Line number 6",name);

    saynametwo();
    function saynametwo(){
        console.log("Line number 10",name)
    }
}

sayname();
