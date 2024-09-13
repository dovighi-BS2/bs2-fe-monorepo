import { formatFiles, Tree } from '@nx/devkit';
import { librarySecondaryEntryPointGenerator } from '@nx/angular/generators';
import { Bs2EntryPointGeneratorSchema } from './schema';
import bs2ConvertToProjectGenerator from '../bs2-convert-to-project/generator';

export async function bs2EntryPointGenerator(
  tree: Tree,
  options: Bs2EntryPointGeneratorSchema
) {
  await librarySecondaryEntryPointGenerator(tree, {
    name: options.name,
    library: 'ui',
    skipModule: true,
  });

  await bs2ConvertToProjectGenerator(tree, {
    name: options.name,
  });

  await formatFiles(tree);
}

export default bs2EntryPointGenerator;
