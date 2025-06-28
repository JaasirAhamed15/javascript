varuser={
    name:"",
    getusername:function(){
        console.log(`Username is ${this.name}`);
    },
}

var jaasir=Object.create(user);
console.log(jaasir);