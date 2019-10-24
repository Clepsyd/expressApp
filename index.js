const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
  console.log("Request: ", req.method, req.url);
  console.log("Response: ", res.statusCode)
});

const server = app.listen(port, function () {   
   console.log("Example app listening at port %s", port)
});