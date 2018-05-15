class DbService {
    constructor() {
    }


    executeBigQuery(){
        return new Promise(res=>{
            setTimeout(()=>{
                res()
            },3000);
        });
    }

}

module.exports = DbService;