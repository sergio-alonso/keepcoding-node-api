const mongoose = require('mongoose');

// Make Mongoose use the ES6 promise
mongoose.Promise = global.Promise;

// Advert model to use the advert schema definition
const Advert = require('../models/advert');

// Advert model instances
var adverts = [
  {
    "name": "Bicicleta",
    "sale": true,
    "price": 230.15,
    "photo": "bicycle.png",
    "tags": ["lifestyle", "motor"]
  },
  {
    "name": "Telefono movil",
    "sale": false,
    "price": 50.00,
    "photo": "mobile.png",
    "tags": ["lifestyle", "mobile"]
  }
]

// Connection URL
const url = 'mongodb://172.17.0.1:27017/keepcoding';

mongoose.connect(url);

const db = mongoose.connection;

db.once('open', function() {
  console.log('Connected to DB');
});

db.on('error', function(err) {
  console.error.bind(console, 'connection error:', err)
});


Advert.remove({}).exec()
.then(() => Advert.insertMany(adverts))
.then(() => Advert.find({}, function(err, adverts){console.log("database: ", adverts)}))
.catch(function(err){
  console.log('error:', err);
});
