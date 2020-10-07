const express = require('express');

var router = express.Router();


router.get('/', (req, res) => {
    res.json('my sample text');
});


module.exports = router;