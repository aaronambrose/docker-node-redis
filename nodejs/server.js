'use strict';
// Constants
const PORT = process.env.PORT;
const redis = require('redis');

// Host name is the service alias in the docker-compose.yml
const client = redis.createClient(6379, 'redis'); //creates a new client
client.on('connect', function() {
    console.log('connected');
});

const express = require('express');

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
