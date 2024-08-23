import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { bs2EntryPointGenerator } from './generator';
import { Bs2EntryPointGeneratorSchema } from './schema';

describe('bs2-entry-point generator', () => {
  let tree: Tree;
  const options: Bs2EntryPointGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await bs2EntryPointGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
