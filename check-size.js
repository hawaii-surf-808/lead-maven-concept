import fs from 'fs';
const size = fs.statSync('src/logo-mih.png').size;
console.log('Size:', size);
