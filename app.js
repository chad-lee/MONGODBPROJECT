const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');


// express app
const app = express();

// connect to mongodb
const dbURI = 'mongodb://127.0.0.1:27017/employees';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then((result) => {app.listen(3000); console.log('connected to db')})
        .catch((err) => console.log(err));



// register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews');

// middleware & static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));




// routes
app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

app.get('/', (req, res) => {
  res.redirect('/employees');
});

// blog routes
app.use('/employees', blogRoutes);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});