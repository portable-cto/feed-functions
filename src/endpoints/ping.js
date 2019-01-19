const express = require('express');
const router = new express.Router();

router.get('/', function (req, res) {
  res.json({ message: "API is up." });
});

module.exports = router;
