const Websocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const PEERS= process.env.PEERS ? process.env.PEERS.split(',') : [];

//ws://localhost:5001 < websocket address
// 
class P2pServer {
    constructor(blockchain){
        this.block = blockchain ;
        this.sockets = [];
    }

    listen() {
        const server = new Websocket.Server({port: P2P_PORT});
        server.on('connection', socket => this.connectSocket(socket));

        this.connectToPeers();

        console.log(`listening for p2p conenctions on : ${P2P_PORT}`)
        console.log(`my current PEER : ${PEERS}`)
    }

    connectToPeers(){
        PEERS.forEach(PEERS => {
            // ws://localhost:5001
            const socket = new Websocket(PEERS);

            socket.on('open', () => this.connectSocket(socket));
        });

        
    }
    connectSocket(socket){
        this.sockets.push(socket);
        console.log('Socket Connected');
    }
}

module.exports = P2pServer;