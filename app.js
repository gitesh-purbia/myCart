const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'dist')));

const port = process.env.PORT || 5000;

app.listen(port);

console.log('server started ' + port);
