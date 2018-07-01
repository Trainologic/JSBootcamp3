let db;

const input = document.querySelector("input[type=file]");
console.log("input", input);

document.querySelector("button.browse").addEventListener("click", function() {
    input.click();
});

document.querySelector("button.open").addEventListener("click", function(){
    const request = indexedDB.open("mydb", 1);
    request.onerror = function(err){
        console.error(err);
    }

    request.onsuccess = function(e){
        console.log("DB opened successfully")

        db = e.target.result;
    }

    request.addEventListener("upgradeneeded", function(e){
        console.log("upgradeneeded", e);

        const db = e.target.result;

        db.createObjectStore("contacts", {keyPath: "id", autoIncrement: true});
    })
});

document.querySelector("button.add").addEventListener("click", function(){
    const file = input.files[0];
    const fileReader = new FileReader(file);
    fileReader.readAsArrayBuffer(file);
    fileReader.addEventListener("load", function(e){
        const buffer = e.target.result;
        console.log("buffer", buffer);

        const contact = {
            name: "Ori",
            email: "diuhdiuhd",
            file: buffer,
        };

        const tran = db.transaction(["contacts"], "readwrite");

        tran.oncomplete = function() {
            console.log("tran oncomplete")
        }

        tran.onabort = function() {
            console.log("tran onabort")
        }

        tran.onerror = function() {
            console.log("tran onerror")
        }

        const contacts = tran.objectStore("contacts");

        const request = contacts.add(contact);

        request.onsuccess = function(e){
            console.log("add success", e);

            contact.id = e.target.result;

            console.log(contact);
        }

        request.onerror = function(e){
            console.log("add error", e);
        }

    })
});
