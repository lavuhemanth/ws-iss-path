const express = require('express');
const http = require('http');
const { WebSocketServer }  = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server: server });


wss.on('connection', function connection(ws) {
    console.log('A new client connected');
    ws.send('something');


    ws.on('message', function incoming(message) {
            setInterval(() => {
                ws.send(Date.now());
            }, 5000);
        });
  });


app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

server.listen(4000, () => {
    console.log('Server is starting at 3000 .......!!!');
})

