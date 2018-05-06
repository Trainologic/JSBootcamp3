class List {
    constructor(name) {
        this.name = name || null;
        this.listItems = [];
    }

    getName() {
        return this.name;
    }

    getItems() {
        return this.listItems;
    }

    setName(name) {
        this.name = name;
    }

    addListItem(listItem) {
        this.listItems.push(listItem);
    }

    removeListItem(task) {
        var listItemIdx = this.listItems.findIndex(function (listItem) {
           return  listItem.task === task;
        });

        if (listItemIdx === -1) return false;

        this.listItems.splice(listItemIdx, 1);

        return true;
    }
}

module.exports = List;