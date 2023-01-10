const fs= require('fs');

const requestHandler=(req,res)=>
{
  const url=req.url;
const method=req.method;
// if(url ==='/')
// {
//   res.write('<html>')
//   res.write('<head><title>HELLO EVERY ONE</title></head>')
//   res.write('<body>')
//   res.write('<form action ="/message" method="POST"> <input type="text" name="message"/><button type="submit">Send</button></form>')
//   res.write('</body>')
//   res.write('</html>')
//    return res.end();
// }
if(url ==='/')
{
  fs.readFile("message.txt",{encoding:"utf-8"},(err,data)=>
  {
    if(err)
    {
      console.log("Error: File not found")
    }
      console.log(`data from file =`+ data)
      res.write("<html>")
      res.write("<head><title>my page</title></head>")
      res.write(`<body>${data}</body>`)
      res.write('<body><form action ="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form></body>')
      res.write("</html>")
  return res.end();
  });
}
if(url==='/message' && method ==='POST')
{
  const body=[];
  req.on('data',(chunk)=>
  {
    //console.log(chunk);
    body.push(chunk);
  })

  req.on('end',()=>
  {
    const parsedbody=Buffer.concat(body).toString();
    //console.log(parsedbody);
    const message=parsedbody.split('=')[1];
    fs.writeFile('message.txt',message,(err)=>
    {
      res.statusCode = 302;
      res.setHeader('Location','/')
      return res.end()
    });
    
  });
}
}
module.exports=requestHandler

//exports.handler= requestHandler;

// module.exports={
//   handler:requestHandler,
//   SomeText: "Some hard Code"
// }