const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csurf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const { environment } = require('./config');
const isProduction = environment === 'production';
const routes = require('./routes');

//initialize express app
const app = express();
//connect morgan middleware for logging info about req and res
app.use(morgan('dev'));
//adds cookie parser middleware for parsing cookies
//and express.json middleware for parsing JSON bodies of requests
//with content-type of application/json
app.use(cookieParser());
app.use(express.json());


if (!isProduction) {
    // enable cors only in development
    app.use(cors());
  }
  // helmet helps set a variety of headers to better secure your app
  app.use(helmet({
    contentSecurityPolicy: false
  }));

  // Set the _csrf token and create req.csrfToken method
  app.use(
    csurf({
      cookie: {
        secure: isProduction,
        sameSite: isProduction && "Lax",
        httpOnly: true,
      },
    })
  );

app.use(routes);

module.exports = app;
