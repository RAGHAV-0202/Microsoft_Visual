const logger = (req,res,next)=>{
    const method = req.method;
    const url = req.url;
    const date = new Date().getUTCDate()
    const month = new Date().getUTCMonth()
    const year = new Date().getUTCFullYear()
    const time = new Date().getHours()
    const min = new Date().getMinutes()
    const second = new Date().getSeconds()
    console.log(`${method} ${url} ${time}:${min}:${second} ; ${date}-${month}-${year}`)
    next()
}

module.exports = logger