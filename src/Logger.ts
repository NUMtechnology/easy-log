import pino from 'pino';

export interface Logger {
  setConsoleOnly(consoleOnly: boolean);
  silent(m: string): void;
  trace(m: string): void;
  debug(m: string): void;
  info(m: string): void;
  warn(m: string): void;
  error(m: string): void;
  fatal(m: string): void;
  always(m: string): void;
  setLevel(l: Level): void;
}

export enum Level {
  silent = 0,
  trace = 10,
  debug = 20,
  info = 30,
  warn = 40,
  error = 50,
  fatal = 60,
}

export class Options {
  consoleOnly: boolean;
  level: Level;

  constructor(consoleOnly: boolean, level: Level) {
    this.consoleOnly = consoleOnly;
    this.level = level;
  }
}

const internalLogger = pino();

class LoggerImpl implements Logger {
  private options: Options;

  constructor(options: Options) {
    this.options = options;
  }

  setConsoleOnly(consoleOnly: boolean) {
    this.options.consoleOnly = consoleOnly;
  }

  silent(_m: string): void {}

  trace(m: string): void {
    if (this.options.level <= Level.trace) {
      if (this.options.consoleOnly) {
        console.log(m);
      } else {
        internalLogger.trace(m);
      }
    }
  }

  debug(m: string): void {
    if (this.options.level <= Level.debug) {
      if (this.options.consoleOnly) {
        console.log(m);
      } else {
        internalLogger.debug(m);
      }
    }
  }

  info(m: string): void {
    if (this.options.level <= Level.info) {
      if (this.options.consoleOnly) {
        console.info(m);
      } else {
        internalLogger.info(m);
      }
    }
  }

  warn(m: string): void {
    if (this.options.level <= Level.warn) {
      if (this.options.consoleOnly) {
        console.warn(m);
      } else {
        internalLogger.warn(m);
      }
    }
  }

  error(m: string): void {
    if (this.options.level <= Level.error) {
      if (this.options.consoleOnly) {
        console.error(m);
      } else {
        internalLogger.error(m);
      }
    }
  }

  fatal(m: string): void {
    if (this.options.level <= Level.fatal) {
      if (this.options.consoleOnly) {
        console.error(m);
      } else {
        internalLogger.fatal(m);
      }
    }
  }

  always(m: string): void {
    console.log(m);
  }

  setLevel(l: Level): void {
    this.options.level = l;
    switch (l) {
      case Level.silent:
        internalLogger.level = 'silent';
        break;
      case Level.trace:
        internalLogger.level = 'trace';
        break;
      case Level.debug:
        internalLogger.level = 'debug';
        break;
      case Level.info:
        internalLogger.level = 'info';
        break;
      case Level.warn:
        internalLogger.level = 'warn';
        break;
      case Level.error:
        internalLogger.level = 'error';
        break;
      case Level.fatal:
        internalLogger.level = 'fatal';
        break;
      default:
        internalLogger.level = 'info';
    }
  }
}

export const logger: Logger = new LoggerImpl(new Options(false, Level.info));
