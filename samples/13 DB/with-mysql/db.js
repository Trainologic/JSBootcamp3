const db = require('mysql');

let conn;

function initConnection() {
    conn = db.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    });

    conn.connect();
}

module.exports = ()=>{
    if(!conn){
        initConnection();
    }

    return conn;
}