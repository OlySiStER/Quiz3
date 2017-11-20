const hbs = require('hbs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var user = require('./users.js');
var cors = require('cors');
var path = require('path');

app.use(express.static(__dirname + "/view"));
app.use(cors());
app.set('view engine', 'hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

function logger(req, res, next) {
    console.log(new Date(), req.method, req.url);
    next();
}

app.use(logger);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/view/list.html"));
});

app.get('/searchbyfname', function (req, res) {
    res.sendFile(path.join(__dirname + "/view/search.html"));
});

app.get('/searchbyrole', function (req, res) {
    res.sendFile(path.join(__dirname + "/view/role.html"));
});

app.get('/users/searchuser', function (req, res) {
    res.render('searchuser.hbs');
});

app.get('/users/searchrole', function (req, res) {
    res.render('searchrole.hbs');
});

app.post('/insertuser', user.insert);
app.get('/users', user.findAll);
app.get('/users/search', user.findByFname);
app.get('/user/role/:role', user.findByRole);

app.listen(3001, () => console.log('Server is running at http://localhost:3000'));