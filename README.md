# Easy Logger

A simple wrapper for logging packages that supports switching to simple console logging to disable the underlying logging package.

By default logging uses `pino`, but `pino` can be bypassed by calling `setConsoleOnly(true)`

`npm install num-easy-log`

```JavaScript
const easylog = require('num-easy-log');

const log = easylog.log;

// Logs using pino JSON format
log.error('Error message 1');

// Set the logging level and switch to console-only logging to bypass pino.
log.setLevel(easylog.Level.error);
log.setConsoleOnly(true);

// Logs using plain console logs.
log.info('Should not see this.');
log.error('Error message 2');
```