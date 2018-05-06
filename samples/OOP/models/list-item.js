class ListItem {
    constructor(task, priority /* TODO: Implement later */) {
        this.task = task || null;
        this.priority = priority || 0;
    }

    getTask() {
        return this.task;
    }

    getPriority() {
        return this.priority;
    }
}

module.exports = ListItem;