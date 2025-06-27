console.log(this);

var user={
    firstname:"jaasir",
    cousecount:4,
    getcoursecount:function(){
        console.log("Line 7",this);
        function sayhello(){
            console.log("Hello");
            console.log("Line 10",this);
        }
        sayhello();
    },
}

user.getcoursecount();