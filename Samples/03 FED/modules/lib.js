var lib = (function() {
    var data = 123;

    function log(message) {
        console.log("lib> " + message);
    }

    function doSomething() {
        log("doSomething");
    }

    return {
        doSomething,
    }
})();
