import * as express from "express";

const app = express();

app.get("/api/contact", function(req, res){
    res.send([
        {id:1, name: "Ori"},
        {id:2, name: "Roni"},
    ]);
})

app.listen(4000, function(){
    console.log("Server is running");
})