const path = require('path');
const express = require("express");
const houstRouter = express.Router();
const rootDir = require('../utils/pathUtil')

houstRouter.get("/add-home", (req, res) => {
  console.log(req.url, req.method);
  res.sendFile(path.join(rootDir, 'views', 'addHome.html'));
});

houstRouter.post("/add-home", (req, res) => {
  console.log(req.body);

  res.sendFile(path.join(rootDir, 'views', 'homeAdded.html'));
});

module.exports = houstRouter;
