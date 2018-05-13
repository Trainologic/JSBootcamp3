function Point(x, y){
    this.x = x;
    this.y = y;

    // const that = this;

    setTimeout(() => {
        console.log("Timeout", this.x, this.y);
    }, 1000);
}

const pt1 = new Point(5, 10);


// function Point(x, y){
//     console.log("New point was created", x, y);
//
//     setTimeout(function(){
//         console.log("Timeout",x,y);
//     }, 1000);
//
//     function dump(){
//         console.log(x + ", " + y);
//     }
//
//     return {
//         dump,
//     };
// }
//
// const pt1 = Point(5, 10);
// pt1.dump();
