const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes')
const apiRoutes = require("./routes/apiRoutes")
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

 app.use(express.static('public'));
 app.use('/api', apiRoutes)
 app.use("/", htmlRoutes)

app.listen(PORT, () => {
    console.log(`API server now on port http://localhost:${PORT}!`);
  });
