const fs = require('fs');

const logger = new console.Console(process.stdout,process.stderr);


logger.warn = function (str) {
    // this.log('\x1b[33;101m',str, '\x1b[0m')
    this.log('\x1b[33m',str,'\x1b[0m')
}

logger.error = function (str) {
    // this.log('\x1b[33;101m',str, '\x1b[0m')
    this.log('\x1b[31m',str,'\x1b[0m')
}

logger.info = function (str) {
    // this.log('\x1b[33;101m',str, '\x1b[0m')
    this.log('\x1b[34m',str,'\x1b[0m')
}


logger.warn('Nah Webonah')

logger.info('El')

logger.error('Mio')