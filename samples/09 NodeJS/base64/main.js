const fs = require("fs");
const {promisify} = require("util");
const readFile = promisify(fs.readFile);

main();


async function main() {
    const res = await readFile("C:\\Windows\\Web\\Wallpaper\\Theme2\\img7.jpg");
    console.log(res);

    const str = res.toString("base64");

    const buf = Buffer.from(str, "base64");
    console.log(buf);

    // writeFile("1.txt", str, "utf8");

    //console.log(str);
}
