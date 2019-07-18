const express = require('express')
const path = require('path');
const http = require('http');
const socketIO = require('socket.io')

const app = express()
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public');

const server = http.createServer(app);
var io = socketIO(server)

io.on('connection', (socket) => {
  console.log('New User Connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
    io.emit('newMessage', {
      from: message.from,
      text: message.text,
      createdAt: new Date().getTime()
    })
  })
})
app.use(express.static(publicPath))

server.listen(port, () => console.log(`Server is running on port ${port}`))
