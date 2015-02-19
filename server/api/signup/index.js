'use strict';

var express = require('express');
var controller = require('./signup.controller');
var auth = require('../../auth/auth.service');
var router = express.Router();

router.post('/', controller.create);

router.get('/',       auth.hasRole('admin'), controller.index);
router.post('/:id',   auth.hasRole('admin'), controller.grant);
router.delete('/:id', auth.hasRole('admin'), controller.destroy);

module.exports = router;
