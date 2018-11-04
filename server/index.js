const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const request = require("request");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', function (req, res) {
  request("https://randomuser.me/api/?nat=gb&results=5", (error, response, body) => {
    try {
      if (!error) {
        res.json(JSON.parse(body).results);
      } else {
        res.send(404);
      }
    } catch(e) {
      res.send(500);
    }
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
