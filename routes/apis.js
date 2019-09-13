var express = require("express");
var router = express.Router();
var tarotData = require("../db.json");

router.get('/tarot', function(req, res){
    res.json(tarotData);
});

module.exports = router;