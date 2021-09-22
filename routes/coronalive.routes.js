const express = require('express');
const router = express.Router();

const liveData = {
    active: 5420014,
    recoverd: 442524,
    deths: 457255
}

router.get('/livetracker', (req, res) => {
    res.status(200).json(liveData);
});

module.exports = router;