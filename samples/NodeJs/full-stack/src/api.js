export class Api {
    static baseUrl = 'http://localhost:4000';

    static getUsers() {
        return this.get('/users');
    }

    static createUser(user) {
        return this.post('/users', user);
    }

    static get(url) {
        return fetch(this.baseUrl + url)
            .then(res => res.json());
    }

    static post(url, body) {
        return fetch(this.baseUrl + url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
}

