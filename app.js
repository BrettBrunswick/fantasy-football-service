const express = require('express');
var db = require('./models');


const app = express();

app.get('/', function(req, res) {
    res.send('Hello World');
});

const PORT = 3000;

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log('Server started on port 3000.')
    })
});