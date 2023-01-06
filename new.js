const http = require('http');

const server=http.createServer((req ,res)=>
{
  res.write('Anusha');
  res.end();
  
});

server.listen(4000);