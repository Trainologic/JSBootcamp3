const readline = require('readline');
const Utils = require('./utils');

module.exports = (function () {
    function TreeComponent(actions) {
        readline.emitKeypressEvents(process.stdin);
        this._currentRow = 0;
        this._rows = [];
        this._actions = actions;
        this._treeUtils = new Utils('Tree');
        this._isSearchMode = false;
    }

    TreeComponent.prototype = {
        render,
        _getCurrentGroup,
        _keyPress,
        _printMenu,
        _printList,
        _getStaticOptions
    };

    function render(treeList, showFullPath) {
        if (treeList) {
            this._rows = _renderTreeRows(treeList, this._isSearchMode);
        }
        this._printMenu();
        this._printList(showFullPath);

        Utils.interactWithUser((selection) => {
            this._keyPress(selection);
        });
    }

    function _renderTreeRows(treeList, isSearchMode) {
        return treeList.map(row => {
            let path = row.path;
            let groupName = path.pop();

            let indentationPrefix, indentationGroup, indentationUser;
            if (isSearchMode) {
                indentationGroup = indentationPrefix = path.reduce((prev, groupName) => prev + groupName + '/', '');
                indentationUser = ' '.repeat(indentationGroup.length) + '│  * ';
            }
            else {
                indentationPrefix = path.reduce((prev) => prev + '│  ', '');
                indentationGroup = indentationPrefix + '├─ ';
                indentationUser = indentationPrefix + '│  * ';
            }

            let users = row.group.users.getList().reduce((acc, user) => {
                return acc + '\n\r' + indentationUser + user;
            }, '');

            return {
                label: indentationGroup + groupName + ' (' + row.group.usersCount + ')' + users,
                group: row.group
            };
        });
    }

    function _printList() {
        this._rows.forEach((row, index) => {
            if (this._currentRow === index) {
                console.log('\x1b[31m%s\x1b[0m', row.label);
            }
            else {
                console.log(row.label);
            }
        });
    }

    function _keyPress(str) {
        let currentGroup = this._getCurrentGroup();
        this._isSearchMode = false;
        switch (str) {
            case ',':
                this._currentRow > 0 ? this._currentRow-- : null;
                this.render();
                break;
            case '.':
                this._currentRow < (this._rows.length - 1) ? this._currentRow++ : null;
                this.render();
                break;
            case 'u':
                this._actions.addGroup(currentGroup);
                break;
            case 'i':
                this._currentRow = 0;
                this._actions.removeGroup(currentGroup);
                break;
            case 'o':
                this._actions.addUser(currentGroup);
                break;
            case 'p':
                this._currentRow = 0;
                this._actions.removeUser(currentGroup);
                break;
            case 'y':
                this._isSearchMode = true;
                this._currentRow = 0;
                this._actions.searchUser();
                break;
            case 't':
                this._currentRow = 0;
                this._actions.searchGroup();
                this._isSearchMode = true;
                break;
            case 'r':
                this._actions.menu();
                break;
            case 'e':
                this._currentRow = 0;
                this._actions.flattenGroup(currentGroup);
                break;
            case 'c':
            default:
                this._actions.backToMainMenu();
        }
    }

    function _getStaticOptions() {
        return Array(
            this._treeUtils.getStringByPath('up'),
            this._treeUtils.getStringByPath('down'),
            this._treeUtils.getStringByPath('searchUser'),
            this._treeUtils.getStringByPath('searchGroup'),
            this._treeUtils.getStringByPath('mainMenu')
        );
    }

    function _printMenu() {
        console.clear();

        let currentGroup = this._getCurrentGroup();
        let dynamicOptions = [];
        let staticOptions = this._getStaticOptions();

        if (this._actions.isLeaf(currentGroup)) {
            dynamicOptions.push(this._treeUtils.getStringByPath('addUser'));
            (this._actions.hasUsers(currentGroup))?dynamicOptions.push(
                this._treeUtils.getStringByPath('removeUser')): null;
        }
            dynamicOptions.push(this._treeUtils.getStringByPath('addGroup'));

        (this._isSearchMode) ? dynamicOptions.push(this._treeUtils.getStringByPath('menu')) : null;

        (this._currentRow !== 0) ? dynamicOptions.push(this._treeUtils.getStringByPath('removeGroup')) : null;

        if (this._actions.canBeFlatten(currentGroup)) {
            dynamicOptions.push(this._treeUtils.getStringByPath('flatten'));
        }

        console.log(staticOptions.join('  '));
        console.log('-'.repeat(80));
        console.log(dynamicOptions.join('  '));
        console.log('='.repeat(80));
    }

    function _getCurrentGroup() {
        return this._rows[this._currentRow].group;
    }

    return TreeComponent;
})();
