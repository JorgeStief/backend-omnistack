const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();

mongoose.connect('mongodb+srv://taturei:1q2w3e@@@cluster0-dnctt.mongodb.net/omni?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,  
});

app.use(express.json());
app.use(routes);


app.listen(3333);