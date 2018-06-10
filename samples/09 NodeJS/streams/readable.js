const fs = require('fs');

const stream = fs.createReadStream(`${__dirname}/readable-file`, {highWaterMark: 1});
stream
    .on('data', (buf) => {
    console.log(buf.toString());
})
    .on('end', (buf) => {
        console.log('Stream ended', buf);
    })
    .on('error', (err) => {
        console.log('An error has happened')
    });