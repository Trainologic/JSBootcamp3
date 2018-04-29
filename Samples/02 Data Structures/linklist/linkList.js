function LinkList(){
    var list = {
        head: null,
        tail: null,
        count: 0,
        addLast,
        iterator,
    };

    function addLast(value){
        var newNode = {
            prev: null,
            next: null,
            value: value,
        }

        if(!list.head){
            list.head = list.tail = newNode;
            list.count = 1;

            return;
        }

        list.tail.next = newNode;
        newNode.prev = list.tail;
        list.tail = newNode;
        list.count++;
    }

    function iterator(){
        var itr = {
            node: null,
            next,
            value,
        };

        function next(){
            itr.node = itr.node ? itr.node.next : list.head;
            return !!itr.node;
        }

        function value(){
            if(!itr.node){
                throw new Error("No value at current position");
            }

            return itr.node.value;
        }

        return itr;
    }

    return list;
}

exports.LinkList = LinkList;

