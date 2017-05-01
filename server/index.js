var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var request = require('request');
var Cardsdb = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

app.post('/cards', function(req, res) {

  var inputData = new Cardsdb.addressBook( {
    fullname: req.body['formData[fullname]'],
    street: req.body['formData[street]'],
    city: req.body['formData[city]'],
    state: req.body['formData[state]'],
    zipCode: req.body['formData[zipCode]'],
    countr: req.body['formData[country]']
  } ); 
  console.log(inputData)
  
  // var newCard = new Cardsdb( inputData );
  
  inputData.save(function(err) {
    if (err) throw err 
    console.log("new card added", inputData.fullname);
  });

  res.end()

})

app.get('/cards', function (req, res) {
  Cardsdb.selectAll(function(err, data) {
    if(err) {
      console.log('error from server')
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

