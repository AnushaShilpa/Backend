const http=require('http')
const port =4000
const server= http.createServer((req,res)=>
{
  res.write('<html>')
  res.write('<head><title>HELLO EVERY ONE</title></head>')
  res.write('<body>')
  res.write('THIS IS MY FIRST HTML PAGE')
  res.write('</body>')
  res.write('</html>')
  res.end();
})
server.listen(port)