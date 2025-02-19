const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');
require('./aop');

function readFile(path) {
  return readFileSync(resolve(__dirname, path), 'utf8');
}

function writeFile(path, data) {
  return writeFileSync(resolve(__dirname, path), JSON.stringify(data));
}

function fileOperation(path, fn) {
  return fn.before(() => {
    return JSON.parse(readFile(path) || '[]');
  }).after((data) => {
    writeFile(path, data)
    return data
  })()
}

module.exports = {
  fileOperation
}