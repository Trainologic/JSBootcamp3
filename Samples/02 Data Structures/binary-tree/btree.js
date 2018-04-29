function BTree(){
    var tree = {
        add,
        search,
        count: 0,
    };

    return tree;

    function add(val){
        if(!tree.root){
            tree.root = createNode(null, val);
            return;
        }

        internalAdd(tree.root, val);
    }

    function internalAdd(parent, val){
        if(val > parent.val){
            if(parent.right){
                internalAdd(parent.right, val);
            }
            else {
                parent.right = createNode(parent, val);
            }
        }
        else {
            if(parent.left){
                internalAdd(parent.left, val);
            }
            else {
                parent.left = createNode(parent, val);
            }
        }
    }

    function search(val){
        return internalSearch(tree.root, val);
    }

    function internalSearch(node, val) {
        if(node.val == val){
            return createIterator(node);
        }

        if(val > node.val){
            return internalSearch(node.right, val);
        }
        else {
            return internalSearch(node.left, val);
        }
    }

    function createNode(parent, val){
        var node = {
            parent,
            val,
            left: null,
            right: null,
        };

        ++tree.count;

        return node;
    }

    function createIterator(node) {
        var itr = {
            node,
            value,
            next,
        }

        return itr;

        function value(){
            return itr.node.val;
        }

        function next(){
            var node = itr.node;
            if(!node){
                return false;
            }

            var next = node.right ? getSmaller(node.right) : null;
            if(!next){
                next = getFirstBiggerParent(node.parent, node.val);
            }

            itr.node = next;
            return !!itr.node;
        }
    }

    function getSmaller(node){
        if(!node.left){
            return node;
        }

        return getSmaller(node.left);
    }

    function getFirstBiggerParent(node, val){
        if(node.val > val){
            return node;
        }

        if(!node.parent){
            return null;
        }

        return getFirstBiggerParent(node.parent, val);
    }
}

exports.BTree = BTree;
