
const express =require('express');
const app = express();
const bodyparser=require('body-parser');

const adminproduct =require('./routes/admin');
const shopproduct=require('./routes/shop');

const port =4000

app.use(bodyparser.urlencoded({executable:false}))
app.use(adminproduct);
app.use(shopproduct);

app.use((req,res,next)=>
{
   res.status(404).send('<h1>404 Error Page not found</h1>')
})

app.listen(port)