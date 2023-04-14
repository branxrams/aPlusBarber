var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

/* GET users listing. */
router.get('/', mainController.index);


module.exports = router;
