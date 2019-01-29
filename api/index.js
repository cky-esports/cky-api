const express = require('express');
const clans = require('./clans/');

const router = express.Router();

router.get('/clans', clans.get);

module.exports = router;
