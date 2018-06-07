const fs = require('fs');

const readStream = fs.createReadStream(`${__dirname}/readable-file`);

const writeStream = fs.createWriteStream(`${__dirname}/writable-file`);

// Piping into writable stream
readStream.pipe(writeStream);

