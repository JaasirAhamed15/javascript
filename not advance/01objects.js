var user=function(firstname,coursecount){
    this.firstname=firstname;
    this.coursecount=coursecount;

    this.getcoursecount=function(){
        console.log(`Course count is ${this.coursecount}`);
    };
    
};

user.prototype.getFirstname=function(){
    console.log(`Your first name is ${this.firstname}`);
}

var jaasir= new user("jaasir",5);
// console.log(jaasir);
jaasir.getFirstname();
jaasir.getcoursecount();


var ahamed = new user("ahamed",3);
// console.log(ahamed);
ahamed.getFirstname();
ahamed.getcoursecount();