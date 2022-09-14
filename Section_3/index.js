const http = require("http");

const server = http.createServer(function (req, res) {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
});

server.listen(3000);
