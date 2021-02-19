const express = require('express');
const app = express();

const { config } = require('./config/index')

app.get('/', function(req, res) {
    res.send('hello world');
});

app.get('/json', function(req, res) {
    res.json({ hello: 'world'});
});

app.get('/check_leap_year/:year', function(req, res) {
    
    const year = req.params.year;

    const day = new Date(year, 1, 29) + 1;
    let msg;

    if (day.toString().includes('Feb')) {
        msg = `This year (${year}) is a leap year`;
    } else {
        msg = `This year (${year}) is not a leap year`;
    }
    res.json({ res: msg});

});

app.listen(config.port,function() {
    console.log(`Listening http://localhost:${config.port}`);  
})