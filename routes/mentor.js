var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Mentor = require('../models/Mentor.js');

/* GET ALL MENTORS */
router.get('/', function(req, res, next) {
  Mentor.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE Mentor BY ID */
router.get('/:id', function(req, res, next) {
  Mentor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE MENTOR */
router.post('/', function(req, res, next) {
  Mentor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE MENTOR */
router.put('/:id', function(req, res, next) {
      Mentor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE MENTOR */
router.delete('/:id', function(req, res, next) {
  Mentor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;