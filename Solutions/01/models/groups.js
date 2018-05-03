const Users = require('./users');

module.exports = (function () {
    function Group(groupName) {
        this.groupName = groupName;
        this.users = new Users();
    }

    function Groups() {
        this._groups = {};
    }

    // public methods
    Groups.prototype = {
        addGroup,
        removeGroup,
        printList,
        printGroupsAndUsersList,
        addUserToGroup,
        removeUserFromGroup,
        removeUserFromAllGroups
    };


    // private mathods
    function addGroup(groupName) {
        if (!this._groups[groupName]) {
            this._groups[groupName] = new Group(groupName);
            return true;
        }
        return false;
    }

    function removeGroup(groupName) {
        if (this._groups[groupName]) {
            delete this._groups[groupName];
            return true;
        }
        return false;
    }

    function printList() {
        for (let groupname in this._groups) {
            if (this._groups.hasOwnProperty(groupname)) {
                console.log('* ', groupname);
            }
        }
    }

    function printGroupsAndUsersList() {
        for (let groupname in this._groups) {
            if (this._groups.hasOwnProperty(groupname)) {
                console.log('* ', groupname);
                this._groups[groupname].users.printList();
            }
        }
    }

    function addUserToGroup(user, groupname) {
        if (user && this._groups[groupname]) {
            this._groups[groupname].users.add(user);
            return true;
        }
        return false;
    }

    function removeUserFromGroup(username, groupname) {
        if (this._groups[groupname] && this._groups[groupname].users.getUser(username)) {
            this._groups[groupname].users.remove(username);
            return true;
        }
        return false;
    }

    function removeUserFromAllGroups(username) {
        let res = false;
        for (let groupname in this._groups) {
            if (this._groups.hasOwnProperty(groupname)) {
                res = res || this.removeUserFromGroup(username, groupname);
            }
        }
        return res;
    }

    return Groups;
})();


