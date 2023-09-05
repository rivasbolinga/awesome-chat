const socket = io();


const clientsTotal = document.getElementById('clients-total');
const messageContainer= document.getElementById('message-container');
const nameInput = document.getElementById('name-input');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');

const now = moment().format('h:mm')
console.log(now)

const sendMessage = () => {
  const data = {
    name: nameInput.Value,
    message: messageInput.value,
    dateTime: new Date(),
  }
  socket.emit('message', data)
  addMessageToUI(true, data)
  messageInput.value = ''
}

messageForm.addEventListener('submit', (e)=> {
  e.preventDefault();
  sendMessage();
})

socket.on('clients-total', (data)=> {
 clientsTotal.innerText = `Total clients: ${data}`
})

socket.on('chat-message', (data)=> {
  addMessageToUI(false, data)
})

const addMessageToUI = (isOwnMessage, data) => {
 
const element = `<li class= "${isOwnMessage ? "message-right": "message-left"}">
<p class="message">${data.message}
<span>${now}</span></p></li>`
}