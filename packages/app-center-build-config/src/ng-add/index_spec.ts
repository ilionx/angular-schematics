import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';
import { Schema } from './schema';

const collectionPath = path.join(__dirname, '../collection.json');

describe('app-center-build-config', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync<Schema>(
        'ng-add',
        {
          appId: 'com.ilionx.dummy',
        },
        Tree.empty()
      )
      .toPromise();

    expect(tree.files).toEqual([
      '/DEPLOYMENT.md',
      '/appcenter-post-clone-root.sh',
      '/ios/App/appcenter-post-clone.sh',
      '/android/app/appcenter-post-clone.sh',
    ]);
  });
});
