const data = {
    users: [
        {id: 3, username: 'rrrt', nickname: 'fff'},
        {id: 4, username: 'rrrt', nickname: 'fff'},
        {id: 5, username: 'rrrt'},
        {id: 6, username: 'rrrt'},
    ],
    groups: [
        {
            id: 3, name: 'werwre', messages: [
                {id: 22, body: 'sdffff'},
                {id: 242, body: 'trtrtrt'}]
        },
        {
            id: 33, name: 'werwre', messages: [
                {id: 2442, body: 'sdffff'},
                {id: 242, body: 'trtrtrt'}]
        },
        {
            id: 34, name: 'werwre', messages: [
                {id: 242, body: 'sdffff'},
                {id: 2432, body: 'trtrtrt'}]
        }
    ]
};

// let groups= data.groups;
let {groups, users:[,,user]} = data;

// console.log(groups);
// console.log(users);
console.log(user);



