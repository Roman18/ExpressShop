// import modules
const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./util/path');
//
const app = express();

// settings of express server

app.set('views', 'views'); // default endpoint stores a content for user
app.disable('x-powered-by');

//

app.use(bodyParser.urlencoded({extended: false})); // to parse body
app.use(express.static(path.join(rootDir, 'public'))); // to add static files (css, js)

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000, (error) => {
    if(error === undefined){
        console.log('The server is running on port 3000!');
    }
});