require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const employeeController = require('./controllers/employeeController')

var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');
const PORT = process.env.PORT || 3000;

app.listen (PORT, () => console.log(`Server started on port ${PORT}`));

app.use('/employee', employeeController);