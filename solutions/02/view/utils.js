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
        Group:{
            create: 'enter group name to add: ',
            assignUserToGroup: 'enter username to add to group: ',
            removeUserFromGroup: 'enter username to remove from group: ',
            searchForGroup: 'enter group name to search for: ',
            searchForUser: 'enter username to search for: '
        },
        Tree:{
            addGroup: '[u] Add Group',
            removeGroup: '[i] Remove Group',
            addUser: '[o] Add User',
            removeUser: '[p] Remove User',
            mainMenu: '[c] Main Menu',
            searchUser: '[y] Search User',
            searchGroup: '[t] Search Group',
            menu: '[r] Back to Full Tree',
            flatten: '[e] Flatten the Group',
            down: '[.] Down',
            up: '[,] Up'
        },
        general: {
            choose: 'Choose the action by number:',
            doneSuccessfully: 'done!',
            doneWithErrors: 'Oh... somethings gone awry'
        }
    };

    // static methods
    Utils.printMainMenu= function () {
        console.clear();
        console.log('');
        console.log('=== Available Actions ===');
        console.log('1. Users Management');
        console.log('2. Groups Management');
        console.log('3. Exit');
    };

    Utils.interactWithUser = interactWithUser;
    Utils.getStringByPath = getStringByPath;
    Utils.printDoneMessage = printDoneMessage;

    // public methods
    Utils.prototype = {
        printTypeMenu,
        interactWithUser,
        getStringByPath
    };

    // private methods
    function printTypeMenu() {
        console.clear();
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
        type = type || this._type;
        if(type && path && Utils.stringsResource[type]){
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



