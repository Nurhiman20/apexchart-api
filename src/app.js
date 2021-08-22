const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/data/line-chart', function(req, res) {
    let dataChart = {
        x_axis: {
            series: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
            name: "Test X Axis"
        },
        y_axis: {
            series: [30, 40, 45, 50, 49, 60, 70, 91],
            name: "Series-1"
        }
    };
    res.send(dataChart);
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});