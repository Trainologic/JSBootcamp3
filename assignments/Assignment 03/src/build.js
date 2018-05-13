const colors = require("colors/safe");
const {promisify} = require("util");
const child_process = require("child_process");
const spawn = promisify(child_process.spawn);
const path = require("path");
const opener = require("opener");

const commands = {
    dev,
};

init();

function init() {
    const command = process.argv[2];
    const func = commands[command];
    if (!func) {
        console.log(colors.red("Command " + command + " was not found"))
        return;
    }

    func();
}

async function dev() {
    const port = 3000;

    spawn(path.normalize("node_modules/.bin/http-server"), ["-p", port], {
        shell: true,
        stdio: "inherit"
    });

    opener(`http://localhost:${port}`);
}


