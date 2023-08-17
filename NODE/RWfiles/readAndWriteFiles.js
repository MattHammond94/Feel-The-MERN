const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

// Both the below read file methods work however the first is better
fs.readFile(path.join(__dirname, 'files', 'text1.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data)
})

fs.readFile('./files/text.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString())
})

// Having the appendFile and rename within the same call ensures the file exists first before appending to it.(Stops issues caused by async)
// --------------------------------------

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'A new text file', (err) => {
//   if (err) throw err;
//   console.log("Write completed")

//   fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ', Tester', (err) => {
//     if (err) throw err;
//     console.log("Append completed")

//     fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newName.txt'), (err) => {
//       if (err) throw err;
//       console.log("Rename complete")
//     })
//   })
// })

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, 'files', 'text.txt'), 'utf8')
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, 'files', 'text.txt'), data);  // Unlink is used to delete files.

    await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
    await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nThis is a new line');
    await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseRenamed.txt'));
    const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseRenamed.txt'), 'utf8');
    console.log(newData)
  } catch (err) {
    console.error(err);
  }
}

fileOps()

process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
})
