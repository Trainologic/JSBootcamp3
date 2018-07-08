const {run} = require("build-utils/process");

const command = process.argv[2];
if(command == "dev") {
    dev();
}
else {
    throw new Error("Unknown command " + command);
}

async function dev() {
    await run("node_modules/.bin/tsc -p server/tsconfig.json");
    await run("node_modules/.bin/nodemon server/main.js", {wait: false});
    await run("react-scripts-ts start");
}
