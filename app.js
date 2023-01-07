const http = require('http')
const port =4000
const server=http.createServer((req,res)=>
{
  if(req.url=='/home')
  {
    res.write("Welcome to home")
  }
  else if(req.url=='/about')
  {
    res.write("Welcome to about us page")
  }
  else if(req.url=='/node')
  {
    res.write("Welcome to node js project");
  }
  else
  {
    res.write("Error: not found")
  }
  res.end();
})

server.listen(port)