// dependencies
const Utils = require('../view/utils');
const UsersCtrl = require('./usersCtrl');
const GroupsCtrl = require('./groupsCtrl');

module.exports = (function () {
    //private properties
    let usersCtrl, groupsCtrl, actions;

    function MainCtrl(){
        usersCtrl = new UsersCtrl(menu);
        groupsCtrl = new GroupsCtrl(menu, usersCtrl);

        actions = {
            1: usersCtrl.menu,
            2: groupsCtrl.menu,
        };
    }

    MainCtrl.prototype = {
        menu
    };

    //private methods
    function menu() {
        Utils.printMainMenu();
        Utils.interactWithUser(function (selection) {
            actions[selection] ? actions[selection](menu) : process.exit();
        });
    }

    return MainCtrl;
})();











