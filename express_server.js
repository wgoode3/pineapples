const express = require("express"),
         port = 8000,
          app = express();

app.use(express.static( __dirname ));

app.get("/", (req, res) => {
    res.sendFile( __dirname + "/views/index.html");
});

app.get("/another", (req, res) => {
    res.sendFile( __dirname + "/views/another.html");
});

app.listen( port, () => {
    console.log(`Listening on port ${port}`);
});