function myObj() {
    this.a ='asd';
    this.b='fdff';

    this.myFn = function(arg1,sdf,sdg) {
        console.log(this.a + this.b + arg1);
    }
}

var obj = new myObj();
var myFn = obj.myFn;
myFn();
obj.myFn();


//call
var thiss= {a:'aaa',b:'bbb'}
myFn.call(thiss, 'im groot','sdf','sdf');

//apply
myFn.apply(thiss, ['im groot','sdf','sdf']);
Array.prototype.push.apply(arr, ['im groot','sdf','sdf']);

//bind
var fixedMyFn = myFn.bind(obj);
fixedMyFn('sdf','sdfsd','sdf');


