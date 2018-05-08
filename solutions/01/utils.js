const readline = require('readline');

module.exports = (function () {
    let rl = readline.createInterface(process.stdin, process.stdout);

    function Utils(type) {
        this._type = type;
    }

    // static properties
    Utils.stringsResource = {
        User: {
            createOrUpdate: 'enter user details with this format: USERNAME,AGE,PASSWORD: ',
            remove: 'enter username to remove: '
        },
        Group: {
            create: 'enter group name to add: ',
            remove: 'enter group name to remove: ',
            assignUserToGroup: 'enter user to add to group like USERNAME,GROUP: ',
            removeUserFromGroup: 'enter user to remove from group like USERNAME,GROUP: '
        },
        general: {
            choose: 'Choose the action by number:',
            doneSuccessfully: 'done!',
            doneWithErrors: 'Oh... somethings gone awry'
        }
    };

    // static methods
    Utils.printMainMenu = function () {
        console.log('');
        console.log('=== Available Actions ===');
        console.log('1. Users Management');
        console.log('2. Groups Management');
        console.log('3. User To Group Association');
        console.log('4. Exit');
    };

    Utils.interactWithUser = interactWithUser;
    Utils.printDoneMessage = printDoneMessage;

    Utils.printUsersToGroupMenu = function () {
        console.log('');
        console.log('=== User association Management ===');
        console.log('1. Add user to group');
        console.log('2. Remove user from group');
        console.log('3. List groups and associated users');
        console.log('4. Back');
    };

    // public methods
    Utils.prototype = {
        printTypeMenu,
        interactWithUser
    };

    // private methods
    function printTypeMenu() {
        console.log('');
        console.log('=== ' + this._type + ' Management ===');
        console.log('1. Create ' + ((this._type === 'User') ? 'or Update ' + this._type : this._type));
        console.log('2. Delete ' + this._type);
        console.log('3. List ' + this._type + 's');
        console.log('4. Back');
    }

    function interactWithUser(onSelectionCallback, path) {
        rl.question(getStringByPath(path, this._type), function (selectedActionNumber) {
            onSelectionCallback(selectedActionNumber);
        });
    }

    function getStringByPath(path, type) {
        if (type && path && Utils.stringsResource[type]) {
            return Utils.stringsResource[type][path];
        }
        else {
            return Utils.stringsResource.general.choose;
        }
    }

    function printDoneMessage(isActionSucceeded) {
        let path = isActionSucceeded ? 'doneSuccessfully' : 'doneWithErrors';
        console.log(getStringByPath(path, 'general'));
    }

    return Utils;
})();



