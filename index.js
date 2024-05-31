const os = require('os');

// Get network interfaces
const networkInterfaces = os.networkInterfaces();

// Loop through each network interface
for (const name of Object.keys(networkInterfaces)) {
  for (const net of networkInterfaces[name]) {
    // Skip over non-ipv4 and internal (i.e. 127.0.0.1) addresses
    if (net.family === 'IPv4' && !net.internal) {
      console.log(`Interface: ${name}`);
      console.log(`IP Address: ${net.address}`);
      console.log(`Subnet Mask: ${net.netmask}`);
      console.log(`MAC Address: ${net.mac}`);
      console.log('-------------------------');
    }
  }
}