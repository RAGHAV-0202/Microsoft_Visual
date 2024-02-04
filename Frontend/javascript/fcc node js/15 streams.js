const {createReadStream} = require('fs');

const stream = createReadStream('Frontend/javascript/node js/content/first.txt',{encoding : 'utf8'})

// default 64kb
//last buffer - remaider
// higerWaterMark - contril size 
// const stream = createReadStream('Frontend/javascript/node js/content/first.txt', {highWaterMark})
// const stream = createReadStream('Frontend/javascript/node js/content/first.txt', {encoding : 'utf8'})

stream.on('data',(result)=>{
    console.log(result)
})

