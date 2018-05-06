let curr = null;

function push(data) {
    curr = new Node(data, curr);
}

function pop() {
    let data = curr ? curr.data : null;
    curr = curr ? curr.prev : null;
    return data;
}

function print() {
    let data = pop();
    while (data) {
        console.log(data);
        data = pop();
    }
}

function Node(data, prev) {
    this.data = data;
    this.prev = prev;
}

(function () {
    push('123');
    push('333');
    push('aaa');
    console.log('====');
    console.log(pop());
    console.log('====');
    console.log(pop());
    console.log('====');
    console.log(pop());
    console.log('====');
    console.log(pop());
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
