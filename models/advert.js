var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Create a schema
var advertSchema = new Schema({
  name: String,
  sale: Boolean,
  price: Number,
  photo: String,
  tags: [String]
});

// Create a model using the schema
var Advert = mongoose.model('Advert', advertSchema);

// Make this available in our Node applications
module.exports = Advert;
