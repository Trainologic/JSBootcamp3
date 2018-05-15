// MY TYPESCRIPT DEF
interface User {
    name: string
    age: number
    gender?: string
}

interface UsersInterface {
    [index: number]: User
}

interface PrintUserFunc {
    (user: User): string
}

interface GroupsInterface {
    name: string
    users: User[]

    printUsers(prefix?: string): void;
}

class Groups implements GroupsInterface {
    name: string;
    users: User[];

    constructor(name: string = 'default', users: User[] = []) {
        this.name = name;
        this.users = users;
    }

    printUsers(prefix: string = '-------->>>>') {
        this.users.forEach((user: User) => {
            console.log(`${prefix} name: ${user.name} age: ${user.age}`);
        });
    }
}

const groups = new Groups('Default Group', [{name: 'Michael', age: 76}]);

groups.printUsers();