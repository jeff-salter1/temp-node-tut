const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime is seconds
//const hours= ((os.uptime()/60)/60)
//console.log(hours)
console.log(`The Sysyem Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)