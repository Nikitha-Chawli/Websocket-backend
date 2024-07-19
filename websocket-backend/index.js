const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        const msg = message.toString();
        const lastChar = msg.slice(-1);
        const count = [...msg.slice(0, -1)].filter(char => char === lastChar).length;

        const response = JSON.stringify({ message: msg, lastCharacter: lastChar, count: count });

        // Send the JSON response after a delay of 0.1 seconds
        setTimeout(() => {
            ws.send(response);
        }, 100);
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
