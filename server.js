const express = require('express');
const app = express();

// PORT variable
const PORT = process.env.PORT || 8080;



// HTML ROUTE
const path = require('path');

module.exports = function(app) {
  app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
  });

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};


// server listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });