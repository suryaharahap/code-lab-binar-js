require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');
const session = require('express-session');
const flash = require('express-flash');
const { PORT = 8080 } = process.env;

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);

const authRouter = require('./routes/auth.routes');
app.use(authRouter);

app.listen(PORT, () => {
  console.log('Server started on port', PORT);
});
