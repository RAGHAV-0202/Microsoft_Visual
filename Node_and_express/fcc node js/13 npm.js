// npm --version

//npm i <package name> <local>
// npm install -g <packageName>   (global)

//package.json - manifest fule stores important files
//npm init sep by step press enter to skip
// npm init -y (everything default)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems)