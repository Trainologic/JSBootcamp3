var Groups = /** @class */ (function () {
    function Groups(name, users) {
        if (name === void 0) { name = 'default'; }
        if (users === void 0) { users = []; }
        this.name = name;
        this.users = users;
    }
    Groups.prototype.printUsers = function (prefix) {
        if (prefix === void 0) { prefix = '-------->>>>'; }
        this.users.forEach(function (user) {
            console.log(prefix + " name: " + user.name + " age: " + user.age);
        });
    };
    return Groups;
}());
var groups = new Groups('Default Group', [{ name: 'Michael', age: 76 }]);
groups.printUsers();
//# sourceMappingURL=main.js.map