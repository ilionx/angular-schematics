import {
  apply,
  chain,
  mergeWith,
  move,
  Rule,
  SchematicContext,
  SchematicsException,
  template,
  Tree,
  url,
} from '@angular-devkit/schematics';
import { AppCenterOptions, getDefaultOptions } from './app-center-options';
import { CapacitorConfig } from './capacitor-config';
import { Schema } from './schema';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function appCenterBuildConfig(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const appId = options.appId ?? determineAppId(tree, context);

    if (!appId) {
      throw new SchematicsException('Could not determine appId. Please run the schematic with: `--app-id name.of.my.app` ');
    }

    context.logger.info(`About to run schematic with app id ${appId}`);
    const cliOptions = getDefaultOptions(context, { ...options, appId }, new AppCenterOptions());

    return chain([
      addPostCloneScript(cliOptions, cliOptions.iosPath),
      addPostCloneScript(cliOptions, cliOptions.androidPath),
      addRootScript(cliOptions),
    ])(tree, context);
  };
}

function determineAppId(tree: Tree, context: SchematicContext): string | null {
  const capacitorConfigPath = 'capacitor.config.json';
  let appId = null;
  if (tree.exists(capacitorConfigPath)) {
    const buffer = tree.read(capacitorConfigPath);
    if (!buffer) {
      context.logger.warn(`Could not read ${capacitorConfigPath}`);
    } else {
      appId = (JSON.parse(buffer.toString()) as CapacitorConfig).appId;
    }
  }
  context.logger.info(`Determined appId from ${capacitorConfigPath} with value: ${appId}`);
  return appId;
}

function addPostCloneScript(options: Schema, path: string): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const sourceTemplate = url('./files/build-script');

    const templateSource = apply(sourceTemplate, [
      template({
        ...options,
      }),
      move('./', path),
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}

function addRootScript(options: Schema): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const sourceTemplate = url('./files/root-files');

    const templateSource = apply(sourceTemplate, [
      template({
        ...options,
      }),
      move('./'),
    ]);

    return chain([mergeWith(templateSource)])(tree, context);
  };
}
