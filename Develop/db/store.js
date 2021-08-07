const fs = require('fs');
const util = require('util');

const read = util.promisify(fs.readFile);
const write = util.promisify(fs.readFile);

// const generateID = require('uuid');


class Store {
    readFunction() {
        return read('/db.json', 'utf8');
    }
    writeFunction(notes) {
        return write('/db.json', JSON.stringify(notes))
    }
}
module.exports = new Store();
