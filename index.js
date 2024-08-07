
const express = require("express");
const resultsRoute = require("./routes/resultsRoute");
require("./config/database");
const cors = require('cors');
const compression = require('compression');
const heroku = require('heroku');

const app = express();

var PORT = process.env.PORT || 3000;

app.use("/api/v1/results", resultsRoute);

app.use(cors());
app.use(compression());

app.listen(PORT, () => {
     console.log(`App is running on port ${PORT}`)
 })
