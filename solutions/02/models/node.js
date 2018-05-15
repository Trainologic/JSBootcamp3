const NodeFactory = function (getUniqueKey) {
    function Node(data, parent) {
        this._data = data;
        this._children = {};
        this._parent = parent;
    }

    Node.prototype = {
        getParent,
        getData,
        hasChildren,
        isSingleChild,
        add,
        remove,
        getAll,
        getLeafs,
        dfsScan,
        flatten
    };

    function getParent() {
        return this._parent;
    }

    function getData() {
        return this._data;
    }

    function add(data) {
        const key = getUniqueKey(data);

        if (!this._children[key]) {
            return this._children[key] = new Node(data, this);
        }
        return this;
    }

    function remove() {
        const key = getUniqueKey(this._data);

        delete this._parent._children[key];
        delete this._parent;
    }

    function dfsScan(aggregationCondition) {
        let results = [];
        aggregationCondition = aggregationCondition || (() => true);

        if (aggregationCondition(this)) {
            results.push(this);
        }

        if (this.hasChildren()) {
            for (let childKey in this._children) {
                results = results.concat(this._children[childKey].dfsScan(aggregationCondition));
            }
        }
        return results;
    }

    function hasChildren() {
        return Object.keys(this._children).length;
    }

    function isSingleChild() {
        return !!this._parent && Object.keys(this._parent._children).length === 1;
    }

    function getLeafs() {
        return this.dfsScan(node => (!node.hasChildren()));
    }

    function getAll() {
        return this.dfsScan(()=>true);
    }

    function flatten(mergeFn) {
        if(this.isSingleChild()) {
            mergeFn(this._parent._data, this._data);
            this.remove();
            return true;
        }
        return false;
    }

    return Node;
};

module.exports = NodeFactory;