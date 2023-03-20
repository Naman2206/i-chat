const socket =io('http://localhost:8001');

const form =document.getElementById('send-container');
const messageInput =document.getElementById('messageInp')
const messagecontainer=document.querySelector('.container')


const Name = prompt('Enter your name to join');
socket.emit('new-user-joined', Name);
