const http = require("http");

const server = http.createServer((req, res) => {
  // enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");

  if (req.url === "/api/time" && req.method === "GET") {
    const currentTime = new Date().toISOString();
    res.writeHead(200);
    res.end(JSON.stringify({ time: currentTime }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
