const express = require('express');
const cors = require('cors')
const app = express();

const { config } = require('./config/index')
const moviesApi = require('./routes/movies.js')

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers')
const notFoundHandler = require('./utils/middleware/notFoundHandler')

//CORS
app.use(cors());

//middle body parser
app.use(express.json());

//routes
moviesApi(app);

//Catch 404
app.use(notFoundHandler);

//Error middlewares
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port,function() {
    console.log(`Listening http://localhost:${config.port}`);  
})