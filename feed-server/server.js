import http from "http";
import readline from "readline";

let feed = [];

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
  });
  res.end(JSON.stringify(feed));
}).listen(3001);

console.log("Server running at http://localhost:3001/ ; You can start feeding text here! type *clear* to clear");

let readLineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readLineInterface .on('line', (inputLine) => {
  if(inputLine === "*clear*") {
    feed = [];
  } else {
    feed.push(inputLine);
  }
});