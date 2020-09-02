const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const DB = process.env.DB;


try {
  const MongoClient = require('mongodb').MongoClient;
  const uri = DB;
  mongoose.connect(uri, {
    useNewUrlParser:true,
    useUnifiedTopology:true
  });
} catch(err) {
  console.log(err)
}


// settings
app.set('port', process.env.PORT || 8005);
app.set('views', path.join(__dirname, 'views'));
// app.engine('.ejs', expejs({
//   defaultLayout: 'main',
//   partialsDir: path.join(app.get('views'), 'partials'),
//   layoutsDir: path.join(app.get('views'), 'layouts')      agregar subcarpeta layouts
//    extname: '.ejs',
//    helpers: require('/helpers')      agregando helpers.js en carpeta server
// }));
app.set('view engine', 'ejs');

// importing routes
const indexRoutes = require('./routes/index.routes');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//static files
app.use(express.static(path.join(__dirname,'images')));

// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
