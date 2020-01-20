const express = require('express');
const mongoose = require('mongoose');
const http = require('http')
const cors = require('cors');

const routes = require('./routes');
const { setupWebSocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://taturei:1q2w3e@@@cluster0-dnctt.mongodb.net/omni?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

app.use(cors())
app.use(express.json());
app.use(routes);


server.listen(3333);