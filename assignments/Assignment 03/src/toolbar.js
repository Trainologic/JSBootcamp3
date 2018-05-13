function Toolbar(element) {
    var events = Events();

    init();

    function init() {
        const buttonLoad = getElement(element, "button.load");
        buttonLoad.addEventListener("click", function() {
            events.emit("load");
        });

        const buttonClear = getElement(element, "button.clear");
        buttonClear.addEventListener("click", function() {
            events.emit("clear");
        });
    }

    return {
        on: events.on,
        off: events.off,
    };
}
