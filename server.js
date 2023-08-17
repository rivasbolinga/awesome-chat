const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () => console.log(`🚀Server running on port ${PORT} `))
const io = require('socket.io')(3000);

app.use(express.static(path.join(__dirname, 'public')));
//every time the user loads this functions, it will give their own socket
// io.on('connection', socket => {
// console.log('new User')
// socket.emit('chat-message', 'Hello World')
// })