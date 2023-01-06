
const http = require('http');
const fs = require('fs')

const server=http.createServer((req ,res)=>
{
    res.writeHead(200,{'content-Type':'text/html'})
    fs.readFile('new.html',function(error ,data)
    {
      if(error)
      {
        res.writeHead(404)
        res.write("Error:File not found")
      }
      else{
        res.write(data)
      }
      res.end()
    })
});

server.listen(4000);