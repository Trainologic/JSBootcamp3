const express = require("express");

const app = express();

app.get("/api/twitts", function(req, res){
    const data = [{id:1, name: "Ori"}];
    const str = JSON.stringify(data);
    res.write("g(" + str + ")");
    res.end();
    // res.send([])
});

app.listen(8081, function(){
    console.log("server is running");
});
