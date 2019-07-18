var socket = io();
socket.on('connect', () => {
  console.log('Connected to server')

  socket.emit('createMessage', {
    to: "asma",
    text: "Hi its me, whatsup"
  })
})
socket.on('disconnect', () => {
  console.log('Disconnected from server')
});

socket.on('newMessage', (email) => {
  console.log('New Email', email)
})
