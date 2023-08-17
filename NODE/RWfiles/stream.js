// When working with larger files The below is a much better approach to prevent a mass of data being read at once.

const fs = require('fs')

const rs = fs.createReadStream('./files/text2.txt', {encoding: 'utf8'});

const ws= fs.createWriteStream('./files/new-text2');

// rs.on('data', (dataChunk) => {
//   ws.write(dataChunk)
// })

// The below does the same as above (lines 9-11)
rs.pipe(ws);