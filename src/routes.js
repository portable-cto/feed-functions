const express = require("express");
const router = new express.Router();

// Ping endpoint
router.get("/", (req, res) => {
  res.json({ message: "API is up." });
});

module.exports = router;
