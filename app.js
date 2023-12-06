const express = require('express');
const morgan = require('morgan');
const app = express();
const userRoute = require('./routes/userRoutes');

app.use(morgan('dev'));
app.use(express.json());//middleware para usar json
app.use('/api/v1/users', userRoute);
module.exports = app;

