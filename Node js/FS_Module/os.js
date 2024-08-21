const os = require("os");
/*
console.log("CPU Architecture" + os.arch());
console.log("free memory", +os.freemem());
console.log("free memory", +os.totalmem());
console.log("Network interfaces", + JSON.stringify(os.networkInterfaces()));
console.log('OS default temp dir:' +os.tmpdir());
*/

console.log('Endianess:' + os.endianness());
console.log('Hostname:' + os.hostname());
console.log('OS type:' + os.type());
console.log('OS Platform:' + os.platform());
console.log('OS release:' + os.release());

