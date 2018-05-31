const data = {
    users: [
        {id: 3, username: 'rrrt', nickname: 'fff'},
        {id: 4, username: 'rrrt', nickname: 'fff'},
        {id: 5, username: 'rrrt'},
        {id: 6, username: 'rrrt'},
    ],
    groups: {
        3: {
            name: 'werwre', messages: [
                {id: 22, body: 'sdffff'},
                {id: 242, body: 'trtrtrt'}]
        },
        33: {
            name: 'werwre', messages: [
                {id: 2442, body: 'sdffff'},
                {id: 242, body:'trtrtrt'}]
        },
        34: {
            name: 'werwre', messages: [
                {id: 242, body: 'sdffff'},
                {id: 2432, body: 'trtrtrt'}]
        }

    };

for (let msg of ({groups}=data)) {
    console.log(msg)
}

// let groups= data.groups;
let {groups: [, {messages: [message]}], users: [, , user]} = data;

// alias
let {groups: [{messages: messagesOfFirstGroup}, , ,]} = data;
console.log(messagesOfFirstGroup)

// default
let {users: [{nickname: n1 = 'no nickname'}, {nickname: n2 = 'no nickname'}, {nickname: n3 = 'no nickname'}]} = data;

/*console.log(n1);
console.log(n2);
console.log(n3);*/
for (let {nickname: n = {no: 'nickname'}} of data.users) {
    console.log(n);
}

function doSomething(options) {
    let color = options.color || {opacity: 'sdf'};
}

function doSomething2({color = {opacity: 'sdf'}}) {
    console.log(color);
}

noop = () => {
};

function provider(dataUsage = () => {
}) {
    // data query =>
    dataUsage({
        users: [],
        groups: [],
        error: {}
    })
}

provider(({users, groups}) => {
    // console.log(users);
})

function log(str, ...others) {

}

// arrays
let [username, age, pass, ...other] = 'momo,45,pssss,sdf,sdf,eeee'.split(',');
console.log(username, age, pass);
console.log(...other);

let arr = [4, 5];
let tmp = arr[0];
arr[0] = arr[1];
arr[1] = tmp;

arr = [arr[1], arr[0]];
let a = 1, b = 2;
/*
let tmp = a;
a = b;
b =tmp;
*/

console.log(a, b);
[b, a] = [a, b];
let users;
({users} = data);
console.log(a, b);


// console.log(groups);
// console.log(users);
// console.log(user);
// console.log(data.groups[1].messages[0]===message);



