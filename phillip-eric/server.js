'use strict';

const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();
const root = {root: 'public'};

// COMMENTED: our files live in a public directory as that is what
// we want to show our users. Express serves our files using the 
// express.static()
app.use(express.static('public'));

app.get('/new', (req, res) => res.sendFile('/new.html', root));

app.listen(PORT, () => console.log('working on ', PORT));
// REVIEW: POST route needs to parse the body passed in with the request. express.urlencoded() attaches "middleware" to do that
app.post('/articles', express.urlencoded(), function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
});

app.use((req,res) => res.sendStatus(404));
