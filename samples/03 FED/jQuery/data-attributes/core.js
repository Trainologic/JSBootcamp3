$(function() {

    $("[data-class]").each(function () {
        var element = $(this);

        compileClass(element);
    });

    function compileClass(element){
        var className = element.attr("data-class");
        if (!className) {
            throw new Error("data-class attribute is empty");
        }

        var ctor = window[className];
        var ctrl = new ctor();

        compileElement(null, element, ctrl, ctrl);
    }

    function compileElement(parent, element, ctrl, context) {
        const dataListAttr = element.attr("data-list");
        if(dataListAttr){
            var list = context[dataListAttr];
            compileList(parent, element, ctrl, list);
            return;
        }

        const dataFieldAttr = element.attr("data-field");
        if(dataFieldAttr){
            var field = context[dataFieldAttr];
            element.text(field);
        }

        const dataClickAttr = element.attr("data-click");
        if(dataClickAttr){
            var method = ctrl[dataClickAttr];
            if(!method){
                throw new Error("Method " + dataClickAttr + " was not found");
            }

            element.click(function(){
                method.call(ctrl, context);
            })
        }

        element.children().each(function(){
            var child = $(this);
            compileElement(element, child, ctrl, context);
        });
    }

    function compileList(parent, element, ctrl, list){
        element.removeAttr("data-list");
        element.remove();

        for(var item of list){
            var clone = element.clone();
            clone.appendTo(parent);

            compileElement(parent, clone, ctrl, item)
        }
    }
});
