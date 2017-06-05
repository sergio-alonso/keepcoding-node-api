var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Advert = require('../models/advert');

const url = 'mongodb://172.17.0.1:27017/keepcoding';

mongoose.connect(url);

/* GET adverts page. */
router.get('/', function(req, res, next) {
  Advert.find({}, function(err, advert) {
    if (err)
      res.send(err);
    res.json(advert);
  });
});

module.exports = router;
