const express = require('express');
const router = new express.Router();

/*
module.exports = function(context, cb) {
  const text = context.query.text || '';
  const links = text.match(/\bhttps?:\/\/\S+/gi);
  const tweeters = text.match(/\B@[a-z0-9_-]+/gi);
  const hashtags = text.match(/\B#[a-z0-9_-]+/gi);

  cb(null, {
    text,
    links,
    tweeters,
    hashtags,
  });
};
 */

router.get('/', function (req, res) {
  res.json({ message: "RSS to Email is up." });
});

module.exports = router;
