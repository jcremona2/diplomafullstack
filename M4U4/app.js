var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// ## variable de dependencia
var session = require('express-session');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// ## configuracion de session
app.use(session({
  secret: 'hsbdquisd23e21qwd0wqi',
  resave: false,
  saveUninitialized: true
}));


// ## Configuracion de Index ##
// vamos a chequear si existe un usuario conectado verificando el nombre de la session
app.get("/", function (req, res) {
  var conocido = Boolean(req.session.nombre) // esto nos va a determinar si hay usuario loggeado
  // rederizar el index.hbs con los parametros en el diccionario
  res.render('index', {
    title: 'Sesiones en Express.js',
    conocido: conocido,
    nombre: req.session.nombre
  });

});


// ## Llamado Ingreso de Session ##
app.post('/ingresar', function (req, res) {
  // capturo datos del formulario
  // si existe 'nombre' en el post lo guarda en una variable de session
  if (req.body.nombre) {
    req.session.nombre = req.body.nombre
  }
  res.redirect('/'); // redirecciona a index

});

// ## Llamado de Deslogueo ##
app.get('/salir', function (req, res) {
  req.session.destroy();// destruye la session
  res.redirect('/') // redirecciona a index
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
