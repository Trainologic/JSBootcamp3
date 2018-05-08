module.exports = (function () {
    function User(username, age, password) {
        this.username = username;
        this.age = age;
        this.password = password;
    }

    function Users() {
        this._users = {};
    }

    // public methods
    Users.prototype = {
        getUser,
        addOrUpdate,
        add,
        update,
        remove,
        printList,
    };

    // private methods
    function addOrUpdate(username, age, password) {
        let userToUpdate = this.getUser(username);
        if (userToUpdate) { // update
            return this.update(userToUpdate, age, password);
        }
        else { // add
            return this.add(new User(username, age, password));
        }
    }

    function add(user) {
        if (user && user instanceof User && user.username) {
            this._users[user.username] = user;
            return true;
        }
        return false;
    }

    function update(user, age, password) {
        if (user && user instanceof User && age && password) {
            user.age = age || user.age;
            user.password = password || user.password;
            return true;
        }
        return false;
    }

    function remove(username) {
        if (this.getUser(username)) {
            delete this._users[username];
            return true;
        }
        return false;
    }

    function printList() {
        for (let username in this._users) {
            if (this._users.hasOwnProperty(username)) {
                console.log('*** username: ' + username +
                    ', age: ' + this._users[username].age +
                    ', password: ' + this._users[username].password);
            }
        }
    }

    function getUser(username) {
        return this._users[username] ? this._users[username] : null;
    }

    return Users;
})();


