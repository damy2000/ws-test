//UDP
const dgram = require('dgram');
const client = dgram.createSocket('udp4');

client.on('message', function (msg, info) {
    console.log('UDP from server : ' + msg.toString());
    console.log('UDP %d bytes from %s:%d\n', msg.length, info.address, info.port);

    //rispedisco al server
    console.log('INVIO RISPOSTA');
    ws.send(msg.toString());

});

//WEBSOCKET
const WebSocket = require('ws');

//const ws = new WebSocket('ws://127.0.0.1:5001');
const ws = new WebSocket('ws://test.ipermateria.it:80');
//const ws = new WebSocket('ws://PrintCLOUD.damianotriscian.repl.co:5001');

//alla connessione al server
ws.on('open', function open() {
    ws.send('client connesso');
});

//alla ricezione di un messaggio/comando
ws.on('message', function incoming(message) {
    console.log('received: %s', message);

    //spedisco UDP
    const data = Buffer.from(message);
    client.send(data, 3000, '192.168.1.118', function (err) {
        if (err) {
            client.close();
        } else {
            console.log('UDP Spedito !');
        }
    });

});

