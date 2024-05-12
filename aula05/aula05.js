var http = require('http');

http.createServer((req,res)=>{
    res.end('Hello World! Welcome...')
}).listen(2024);

console.log('O servidor rodando')