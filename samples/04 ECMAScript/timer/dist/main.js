main();
function main() {
    var timer = new Timer(1500);
    timer.tick(onTick1);
    timer.tick(onTick2);
    timer.start();
    function onTick1() {
        console.log("tick1");
    }
    var counter = 0;
    function onTick2() {
        console.log("tick2");
        if (++counter == 3) {
            timer.stop();
        }
    }
}
//# sourceMappingURL=main.js.map