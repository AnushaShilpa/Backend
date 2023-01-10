//const fs = require('fs');
const http=require('http')
const port =4000
const routes=require('./route')
const server= http.createServer(routes);
server.listen(port)