let res = sum(5)(6);
// res 11

getUser = () => (new Promise((resolve)=>{
    setTimeout(()=>resolve({id:345,username:'hatula'}),2000);
}));


async function auth(){
    let user = await getUser();

    if(user) {
        return true;
    }

}

async function app() {
    let res = await auth();
}