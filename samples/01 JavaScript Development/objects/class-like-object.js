var user = {
  name: 'Ariel',
  age: 30,
  hairColor: 'black',
  changeHairColor: function (color) {
      this.hairColor = color;
  }
};

// How to write classes the rightish way in ES5 Javascript
function User(name, age, hairColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;


   /* return {
        name: name,
        age: age,
        hairColor: hairColor
    }*/
}

User.prototype={
    changeHairColor: function (color) {
        this.hairColor = color;
    }

};


var users = [new User('Itay',25, 'red'), new User('Yoval'), new User('Yossi')];
users[0].changeHairColor('blue');
console.log(users[0]);
