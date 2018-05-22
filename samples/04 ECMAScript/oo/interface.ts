enum ANIMAL_FAMILY{
    MEMEL,
    REPTILE,
    BIRD
}

enum GENDER{
    MALE,
    FEMALE,
    ITS_COMPLICATED
}

let family:ANIMAL_FAMILY;
family = ANIMAL_FAMILY.BIRD;

interface IPerson{
    gender: GENDER
}

let person:IPerson = {
    gender: GENDER.ITS_COMPLICATED
};


interface ICRUD<T> {
    add: (item: T) => boolean
    remove: (item: T) => boolean
}

interface IUser {
    name: string,
    pid: number
}

class Users implements ICRUD<IUser> {
    private data: Array<IUser>;

    constructor() {
        this.data = [];
    }

    add(newUser: IUser) {
        this.data.push(newUser);
        return true;
    }

    remove: () => boolean;

}

const users = new Users();

interface IGroup {
    groupName: string,
    id: number
}

class Groups implements ICRUD<IGroup> {
    private data: Object;
    constructor(){
        this.data ={};
    }
    add(item: IGroup){
        this.data[item.id]= item;
        return true;
    };
    remove: (item: IGroup) => boolean;
}

const groups = new Groups();
groups.add({id:55,groupName:'sdf'});
