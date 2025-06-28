
const jaasir={
    firstname:"Jaasir",
    lastname:"ahamed",
    role:"admin",
    courseCount:3,
    getInfo: function(){
        console.log(`
            First Name is: ${this.firstname}
            Last Name is: ${this.lastname}
            His Role is: ${this.role}
            and he is studying ${this.courseCount} courses.
            `);
        
    }
}

const dj={
    firstname:"Rock",
    lastname:"Dj",
    role:"sub-admin",
    courseCount:4
}
var djinfo=jaasir.getInfo.bind(dj); // call method
djinfo();