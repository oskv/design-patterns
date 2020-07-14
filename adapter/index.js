const levelup = require('level');
const fsAdapter = require('./levelFsAdapter');
const db = levelup('./fsDB', {valueEncoding: 'binary'});
const fs = fsAdapter(db);

fs.writeFile('file.txt', 'Hello!', () => {
  fs.readFile('file.txt', {encoding: 'utf8'}, (err, res) => {
    console.log(res);
  });
});
//попытка прочитать несуществующий файл
fs.readFile('missing.txt', {encoding: 'utf8'}, (err, res) => {
  console.log(err);
});