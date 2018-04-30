const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function RootMenu(callback) {
    rl.question('Give a name for your task list: ', function (answer) {
        if (!answer) {
            console.log('Well, I need a name..');

            return RootMenu(callback);
        }

        callback(answer);
    });
}

module.exports.RootMenu = RootMenu;