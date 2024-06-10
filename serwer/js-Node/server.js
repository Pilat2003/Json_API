const { createServer } = require('node:http');
const hostname = '127.0.0.1';
const port = 3001;

var ClickCount = 0;
var text = "HELLO WORLD";

const server = createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");


  if (req.url == "/API/CLICK/CHECK") {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    ClickCount++;
    res.end('Liczba Kliknięć: ' + ClickCount);
    return;
  } else
    if (req.url == "/API/CLICK/CLICK") {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Liczba Kliknięć: ' + ClickCount);
      return;
    }
    else
      if (req.url == "/API/TEXT/SHOW") {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Liczba Kliknięć: ' + ClickCount);
        return;
      }
      else
        if (req.url == "/API/TEXT/EDIT") {
         

          let body = '';
          req.on('data', chunk => {
              body += chunk.toString();
          });
          req.on('end', () => {
            res.statusCode = 200;

            console.log(body);
              console.log(typeof(body));
              for (var i = 0; i < body.length; i++) {
                console.log(body.charAt(i))
              }
              var KURWA = body;
              console.log(JSON.parse(KURWA));
          });
           //var j = JSON.parse(body);
               //res.end(j);
          //var json = JSON.parse("{\"Text\":\"text\"}");
          //console.log(body)

         
          return;
        }


        else {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.end('Wrong PATH');
        }



});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});