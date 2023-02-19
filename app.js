// import modules
const path = require('path');
const express = require('express');

const bodyParser = require('body-parser');

const adminRoute = require('./routes/admin');
const shopRouter = require('./routes/shop');
const rootDir = require('./util/path');
const pageNotFoundControllers = require('./controllers/404');
//
const app = express();
const port = 3000;

// settings of express server

app.set('views', 'views'); // default endpoint stores a content for user
app.set('view engine', 'ejs'); //default template engine
app.disable('x-powered-by');

//

app.use(bodyParser.urlencoded({extended: false})); // to parse body
app.use(express.static(path.join(rootDir, 'public'))); // to add static files (css, js)

app.use('/admin', adminRoute);
app.use(shopRouter);

app.use(pageNotFoundControllers.getNotFoundPage);

app.listen(port, (error) => {
    if(error === undefined){
        console.log(`The server is running on port ${port}!`);
    }
});