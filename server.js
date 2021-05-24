const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function () {
  console.log('listening on 8080')
});

// middlewear
app.use('/', express.static(path.join(__dirname, 'public')))



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
