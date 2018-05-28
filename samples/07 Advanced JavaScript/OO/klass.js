let Mammel = klass({
    _constructor: function (name) {
        this.name = name;
        this.saying = 'nothing';
    },
    say: function () {
        console.log(this.name + ': ' + this.saying);
    }
}, null);


let Cat = klass({
    _constructor: function (name) {
        this.saying = 'hatula';
        this.numberOfLifes = 6;
    },
    say: function () {
        console.log(this.name + ': ' + this.saying);
        console.log('numberOfLifes: ' + this.numberOfLifes);
    }
}, Mammel);


function klass(childDefinitionObj, parent) {

    var tmp = function () {
    };

    function extend(parent) {
        tmp.prototype = parent.prototype;
        this.prototype = new tmp();
        this.uber = parent.prototype;
    }

    var child;

    child = function () {
        // 1. constructors
        if (child.uber && child.uber._constructor) {
            child.uber._constructor.apply(this, arguments);
        }

        if (childDefinitionObj._constructor) {
            childDefinitionObj._constructor.apply(this, arguments);
        }
    }

    // 2. extends child prototype
    parent = parent || {};
    extend.call(child, parent);

    // 3. copy parent properties
    for (var i in childDefinitionObj) {
        if (childDefinitionObj.hasOwnProperty(i)) {
            child.prototype[i] = childDefinitionObj[i];
        }
    }

    return child;
}

var mam = new Mammel('groot');
var cat = new Cat('garfield');

mam.say();
cat.say()