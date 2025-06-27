

var user={
    firstname:"Jaasir",
    laastname:"Ahamed",
    role:"Admin",
    logincount:32,
    facebooksignedIn:true,
    courseList:[],
    buycourse:function (coursename){

        this.courseList.push(coursename);



    },
    getcoursecount:function (){
        return `${this.firstname} is enrolled in total of ${this.courseList.length} courses`
    },
}
var courseList=true;
console.log(user.firstname);
console.log(user.getcoursecount());

user.buycourse('React js')
console.log(user.getcoursecount());
