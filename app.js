//Npm modules.
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Pages routes.
var loginRouter = require('./routes/login');
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var customersRouter = require('./routes/customers');
var ordersRouter = require('./routes/orders');
var reportsRouter = require('./routes/reports');

var usersRouter = require('./routes/users');

var app = express();

// view engine setup.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Middlewares.
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(logger('dev'));

//Connect routes with views.
app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/products', productsRouter);
app.use('/customers', customersRouter);
app.use('/orders', ordersRouter);
app.use('/reports', reportsRouter);

app.use('/users', usersRouter);

// catch 404 and forward to error handler.
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

