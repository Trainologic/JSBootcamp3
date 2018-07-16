import * as express from "express";
import * as path from "path";
import * as compression from "compression";
import {Database} from "sqlite3";

const app = express();

app.use(compression());

const publicFolder = path.resolve(__dirname, "../ng-getting-started");
console.log(publicFolder);
app.use(express.static(publicFolder));

app.get("/api/contact/:id", function(req, res){
  const dbFilePath = path.resolve(__dirname, "contacts.db");
  var db = new Database(dbFilePath);
  db.all("SELECT * FROM contacts WHERE id = ?", [req.params.id], function(err, rows){
    res.send(rows);
  });
});

app.listen(8080, function(){
  console.log("Server is running");
})
