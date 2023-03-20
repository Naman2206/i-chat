// node server
const io = require('socket.io')(8001, {
    cors: {
      origin: '*',
    }
  });
  

const users ={};

io.on('connection',socket =>{
    socket.on('new-user-joined',name =>{
        console.log('new user',name);
        users[socket.id]=name;
        socket.broadcast.emit('user-joined',name);
    })
    socket.on('send',message => {
        socket.broadcast.emit('receive',{message:message,name:user[socket.id]})
    })

})