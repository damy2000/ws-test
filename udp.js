 const dgram = require('dgram');
 const client = dgram.createSocket('udp4');

 client.on('message',function(msg,info){
    console.log('UDP from server : ' + msg.toString());
    console.log('UDP %d bytes from %s:%d',msg.length, info.address, info.port);
  });
 

 //sending msg
const data = Buffer.from('M4000');
client.send(data,3000,'192.168.1.118',function(err){
    if(err){
      client.close();
    }else{
      console.log('Data sent !');
    }
  });




