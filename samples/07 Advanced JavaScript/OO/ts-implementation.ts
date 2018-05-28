class Mammal {
    name;
    saying = 'nothing';

    constructor(name){
        this.name = name;
    }

    say(){
        console.log(this.name+': '+this.saying);
    }
}

class Cat extends Mammal{
    numberOfLifes;
    constructor(name){
        super(name);
        this.saying = 'hatula';
        this.numberOfLifes = 9;
    }

    say(){
        super.say();
        console.log('lifes: '+this.numberOfLifes);
    }
}

let myMammal = new Mammal('tiger');
let myCat = new Cat('garfield');

myMammal.say();
myCat.say();