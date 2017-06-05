const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create a schema
const advertSchema = new Schema({
  name: String,
  sale: Boolean,
  price: Number,
  photo: String,
  tags: [String]
});

// Create a model using the schema
const Advert = mongoose.model('Advert', advertSchema);

// Make this available in our Node applications
module.exports = Advert;
