import { createTreeWithEmptyWorkspace } from '@nx/devkit/testing';
import { Tree, readProjectConfiguration } from '@nx/devkit';

import { bs2ConvertToProjectGenerator } from './generator';
import { Bs2ConvertToProjectGeneratorSchema } from './schema';

describe('bs2-convert-to-project generator', () => {
  let tree: Tree;
  const options: Bs2ConvertToProjectGeneratorSchema = { name: 'test' };

  beforeEach(() => {
    tree = createTreeWithEmptyWorkspace();
  });

  it('should run successfully', async () => {
    await bs2ConvertToProjectGenerator(tree, options);
    const config = readProjectConfiguration(tree, 'test');
    expect(config).toBeDefined();
  });
});
