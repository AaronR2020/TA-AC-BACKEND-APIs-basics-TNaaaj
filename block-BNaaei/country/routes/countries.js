var express = require('express');
var router = express.Router();

var Country = require('../models/country');
var State = require('../models/state');

router.get('/', (req, res, next) => {
  console.log();
  Country.find({})
    .populate('neighbouring_countries')
    .populate('states')
    .exec((err, country) => {
      if (err) return next(err);
      res.json(country);
    });
});

router.get('/country/sort/ascending', (req, res, next) => {
    console.log();
    Country.find({})
      .sort('name')
      .populate('neighbouring_countries')
      .populate('states')
      .exec((err, country) => {
        if (err) return next(err);
        res.json(country);
      });
  });

  router.get('/country/sort/descending', (req, res, next) => {
    console.log();
    Country.find({})
      .sort({ name: -1 })
      .populate('neighbouring_countries')
      .populate('states')
      .exec((err, country) => {
        if (err) return next(err);
        res.json(country);
      });
  });

  router.get('/country/religion', (req, res, next) => {
    console.log();
    Country.find({})
      .sort({ religions: 1 })
      .populate('neighbouring_countries')
      .populate('states')
      .exec((err, country) => {
        if (err) return next(err);
        res.json(country);
      });
  });


  router.get('/country/continent', (req, res, next) => {
    console.log();
    Country.find({})
      .sort({ continent: 1 })
      .populate('neighbouring_countries')
      .populate('states')
      .exec((err, country) => {
        if (err) return next(err);
        res.json(country);
      });
  });

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  Country.findById(id, (err, country) => {
    if (err) return next(err);
    res.json(country);
  });
});

router.delete('/:id', (req, res, next) => {
    let id = req.params.id;
    Country.findByIdAndDelete(id, (err, book) => {
      if (err) return next(err);
      if (err) return next(err);
      res.json(book);
    });
  });

  module.exports = router;