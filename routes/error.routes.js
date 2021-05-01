const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({message: '404 Get Not Found'});
});

module.exports = router;