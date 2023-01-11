
const express =require('express');
const app = express();
const port =4000

app.use((req,res,next)=>{
  res.send('<h1>Hello Welcome To Express</h1>')
  console.log("i am middle ware")
  next();
  
})
app.use((req,res,next)=>{
  console.log('hard work leads to sucess')
  
})
// const server= http.createServer(app);
app.listen(port)