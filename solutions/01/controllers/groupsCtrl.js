const Utils = require('../utils');
const Groups = require('../models/groups');

module.exports = (function () {
    // private and static properties
    let _backToMainMenu, _groupUtils, _groups, _usersCtrl;

    let actions = {
        1: function () {
            _groupUtils.interactWithUser(function (groupName) {
                Utils.printDoneMessage(
                    _groups.addGroup(groupName)
                );
                _backToMainMenu();
            }, 'create');
        },
        2: function () {
            _groupUtils.interactWithUser(function (groupName) {
                Utils.printDoneMessage(
                    _groups.removeGroup(groupName)
                );
                _backToMainMenu();
            }, 'remove');
        },
        3: function () {
            _groups.printList();
            _backToMainMenu();
        }
    };

    let usersToGroupActions = {
        1: function () {
            _groupUtils.interactWithUser(function (userGroupArgs) {
                let user = _usersCtrl.getUser(userGroupArgs.split(',')[0]);
                Utils.printDoneMessage(
                    _groups.addUserToGroup(user, userGroupArgs.split(',')[1])
                );
                _backToMainMenu();
            }, 'assignUserToGroup');
        },
        2: function () {
            _groupUtils.interactWithUser(function (userGroupArgs) {
                Utils.printDoneMessage(
                    _groups.removeUserFromGroup(...userGroupArgs.split(','))
                );
                _backToMainMenu();
            }, 'removeUserFromGroup');
        },
        3: function () {
            _groups.printGroupsAndUsersList();
            _backToMainMenu();
        }
    };

    function GroupsCtrl(backToMainMenu, usersCtrl) {
        _backToMainMenu = backToMainMenu;
        _groupUtils = new Utils('Group');
        _groups = new Groups();
        _usersCtrl = usersCtrl;

        usersCtrl.on('userDelete', function (username) {
            _groups.removeUserFromAllGroups(username)
        });
    }

    // public methods
    GroupsCtrl.prototype = {
        menu,
        usersToGroupMenu
    };

    // private mathods
    function menu(backToMainMenu) {
        _groupUtils.printTypeMenu();
        Utils.interactWithUser(function (selection) {
            actions[selection] ? actions[selection](backToMainMenu) : backToMainMenu();
        });
    }

    function usersToGroupMenu(backToMainMenu) {
        Utils.printUsersToGroupMenu();
        _groupUtils.interactWithUser(function (selection) {
            usersToGroupActions[selection] ? usersToGroupActions[selection](backToMainMenu) : backToMainMenu();
        });
    }

    return GroupsCtrl;
})();


