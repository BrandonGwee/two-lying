const express = require('express');
const path = require('path')

const personRouter = require('./backend/routers/personRouter.js');
const articleRouter = require('./backend/routers/articleRouter.js');

const dotenv = require('dotenv');

// Determine the environment, default to 'development' if not set
const env = process.env.NODE_ENV;
// Construct the path to the appropriate .env file
const envFilePath = path.resolve(__dirname, `./.env`);
// Load environment variables from the .env file
dotenv.config({ path: envFilePath });

const app = express();
app.use(express.json());

app.use('/person', personRouter);
app.use('/article', articleRouter);

app.use((req, res, next) => {
    next(createError(404, `Unknown resource ${req.method} ${req.originalUrl}`));
  });
  
  // eslint-disable-next-line no-unused-vars
  app.use((error, req, res, next) => {
    console.error(error);
    res
        .status(error.status || 500)
        .json({ error: error.message || 'Unknown Server Error!' });
  });
  
  module.exports = app;