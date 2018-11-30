var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var Handlebars = require("handlebars");
var partials = "./views/partials/";
var voteData = require('./voteData');

var app = express();
var port = process.env.PORT || 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function (req, res, next) {
  console.log("== 200");
  res.status(200).render('homePage',{vote:voteData});
});
app.get('/index', function (req, res, next) {
    console.log("== 200");
    res.status(200).render('homePage');
  });
app.listen(port, function () {
  console.log("== Server listening on port", port);
})
app.get('*', function (req, res, next) {
  console.log("== 404");
  res.status(404).render('404');
});