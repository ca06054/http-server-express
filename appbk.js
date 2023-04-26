
const http = require('http');

const server = http.createServer((req, res) => {
    console.clear();
    console.log(req);
   res.setHeader('Content-Type','text/csv');
   res.setHeader('Content-Disposition','attachment; filename="example.csv"');
    res.writeHead(200, {
        'Content-Type': 'application/csv'
    });

   
    res.write('id,nombre\n1,Henry Cortez\n2,Luis Marroquin');
    res.end();
}).listen(8080);

console.log('escuchando en el puerto 8080');