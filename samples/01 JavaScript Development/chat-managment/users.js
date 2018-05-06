function Users(prefix) {
    // private property
    var users='';

    //public properties
    return {
        version: '1.0.0',
        addUser: addUser
    };

    // private methods
    /*var addUser = function (user) {
        users = users+user;
        privateFn();
    };*/

    function addUser(user) {
        users = users+prefix+user;
        privateFn();
    }

    function privateFn() {
        console.log("I'm a private!");
    }
}

function User(){

}

module.exports= Users;
