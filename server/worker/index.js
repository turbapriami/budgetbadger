const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.WORKER_PORT || 8001;
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.listen(port, () => {
  console.log('WORKER running on port ' + port)
})