require('newrelic');
const cors = require('cors');
const queue = require('express-queue');
const express = require('express');
const compression = require('compression');
const router = require('./routes');
const CONFIG = require('./config');
const { db } = require('./database/DBconfig');

const app = express();
app.use(cors());
app.use(queue({ activeLimit: 500, queuedLimit: 10000 }));

app.use(compression());

app.use(express.json());

app.use(express.static(__dirname.concat('/../public')));

app.use('/location', router);

app.listen(CONFIG.APP.PORT, async () => {
  console.log('Listening on port:', CONFIG.APP.PORT);
});
