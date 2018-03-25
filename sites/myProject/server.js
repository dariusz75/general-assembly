//require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

app.use(express.static('public'));
//console.log('secret:\n\n', process.env.MY_BIG_SECRET);

mongoose.Promise = global.Promise;
var promise = mongoose.connect('mongodb://localhost/first_cars');

promise.then(function(db) {
  console.log('DATABASE CONNECTED!!');
}).catch(function(err){
  console.log('CONNECTION ERROR', err);
});

var cars = [
  {
    _id: 0,
    name: 'Ferrari'
  },
  {
    _id: 1,
    name: 'Mini'
  },
  {
    _id: 2,
    name: 'Tesla'
  }
];


app.post('/cars', function(req, res) {
  console.log(req.body);
  cars.push(req.body);
  res.sendStatus(200);
});

app.delete('/cars/:id', function(req, res) {
  console.log('car to be deleted', req.params.id);
  var index = cars.findIndex(function(car) {
    return req.params.id === car._id;
  });
  var deletedCar = cars.splice(index, 1);
  res.status(200).json(cars);
});

app.get('/cars', function(req, res) {
  res.status(200).json(cars);
});



app.listen(3000, function(){
  console.log('Server listening');
});
