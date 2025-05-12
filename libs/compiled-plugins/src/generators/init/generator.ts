import {
  addDependenciesToPackageJson,
  formatFiles,
  installPackagesTask,
  logger,
  readJson,
  updateJson,
  type Tree,
} from '@nx/devkit';

export async function initDesignSystemGenerator(tree: Tree) {
  logger.log('Inicializando o design-system no projeto...');

  const packageJson = readJson(tree, 'package.json');

  const version =
    packageJson['dependencies']?.['@bs2/design-system'] || 'latest';

  addDependenciesToPackageJson(tree, { '@bs2/design-system': version }, {});

  logger.log('Adicionando style no angular json...');

  updateJson(tree, 'angular.json', (json) => {
    const projectName = readJson(tree, 'package.json')['name'];

    const project = json.projects[projectName];

    if (project && project.architect && project.architect.build) {
      const styles = project.architect.build.options.styles || [];

      const stylePath = 'node_modules/@bs2/design-system/styles/_styles.scss';

      project.architect.build.options.styles = [...styles, stylePath];
    }

    return json;
  });

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}

export default initDesignSystemGenerator;
