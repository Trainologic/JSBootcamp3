getUser = () => (new Promise((resolve) => {
    setTimeout(() => resolve({id: 345, username: 'hatula'}), 2000);
}));


function auth() {
    return new Promise((resolve) => {
         getUser()
             .then((user) => {
                if (user) {
                    resolve(user.id);
                }
            });
    });
}

function app() {
    auth()
        .then((res) => {
            console.log(res);
        });
}

app();