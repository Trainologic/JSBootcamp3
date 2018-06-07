const fs = require('fs');

class DB {

    constructor(){
        this.data = this.readFromJson();
    }

    readFromJson(){
        const data = fs.readFileSync(__dirname+'/data.json');
        return JSON.parse(data);
    }

    writeToJson(){
        fs.writeFileSync(__dirname+'/data.json', JSON.stringify(this.data));
    }

    getUsers(){
        return new Promise((resolve)=>{
            setTimeout(()=> {
                resolve(this.data.users);
            },500);
        })
    }

}
module.exports = DB;