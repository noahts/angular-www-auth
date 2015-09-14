/**
 * Created by noah on 14/9/15.
 */

var express = require('express');
var Faker = require('faker');
var cors = require('cors');

var app = express();
app.use(cors());

app.get('/res', function(req, res) {
  res.json(Faker.helpers.createCard());
});

app.listen(4000);