try {
    const ObjectPool = require("./objectPool");

    const pool = new ObjectPool();

    const ori = {
        id: 1,
        name: "Ori",
    };

    const likeOriButNotOri = {
        id: 1,
        name: "Ori",
    };

    pool.add(ori);
    pool.add(ori);
    pool.add(ori);

    if (pool.contains(likeOriButNotOri) != false) {
        throw new Error("contains failed")
    }

    console.log("PASS");
}
catch(err){
    console.log("FAIL", err.message);
}



