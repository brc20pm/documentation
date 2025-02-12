import ui from './entities/ui';
import { globalBind, shared } from '@agile-ts/core';
import { assignSharedLogger, createLogger, Logger } from '@agile-ts/logger';
import { inDevelopment } from '../utils';
import reactIntegration from '@agile-ts/react';

assignSharedLogger(
  createLogger({
    active: inDevelopment(),
    level: Logger.level.WARN,
  })
);

shared.integrate(reactIntegration);

const core = {
  ui: ui,
};

// For better debugging
globalBind('__core__', core);

export default core;
 