import { ICommandLineContext } from '../interface';
import { Logger } from 'loglevel';
import { logger as rootLogger } from '@mystikonetwork/utils';

export class CommandLineExecutor {
  protected readonly context: ICommandLineContext;

  protected readonly logger: Logger;

  constructor(context: ICommandLineContext) {
    this.context = context;
    this.logger = rootLogger.getLogger(this.constructor.name);
  }
}
