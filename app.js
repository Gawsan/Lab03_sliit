const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World! <Br></Br> Gawsan");
    res.end();
  })
  .listen(8081);
