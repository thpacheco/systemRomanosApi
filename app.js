// app.js
const express = require('express');
const bodyParser = require('body-parser');

const agenda = require('./routes/agenda.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://thpacheco:Thiago85@ds012889.mlab.com:12889/db_romanos';
// let dev_db_url = 'mongodb://thpacheco:Thiago85@ds241723.mlab.com:12889/db_romanos';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/agendas', agenda);

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});