function main() {
    console.log(1);

    setTimeout(function exec() {
        console.log(2);
    }, 0);

    console.log(3);

    return null
}

main();