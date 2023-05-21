let http = require("http");
let fs = require("fs");

const server = http.createServer((request, response) => {
  fs.readFile(
    "/Users/eyosias/Documents/GitHub/lab 11 Eyosias/Lecture10-NodeJsIntro_Modules.pdf",
    (err, data) => {
      if (err) {
        response.writeHead(404, { "content-type": "text/html" });
        console.log(err);
        response.end("pdf file not found");
      } else {
        response.writeHead(200, { "content-type": "application/pdf" });
        response.end(data);
      }
    }
  );
});

server.listen(4000, "127.0.0.1", () => {
  console.log("server has started");
});
