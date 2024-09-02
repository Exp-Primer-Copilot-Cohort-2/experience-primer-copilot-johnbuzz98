// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// Create a web server
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/add_comment', function(request, response) {
  var comment = request.body.comment;
  console.log('New comment: ' + comment);
  fs.appendFileSync('comments.txt', comment + '\n');
  response.send('Your comment has been saved: ' + comment);
});

app.get('/comments', function(request, response) {
  var comments = fs.readFileSync('comments.txt', 'utf8');
  response.send(comments);
});

app.listen(3000, function() {
  console.log('Server has started on port 3000');
});
// End of comments.js