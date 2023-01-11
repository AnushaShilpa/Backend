
const express =require('express');
const app = express();
const bodyparser=require('body-parser');

const port =4000

app.use(bodyparser.urlencoded({executable:false}))
app.use('/add-product',(req,res,next)=>
{
  
  res.send('<form action="/product" method="POST"><input type="text" name="title"/> <input type="number" name="size"/><button type="submit">Add product</button></form>')
  

});

app.use('/product',(req,res,next)=>
{
  console.log(req.body);
  res.redirect('/');
})
app.use('/',(req,res,next)=>
{
  res.send('<h1>Wecolme to Node Js</h1>');
})

app.listen(port)