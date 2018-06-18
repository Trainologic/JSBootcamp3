import DB from './db';

const db = new DB('users');

db.on('ready', () => {
    console.log('[DB] ready');

    db.save({id: Math.ceil(Math.random() * 10000), name: 'FooBar30000'}).then(() => {});
});