const WebSocket = require('ws');

console.log("start")
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws, req) {
  const ip = req.socket.remoteAddress;
  const port = req.socket.remotePort;

  ws.on('message', function incoming(message) {
    console.log('received MSG: %s', message);
    console.log('received from IP: %s', ip);
    console.log('received from PORT: %s\n', port);

    //ws.send('server connesso!');
  });

  //comando GCODE x ogni client ogni secondo
  const interval = setInterval(function timeout() {
    console.log('INVIO CMD GCODE -> %s',port);
    ws.send("M4000");
  }, 2000);

});