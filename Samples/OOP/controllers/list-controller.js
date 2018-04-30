const List = require('../models/list');
const ListItem = require('../models/list-item');

const MenuView = require('../views/menu-view');

class ListController {
    constructor() {
        this.id = 'List Controller';

        this.list = new List('New list');
    }

    init() {
        MenuView.RootMenu(function (menuName) {
            this._handleSetListName(menuName);

            console.log("Wow, I have a name!", this.list.getName());
        }.bind(this));
    }

    _addListItemToList(task, priority) {
        var listItem = new ListItem(task, priority);

        if (!task || task === null) {
            return false;
        }

        this.list.addListItem(list);

        return true;
    }

    _removeListItemFromList(task) {
        if (!task || task === null) {
            return false;
        }

        return this.list.removeListItem(task);
    }

    _handleSetListName(listName) {
        this.list.setName(listName);
    }
}

module.exports = ListController;