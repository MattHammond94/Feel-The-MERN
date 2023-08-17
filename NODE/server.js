const http = require('http');
const fs = require('fs');
const fsPromises = require('fs').promises
const path = require('path');

const PORT = process.env.PORT || 4000

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
});

server.listen(PORT, () => console.log(`Server running on ${PORT}`))