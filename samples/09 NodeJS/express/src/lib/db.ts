import * as util from 'util';
import * as fs from 'fs';

const statAsync = util.promisify(fs.stat);
const appendFileAsync = util.promisify(fs.appendFile);
const mkdirAsync = util.promisify(fs.mkdir);
const readFileSync = util.promisify(fs.readFile);

const DB_PATH = `${__dirname}/db`;
const DB_FILE_EXT = '.json';

class DB {
    readonly path: string;
    private context: string;

    constructor(context) {
        this.context = context;

        this.path = `${DB_PATH}/${context}${DB_FILE_EXT}`;

        this._initFs().then(() => console.log('[DB] Ready'));
    }

    async save(object: Object) {
        // implement
    }

    async delete(id: string) {
        // implement
    }

    async update(object: Object) {
        // implement
    }

    async _getDbFileData() {
        try {
            const result = await readFileSync(this.path, {encoding: 'utf8'});

            return JSON.parse(result);
        } catch (e) {
            throw new Error(`Failed to read db file with error ${e}`);
        }
    }

    _initFs() {
        const createDbFile = () => {
            return statAsync(this.path).catch((e) => {
                return appendFileAsync(this.path, JSON.stringify([]));
            });
        };

        // check that db folder exists. If not, create.
        return statAsync(DB_PATH).then(createDbFile).catch((e) => {
            return mkdirAsync(DB_PATH).then(createDbFile);
        });
    }
}

export default DB;