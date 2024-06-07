const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3001;

var ClickCount = 0;
const server = createServer((req, res) => {
        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        res.setHeader('Access-Control-Allow-Credentials', true);
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        console.log(req.url);
        if(req.url == "/ADDClick"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        ClickCount++;
        res.end('Liczba Kliknięć: ' + ClickCount);
        return;
    } else
    if(req.url == "/CheckClick"){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Liczba Kliknięć: ' + ClickCount);
        return;
    }

    
    else{
  res.statusCode = 404;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Wrong PATH');
    }


  
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});