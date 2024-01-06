// client.js
const socket = io();

const chatBox = document.getElementById('chat-box');
const messageInput = document.getElementById('message-input');

socket.on('message', (data) => {
  const messageElement = document.createElement('div');
  messageElement.textContent = data;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
});

function sendMessage() {
  const message = messageInput.value;
  if (message.trim() !== '') {
    socket.emit('message', message);
    messageInput.value = '';
  }
}
