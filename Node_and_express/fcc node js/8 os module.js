const os = require('os');

// info about current user
const user = os.userInfo()

//uptime
const uptime = os.uptime()
// console.log(uptime/60 + "minutes")


const currentOS = {
    name : os.type(),
    release : os.release(),
    version : os.version(),
    totalMem : os.totalmem(),
    freeMem : os.freemem(),
}

console.log(currentOS)