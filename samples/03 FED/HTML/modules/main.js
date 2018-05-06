(function() {

    function log(message) {
        console.log("main> " + message);
    }

    function init() {
        log("init");

        lib.doSomething();
    }

    init();
})();
