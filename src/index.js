const http = require("http");
const PORT = 3000;
const handler = (request, response) => {
  return response.end("Hey")
}

http.createServer(handler).listen(PORT, () => console.log('Server running at ', PORT))