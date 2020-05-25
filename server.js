const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
// bring routes
const blogRoutes = require('./routes/blog');

// app
const app = express();

// DB
mongoose.connect(process.env.DATABASE_LOCAL, {useNewUrlParser: true, useCreateIndex: true, 
    useFindAndModify: false, useUnifiedTopology: true})
    .then(() => console.log('DB connected'))
    .catch(err => {
        console.log(err);
    });

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

// cors
if(process.env.NODE_ENV == 'development') {
    app.use(cors({origin: `${process.env.CLIENT_URL}`}));
}

// route middleware
app.use('/api', blogRoutes);

// port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

