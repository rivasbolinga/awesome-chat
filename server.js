const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => console.log(`🚀Server running on port ${PORT} `))
const io = require('socket.io')(server);

app.use(express.static(path.join(__dirname, 'public')));

// We use sets cause every id of the socket is unique
let socketsConnected = new Set();
console.log(socketsConnected)
const onConnected = (socket) => {
  console.log(socket.id)
  socketsConnected.add(socket.id)
  console.log(socketsConnected)

  io.emit('clients-total', socketsConnected.size)

  socket.on('disconnect', ()=> {
    console.log('Socket disconnected', socket.id)
    socketsConnected.delete(socket.id)
    console.log(socketsConnected)
     io.emit('clients-total', socketsConnected.size)
  })
}

//listen for socket:
io.on('connection', onConnected)

