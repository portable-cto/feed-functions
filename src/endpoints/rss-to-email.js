const express = require('express');
const router = new express.Router();
const RssToEmail = require('rss-to-email');
const logger = require("logops");

router.post('/', function (req, res, next) {
  const config = req.body || {};
  const rssToEmail = RssToEmail(config);
  rssToEmail.getEmail(config.format || 'html')
    .then(email => {
      res.writeHead(200, {'Content-Type': 'text/html '});
      res.end(email);
    }).catch(error => {
      logger.error(error);
      next(error);
  });
});

module.exports = router;
