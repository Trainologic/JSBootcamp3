class UniqueDB {
    constructor() {
        this.db = [];
    }

    set(entity) {
        if (this.db.indexOf(entity) > -1) {
            throw new Error('Entity already exists in DB');
        }

        this.db.push(entity);

        return true;
    }
}

module.exports = UniqueDB;