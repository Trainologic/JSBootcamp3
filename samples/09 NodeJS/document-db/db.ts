import {EventEmitter} from 'events';
import * as util from 'util';
import * as fs from 'fs';

const statAsync = util.promisify(fs.stat);
const mkdirAsync = util.promisify(fs.mkdir);
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const appendFileAsync = util.promisify(fs.appendFile);

const DB_PATH = `${__dirname}/db`;
const DB_FILE_EXT = '.json';

class DB extends EventEmitter {
    readonly path: string;
    private context: string;

    constructor(context) {
        super();

        this.context = context;

        this.path = `${DB_PATH}/${context}${DB_FILE_EXT}`;

        this._initFs().then(() => this.emit('ready'));
    }

    async save(object: Object) {
        try {
            const dbData = await this._getDbFileData();

            dbData.push(object);

            return await writeFileAsync(this.path, JSON.stringify(dbData));
        } catch (e) {
            throw new Error(`Failed to save data with error: ${e.message}`);
        }
    }

    async delete(id: number) {
        try {
            const dbData = await this._getDbFileData();

            const recordIdx = dbData.findIndex((record) => record.id === id);

            if (recordIdx === -1) {
                throw new Error('No record with given id was found');
            }

            dbData.splice(recordIdx, 1);

            return await writeFileAsync(this.path, JSON.stringify(dbData));
        } catch (e) {
            throw new Error(`Failed to delete data with error: ${e.message}`);
        }
    }

    async update(id: number, object: Object) {
        try {
            const dbData = await this._getDbFileData();

            const recordIdx = dbData.findIndex((record) => record.id === id);

            if (recordIdx === -1) {
                throw new Error('No record with given id was found');
            }

            dbData.splice(recordIdx, 1, (<any>Object).assign(dbData[recordIdx], object));

            return await writeFileAsync(this.path, JSON.stringify(dbData));
        } catch (e) {
            throw new Error(`Failed to update data with error: ${e.message}`);
        }
    }

    async _getDbFileData() {
        try {
            const result = await readFileAsync(this.path, {encoding: 'utf8'});

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