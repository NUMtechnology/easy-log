import { Level, logger as log } from '../src/Logger';

describe('Logger', () => {
  it('can control the silent log level', () => {
    log.setLevel(Level.silent);
    log.silent('Should NOT see this');
    log.trace('Should NOT see this.');
    log.debug('Should NOT see this.');
    log.info('Should NOT see this.');
    log.warn('Should NOT see this.');
    log.error('Should NOT see this.');
    log.fatal('Should NOT see this.');
    log.always('Should see this.');
  });

  it('can control the trace log level', () => {
    log.setLevel(Level.trace);
    log.silent('Should NOT see this');
    log.trace('Should see this.');
    log.debug('Should see this.');
    log.info('Should see this.');
    log.warn('Should see this.');
    log.error('Should see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });

  it('can control the debug log level', () => {
    log.setLevel(Level.debug);
    log.silent('Should NOT see this');
    log.trace('Should NOT see this.');
    log.debug('Should see this.');
    log.info('Should see this.');
    log.warn('Should see this.');
    log.error('Should see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });

  it('can control the info log level', () => {
    log.setLevel(Level.info);
    log.silent('Should NOT see this');
    log.trace('Should NOT see this.');
    log.debug('Should NOT see this.');
    log.info('Should see this.');
    log.warn('Should see this.');
    log.error('Should see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });

  it('can control the warn log level', () => {
    log.setLevel(Level.warn);
    log.silent('Should NOT see this');
    log.trace('Should NOT see this.');
    log.debug('Should NOT see this.');
    log.info('Should NOT see this.');
    log.warn('Should see this.');
    log.error('Should see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });

  it('can control the error log level', () => {
    log.setLevel(Level.error);
    log.silent('Should NOT see this');
    log.trace('Should NOT see this.');
    log.debug('Should NOT see this.');
    log.info('Should NOT see this.');
    log.warn('Should NOT see this.');
    log.error('Should see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });

  it('can control the fatal log level', () => {
    log.setLevel(Level.fatal);
    log.silent('Should NOT see this');
    log.trace('Should NOT see this.');
    log.debug('Should NOT see this.');
    log.info('Should NOT see this.');
    log.warn('Should NOT see this.');
    log.error('Should NOT see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });

  it('can switch to consoleOnly logging', () => {
    log.setLevel(Level.trace);
    log.setConsoleOnly(true);
    log.silent('Should NOT see this');
    log.trace('Should see this.');
    log.debug('Should see this.');
    log.info('Should see this.');
    log.warn('Should see this.');
    log.error('Should see this.');
    log.fatal('Should see this.');
    log.always('Should see this.');
  });
});
