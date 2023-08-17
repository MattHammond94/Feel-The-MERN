const fs = require('fs')

// existsSync checks for the existence of specified file/dir

if (!fs.existsSync('./new')) {
  fs.mkdir('./new', (err) => {
    if (err) throw (err);
    console.log(`Directory created within: ${__dirname}`)
  })
}

// REMOVE =>

if (fs.existsSync('./new')) {
  fs.rmdir('./new', (err) => {
    if (err) throw (err);
    console.log('Directory removed')
  })
}
