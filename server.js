var express = require('express');
var cors = require('cors');
var path = require('path');
var app = express();

app.use(cors());

app.get('*', function(req, res) {
    res.sendFile(path.resolve(__dirname, './public/bundle.js'));
});

app.listen(3380, function () {
    console.log('listening on port 3380!');
});