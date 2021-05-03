import { SchematicContext } from '@angular-devkit/schematics';
import { Schema } from './schema';

export class AppCenterOptions {
  appId: string;
  iosPath: string = './ios/App';
  androidPath: string = './android/app';
}

export function getDefaultOptions(context: SchematicContext, cliOptions: Schema, defaultSettings: AppCenterOptions): AppCenterOptions {
  context.logger.debug('getDefaultOptions');
  return {
    ...defaultSettings,
    ...cliOptions,
  };
}
