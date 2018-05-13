(function() {
    init();

    function init() {
        var toolbar = Toolbar(getElement(".toolbar"));
        var tree = ChatTree(getElement(".tree"));
        var content = Content(getElement(".content"));

        toolbar.on("load", function() {
            tree.load(content.get());

            tree.element.focus();
        });

        toolbar.on("clear", function() {
            tree.clear();
        });
    }
})();
