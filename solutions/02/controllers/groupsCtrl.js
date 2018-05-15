const Utils = require('../view/utils');
const Groups = require('../models/groups');
const TreeComponent = require('../view/treeComponent');

module.exports = (function () {
    // private and static properties
    let _backToMainMenu, _groupUtils, _groups, _usersCtrl, _treeComponent;

    function addGroup(currentGroup) {
        _groupUtils.interactWithUser((groupName) => {
            Utils.printDoneMessage(
                _groups.addGroup(currentGroup, groupName, currentGroup.users));
            menu();
        }, 'create');
    }

    function removeGroup(currentGroup) {
        let result = currentGroup.groupName !== 'root' ? _groups.removeGroup(currentGroup) : false;
        Utils.printDoneMessage(result);
        menu();
    }

    function flattenGroup(currentGroup) {
        Utils.printDoneMessage(
            _groups.flattenGroup(currentGroup));
        menu();
    }

    function searchUser() {
        _groupUtils.interactWithUser((username) => {
            let searchResults = _groups.searchUser(username);
            let data = _groups.getList(searchResults);
            _treeComponent.render(data);
            // menu();
        }, 'searchForUser');
    }

    function searchGroup() {
        _groupUtils.interactWithUser((groupName) => {
            let searchResults = _groups.searchGroup(groupName);
            let data = _groups.getList(searchResults);
            _treeComponent.render(data);
            // menu();
        }, 'searchForGroup');
    }

    function addUser(currentGroup) {
        _groupUtils.interactWithUser(function (username) {
            let user = _usersCtrl.getUser(username);
            if (currentGroup.isLeaf && user) {
                Utils.printDoneMessage(
                    currentGroup.users.add(user));
            }
            else {
                Utils.printDoneMessage(false);
            }
            menu();
        }, 'assignUserToGroup');
    }

    function removeUser(currentGroup) {
        _groupUtils.interactWithUser(function (username) {
            Utils.printDoneMessage(currentGroup.users.remove(username));
            menu();
        }, 'removeUserFromGroup');
    }

    function GroupsCtrl(backToMainMenu, usersCtrl) {
        _backToMainMenu = backToMainMenu;
        _groupUtils = new Utils('Group');
        _groups = new Groups();
        _usersCtrl = usersCtrl;

        usersCtrl.on('userDelete', function (username) {
            _groups.removeUserFromAllGroups(username)
        });

        _treeComponent = new TreeComponent({
            addGroup,
            removeGroup,
            flattenGroup,
            searchUser,
            addUser,
            removeUser,
            searchGroup,
            menu,
            backToMainMenu,
            hasUsers: _groups.hasUsers,
            isLeaf: _groups.isLeaf.bind(_groups),
            canBeFlatten: _groups.canBeFlatten.bind(_groups)
        });    }

    // public methods
    GroupsCtrl.prototype = {
        menu
    };

    // private methods
    function menu() {
        let data = _groups.getList();
        _treeComponent.render(data);
    }

    return GroupsCtrl;
})();


