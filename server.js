'use strict'
let express = require('express');

// Create our app
let app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  if(req.headers['x-forwarded-proto'] === 'http') {
    next();
  } else if (req.headers['host'] === `localhost:${PORT}`) {
    next();
  } else {
    res.redirect(`http://${req.hostname + req.url}`);
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port 3000');
});
