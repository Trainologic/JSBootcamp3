export class Api {
    static baseUrl = 'http://localhost:4000';

    static getUsers(){
        return this.get('/users');
    }

    static get(url){
        /*return new Promise((resolve)=>{
            fetch(this.baseUrl + url)
                .then(res => res.json())
                .then((data) => )
            ;
        }*/
        return fetch(this.baseUrl + url)
                .then(res => res.json());
    }

    static post(){

    }
}

