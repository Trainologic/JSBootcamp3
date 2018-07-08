"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const util_1 = require("util");
const fs = require("fs");
const readdir = util_1.promisify(fs.readdir);
const readFile = util_1.promisify(fs.readFile);
const writeFile = util_1.promisify(fs.writeFile);
const PICTURES_FOLDER = path.join(__dirname, "pics");
const CONFIG_FILE_PATH = path.join(__dirname, "config.json");
const port = 8080;
const app = express();
let config;
async function main() {
    config = await loadConfig();
    app.use(express.json({
        limit: '50mb'
    }));
    app.get("/api/picture", getAllPictures);
    app.post("/api/picture", postPicture);
    app.listen(port, function () {
        console.log(`Server is running on port ${port}`);
    });
}
async function getAllPictures(req, res) {
    try {
        const result = [];
        const files = await readdir(PICTURES_FOLDER);
        for (const fileName of files) {
            const filePath = path.join(PICTURES_FOLDER, fileName);
            const buffer = await readFile(filePath);
            const content = buffer.toString('base64');
            const fileType = path.extname(fileName).substring(1);
            result.push({
                dataUrl: `data:image/${fileType};base64,${content}`,
                name: fileName,
            });
        }
        res.send(result);
    }
    catch (e) {
        res.statusCode = 500;
        res.end();
    }
}
async function postPicture(req, res) {
    try {
        const pic = req.body;
        const index = pic.dataUrl.indexOf(",");
        if (index == -1) {
            throw new Error("Invalid dataUrl format");
        }
        const dataUrl = pic.dataUrl.substring(index);
        const buffer = Buffer.from(dataUrl, "base64");
        const fileName = "file" + (config.nextFileId++) + path.extname(pic.name);
        const filePath = path.resolve(PICTURES_FOLDER, fileName);
        await writeFile(filePath, buffer);
        await saveConfig(config);
        res.send({
            ok: true,
        });
    }
    catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.statusMessage = err.message;
        res.end();
    }
}
async function loadConfig() {
    const res = JSON.parse(await readFile(CONFIG_FILE_PATH, "utf8"));
    return res;
}
async function saveConfig(config) {
    await writeFile(CONFIG_FILE_PATH, JSON.stringify(config), "utf8");
}
main();
//# sourceMappingURL=main.js.map