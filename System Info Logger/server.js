const fs = require('fs');
const os = require('os');
const path = require('path');


function getSystemInfo() {
    const sysInfo = {
        timestamp: new Date().toISOString(),
        hostname: os.hostname(),
        platform: os.platform(),
        osVersion: os.release(),
        architecture: os.arch(),
        cpuCores: os.cpus().length,
        freeMemory: os.freemem(),
        totalMemory: os.totalmem(),
        uptime: os.uptime()
    };
    return sysInfo;
}

function logSystemInfo() {
    const info = getSystemInfo();
    const logMessage = `
Timestamp: ${info.timestamp}
Hostname: ${info.hostname}
Platform: ${info.platform}
OS Version: ${info.osVersion}
Architecture: ${info.architecture}
CPU Cores: ${info.cpuCores}
Free Memory: ${(info.freeMemory / 1024 / 1024).toFixed(2)} MB
Total Memory: ${(info.totalMemory / 1024 / 1024).toFixed(2)} MB
System Uptime: ${(info.uptime / 3600).toFixed(2)} hours

--------------------------------------
`;

    fs.appendFile('./System-log.txt', logMessage, (err) => {
        if (err) throw err;
        console.log('System information logged successfully!');
    });
}

logSystemInfo();

setInterval(logSystemInfo, 30000);
