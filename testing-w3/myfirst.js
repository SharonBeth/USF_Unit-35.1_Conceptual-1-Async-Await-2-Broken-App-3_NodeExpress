// var http = require('http');
// var dt = require('./myfirstmodule');
// var url = require('url');
// var fs = require('fs');
// 
// http.createServer(function (req, res) {
// fs.readFile('demo')
// res.writeHead(200, { 'Content-Type': 'text/html' });
// res.write("The date and time are currently: " + dt.myDateTime());
// var q = url.parse(req.url, true).query;
// var txt = q.year + " " + q.month;
// res.end(txt);
// }).listen(8080);
// 
// 

const express = require('express');
// const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/register', (req, res) => {
    res.send(req.body);
})

app.listen(3000, function () {
    console.log(`Server starting on port 3000`);
});

