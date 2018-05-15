const Utils = require('../view/utils');
const Users = require('../models/users');

module.exports = (function () {
    // private and static properties
    let _users, _usersUtils, _backToMainMenu;

    // events
    let listeners = {
        userDelete: []
    };

    let actions = {
        1: function () {
            _usersUtils.interactWithUser(function (userDetails) {
                _users.addOrUpdate(...userDetails.split(','));
                _backToMainMenu();
            }, 'createOrUpdate');
        },
        2: function () {
            _usersUtils.interactWithUser(function (username) {
                _users.remove(username);
                trigger('userDelete', username);
                _backToMainMenu();
            }, 'remove');
        },
        3: function () {
            _users.printList();
            _backToMainMenu();
        }
    };

    function UsersCtrl(backToMainMenu) {
        _backToMainMenu = backToMainMenu;
        _usersUtils = new Utils('User');
        _users = new Users();
        _users.addOrUpdate('bini',44,'dfgdg');

    }

    // public methods
    UsersCtrl.prototype = {
        menu,
        getUser,
        on
    };

    // private methods
    function menu() {
        _usersUtils.printTypeMenu();
        Utils.interactWithUser(function (selection) {
            actions[selection] ? actions[selection](_backToMainMenu) : _backToMainMenu();
        });
    }

    function getUser(username) {
        return _users.getUser(username);
    }

    function on(eventName, handler) {
        if (listeners[eventName]) {
            listeners[eventName].push(handler);
        }
        else {
            listeners[eventName] = [handler];
        }
    }

    function trigger(eventName, data) {
        if (listeners[eventName] && listeners[eventName].length) {
            listeners[eventName].forEach(handler => {
                if(!!handler && typeof handler === 'function'){
                    handler(data);
                }
            });
        }
    }

    return UsersCtrl;
})();


