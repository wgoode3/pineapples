const http = require("http"),
        fs = require("fs"),
      port = 8000;

const server = http.createServer( (req, res) => {
    console.log(req.url);

    if(req.url === "/") {
        fs.readFile("./views/index.html", 'utf8', (err, data) => {
            if(err) { console.log(err); }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if(req.url === "/another") {
        fs.readFile("./views/another.html", 'utf8', (err, data) => {
            if(err) { console.log(err); }
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
        });
    } else if(req.url.endsWith(".css")) {
        fs.readFile("." + req.url, 'utf8', (err, data) => {
            if(err) { console.log(err); }
            res.writeHead(200, {'Content-Type': 'text/css'} );
            res.write(data);
            res.end();
        });
    } else if(req.url.endsWith(".jpeg")) {
        fs.readFile("." + req.url, (err, data) => {
            if(err) { console.log(err); }
            res.writeHead(200, {'Content-Type': 'image/jpeg'} );
            res.write(data);
            res.end();
        });
    } else {
        res.writeHead(404);
        res.end('File not found!!!');
    }
});

server.listen( port, () => {
    console.log(`Listening on port ${port}`);
});