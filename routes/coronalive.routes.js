const express = require('express');
const router = express.Router();
const liveData = require('../database/db.json');

router.get('/livetracker', (req, res) => {
    res.status(200).json(liveData);
});

module.exports = router;