var express        = require('express');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var cors           = require('express-cors');

var app = express();

var common = require("./src/libs/common");

app.use(cors({
    allowedOrigins: [
        'http://127.0.0.1:3000',
        'http://localhost:3000',
        'connect-four.s3-website-sa-east-1.amazonaws.com'
    ]
}));

var port = process.env.PORT || 1313; 		// set our port// load the config

app.use(bodyParser());
app.use(methodOverride());

var router = require('./src/routes/main_route')(app);

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);



