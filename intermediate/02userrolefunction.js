var getUserRole=function (name,role){

    switch(role){
        case 'admin':
            return `${name} is admin with all access`; 
            break;
        case 'subadmin':
            return `${name} is subadmin with access to create/delete courses`;
            break;

        case 'testprep':
            return `${name} is testprep with access to consume content`;
            break;
        default:
            return `${name} is a trial user`;
            break;
        
    }
}

var result=getUserRole("Jaasir","admin");
console.log(result);