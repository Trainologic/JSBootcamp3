(function(){
    init();

    function init() {
        var contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
            {id: 3, name: "Udi"},
            {id: 4, name: "Tommy"},
        ];

        var ul = select("ul");

        var template = select("ul li");
        template.remove();

        for (var contact of contacts) {
            var li = template.clone();
            ul.append(li);

            bindLI(li, contact);
        }
    }

    function select(query, context) {
        var res = $(query, context);
        if(!res.length){
            throw new Error("Query " + query + " returned 0 elements");
        }

        return res;
    }

    function bindLI(li, contact){
        li.data("contact", contact);

        var span = select("span", li);
        span.text(contact.name);

        var button = select("button", li);
        button.click(function () {
            console.log("click", li);

            //var contact = li.data("contact");

            li.remove();

            var index = contacts.indexOf(contact);
            if(index != -1){
                contacts.splice(index, 1);

                console.log(contacts);
            }
        });
    }
})();

