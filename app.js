const express = require('express');



const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
})

const PORT = 3000;

app.listen(PORT, function() {
    console.log('Server started on port 3000.')
})