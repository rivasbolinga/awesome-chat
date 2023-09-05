const socket = io();


const clientsTotal = document.getElementById('clients-total');
const messageContainer= document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

socket.on('clients-total', (data)=> {
 clientsTotal.innerText = `Total clients: ${data}`
})