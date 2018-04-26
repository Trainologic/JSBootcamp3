function users() {
    // private property
    var users='';

    //public properties
    return {
        addUser
    }

    this.addUser;

    // private methods
    function addUser(user) {
        users = users+user;
    }

    function removeUser(user) {
        addUser(user);
    }
}

// public
users.prototype = {
    addUser: function addUser(user) {
        users = users + user;
    }
}

module.exports = users;

