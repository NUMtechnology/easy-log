const easylog = require('../dist/index.js');

const log = easylog.log;

// Logs using pino JSON format
log.error('Error message 1');

log.setLevel(easylog.Level.error);
log.setConsoleOnly(true);

// Logs using plain console logs.
log.info('Should not see this.');
log.error('Error message 2');
