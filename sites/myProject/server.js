var express = require('express');
var app = express();



app.use(express.static('public'));

// respond with "hello world" when a GET request is made to the homepage
app.listen(3000, function() {
  console.log('Server is listening');
});
