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

  socket.on('createMessage', (newEmail) => {
    console.log('createMessage', newEmail);
  })

  socket.emit('newMessage', {
    from: 'suhayb@asma.com',
    text: "Hi. What is goin on",
    createdAt: 123
  })
})
app.use(express.static(publicPath))

server.listen(port, () => console.log(`Server is running on port ${port}`))
