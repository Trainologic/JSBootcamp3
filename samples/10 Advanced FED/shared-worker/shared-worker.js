
const connection = [];

onconnect = (e)=>{
    const port = e.ports[0];
    connection.push(port);

    port.onmessage= ({data})=>{
        broadcast(data);
    }


}

function broadcast(msg){
    for (const connectionElement of connection) {
        connectionElement.postMessage(msg);
    }
}