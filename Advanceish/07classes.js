class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    courselist = [];

    getInfo(){//this is the function 
        return {name: this.name, email: this.email};
    }
    enrollcourse(name){
        this.courselist.push(name);
    }
    getcourselist(){
        return this.courselist;
    }
}

class SubAdmin extends User {
    getAdminInfo(){
        return "I am subadmin"

    }
}


module.exports = User;