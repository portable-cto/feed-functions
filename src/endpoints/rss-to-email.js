const express = require('express');
const router = new express.Router();

router.get('/', function (req, res) {
  res.json({ message: "RSS to Email is up." });
});

module.exports = router;
