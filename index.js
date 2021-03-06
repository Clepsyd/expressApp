const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const viewsFolder = path.join(__dirname + '/views')

const potate = require('./potatifier')

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.sendFile(`${viewsFolder}/index.html`);
  console.log("Request: ", req.method, req.url);
  console.log("Response: ", res.statusCode)
});

app.get('/name-your-potato', function (req, res) {
  res.render('name-your-potato.pug', {
    potatoName: potate(req.query['name'])
  });
})

app.listen(port, function () {   
   console.log("Example app listening at port %s", port)
});