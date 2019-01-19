const express = require('express');
const router = new express.Router();
const { URL } = require('url');
const fetch = require('node-fetch');
const logger = require("logops");

let auth;

function getScreenshot(urlObject) {
  return auth ? 'https://image.thum.io/get/auth/' + auth + '/' + urlObject.origin : undefined;
}

async function getLogo(urlObject) {
  const baseUrl = 'https://logo.clearbit.com/';

  if (await fetch(baseUrl + urlObject.origin).then(res => res.ok)) {
    return baseUrl + urlObject.origin;
  } else if (await fetch(baseUrl + urlObject.host).then(res => res.ok)) {
    return baseUrl + urlObject.host;
  }

  return undefined;
}

function getUrlObject(url) {
  return new URL(url);
}

async function run(url) {
  const urlObject = getUrlObject(url);

  const logo = await getLogo(urlObject);
  const screenshot = await getScreenshot(urlObject);

  return {
    logo,
    screenshot,
    url,
  };
}

router.get('/', function (req, res, next) {
  auth = req.query.thumb_api_key;
  run(req.query.url)
    .then(images => {
      res.json(images);
    })
    .catch(error => {
      logger.error(error);
      next(error);
    });
});

module.exports = router;
