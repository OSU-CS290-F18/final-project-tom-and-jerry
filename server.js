//var path = require('path');
//var Handlebars = require("handlebars");
//var partials = "./views/partials/";

//var fs = require('fs');
var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

//var voteData = require('./voteData');

var MongoClient = require('mongodb').MongoClient;
var mongoHost = process.env.MONGO_HOST || 'classmongo.engr.oregonstate.edu';
var mongoPort = process.env.MONGO_PORT || '27017';
var mongoUsername = process.env.MONGO_USERNAME || 'cs290_liyi4';
var mongoPassword = process.env.MONGO_PASSWORD || 'cs290_liyi4';
var mongoDBName = process.env.MONGO_DB_NAME || 'cs290_liyi4';

var app = express();
var port = process.env.PORT || 3000;

var mongoURL = "mongodb://" + mongoUsername + ":" + mongoPassword + "@" + mongoHost + ":" + mongoPort + "/" + mongoDBName;

var mongoDB = null;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.json());


app.use(express.static('public'));
app.get('/', function (req, res, next) {
  var voteCollection = mongoDB.collection('vote');
  //console.log('==',voteCollection);
  voteCollection.find({}).toArray(function (err, voteDocs) {
    if (err) {
      res.status(500).send("Error communicating with the DB.");
    } else if (voteDocs.length > 0) {
      res.status(200).render('homePage',{vote:voteDocs});
      console.log("== homepage!!! ==");
      //console.log('== vote: \n', voteDocs[0]);
    } else {
      next();
    }
  });
  //res.status(200).render('homePage',{vote:voteData});
  
});

//app.get('/index', function (req, res, next) {
//    console.log("== 200");
//    res.status(200).render('homePage');
//});

app.get('/votes/data', function (req, res, next) {

  var voteCollection = mongoDB.collection('vote');
  //console.log('==',voteCollection);
  voteCollection.find({}).toArray(function (err, voteDocs) {
    if (err) {
      res.status(500).send("Error communicating with the DB.");
    } else if (voteDocs.length > 0) {
      res.status(200).send(JSON.stringify(voteDocs));
      //console.log('== vote: \n', voteDocs[0]);
      console.log("== send vote data ==");
    } 
    
  }); 
});

app.post('/votes/userdata', function (req, res, next) {

  var voteCollection = mongoDB.collection('vote');
  //var newdata = JSON.parse(req.body);
  voteCollection.insertOne(req.body,function(err){
    if (err) {
      res.status(500).send("Error communicating with the DB.");
    } else {
      res.status(200).send();
      console.log("== received vote data ==");
    } 
  });
});

app.post('/votes/:id/:choice/:index', function (req, res, next) {
  var _id = req.params.id.toString();
  var choice = req.params.choice.toString();
  var index = req.params.index.toString();
 
  var voteCollection = mongoDB.collection('vote');
  //var newdata = JSON.parse(req.body);
  console.log("===",_id,typeof _id,choice,index);
  voteCollection.updateOne({chartid:_id},{$inc:{[`chartData.data.datasets.0.data.${index}`]:1,"size":1}},function(err){
    if (err) {
      res.status(500).send("Error communicating with the DB.");
    } else {
      res.status(200).send();
      console.log("== updated vote data ==");
    } 
  });
});



app.get('*', function (req, res, next) {
  console.log("== 404 ==");
  res.status(404).render('404');
});


console.log("== connecting to ",mongoURL,".......");
MongoClient.connect(mongoURL,{ useNewUrlParser: true },function (err, client) {
  if (err) {
    throw err;
  }
  mongoDB = client.db(mongoDBName);
  console.log("== connected success! ==");
  app.listen(port, function (err) {
    if (err) {
      throw err;
    }
    console.log("== Server listening on port", port," ==");
  })
  
});