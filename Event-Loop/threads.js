// this file is created to benchmark that PBK do have to function and v r using this to detect that node is truly single threded or not.
const crypto = require('crypto');

const start = Date.now();

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    console.log('1:',Date.now()-start);
})

crypto.pbkdf2('a','b',100000,512,'sha512', ()=>{
    console.log('2:',Date.now()-start);
})