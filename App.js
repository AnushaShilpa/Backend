const express = require('express');
const bodyParser = require('body-parser');
 const port=4000
const app = express();
const path=require("path")

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contact = require('./routes/contact');
app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);
app.use(contact);

app.use('/contact',(req, res, next) => {
    res.status(404).sendFile(path.join(__dirname,'views','sucess.html'));
});
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname,'views','error.html'));
});

app.listen(port);
