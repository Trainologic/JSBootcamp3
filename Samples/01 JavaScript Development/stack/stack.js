let curr = null;

function push(data) {
    curr = new Node(data, curr);
}

function pop() {
    curr = curr ? curr.prev : null;
}

function print(){
    let tmp = curr;
    while(tmp){
        console.log(tmp.data);
        tmp = tmp.prev;
    }
}

function Node(data, prev) {
    this.data = data;
    this.prev = prev;
}

(function () {
    push('123');
    push('333');
    push('aaa')
    print();
    console.log('====')
    pop();
    print();
    console.log('====')
    pop();
    print();
    console.log('====')
    pop();
    print();
    console.log('====')
    pop();
    print();
})();

/*
(function init() {
    let node = {
        data: '',
        next: null
    }


})();*/

/*
* V   S
* O<->O<->N
*
* V
* N
*
* */
