const zlib = require('zlib');
const fs = require('fs');

const compress = zlib.createGzip();

const readableStream = fs.createReadStream(`${__dirname}/readable-file`);
const writableStream = fs.createWriteStream(`${__dirname}/compresses-file`);

readableStream
    .pipe(compress)
    .pipe(writableStream);