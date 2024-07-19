const ws = new WebSocket('ws://localhost:8080');

ws.onopen = () => {
    console.log('Connected to the server');
};

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', 'received');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = `Last Character: ${data.lastCharacter}, Count: ${data.count}`;

    messageElement.appendChild(messageContent);
    document.getElementById('chat-box').appendChild(messageElement);
};

document.getElementById('send-button').addEventListener('click', () => {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;
    if (message) {
        // Send the message to the server
        ws.send(message);

        // Display the sent message
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', 'sent');

        const messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = message;

        messageElement.appendChild(messageContent);
        document.getElementById('chat-box').appendChild(messageElement);

        // Clear the input
        messageInput.value = '';
    }
});

document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        document.getElementById('send-button').click();
    }
});
