(function($){
    init();

    function init(){
        try {
            var ul = $(".contacts");
            if (!ul.length) {
                throw new Error("ul was not found");
            }

            console.log(ul);

            var contacts = getAllContacts();
            for(var contact of contacts){
                var li = $("<li >");
                li.text(contact.name);
                ul.append(li);

                // $("<li >")
                //     .appendTo(ul)
                //     .text(contact.name);

                // ul.append("<li />").text(contact.name);
            }



            //console.log("FOUND");
        }
        catch(err){
            console.log("ERROR", err);
        }
    }

    function getAllContacts(){
        return [
            {id:1, name: "Ori"},
            {id:2, name: "Roni"},
            {id:3, name: "Udi"},
        ]
    }
})(jQuery);
