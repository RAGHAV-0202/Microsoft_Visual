const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('D:/Microsoft Visual/Frontend/javascript/node js/content/first.txt' , 'utf-8')
const second = readFileSync('Frontend/javascript/node js/content/second.txt' , 'utf-8')

// console.log(first)
// console.log(second)

writeFileSync('Frontend/javascript/node js/content/result-sync.txt' , `here is the result ${first} and ${second}` , {flag : 'a'})