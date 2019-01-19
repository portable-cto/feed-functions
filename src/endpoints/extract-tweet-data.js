const express = require('express');
const router = new express.Router();

router.get('/', function (req, res) {
  const text = req.query.text || '';
  const links = text.match(/\bhttps?:\/\/\S+/gi);
  const tweeters = text.match(/\B@[a-z0-9_-]+/gi);
  const hashtags = text.match(/\B#[a-z0-9_-]+/gi);

  res.json({
    text,
    links,
    tweeters,
    hashtags,
  });
});

module.exports = router;
