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
		packageJson['dependencies']?.['@bs2/design-system'] ||
		'latest';

	addDependenciesToPackageJson(tree, { "@bs2/design-system": version }, {});

	await formatFiles(tree);

	return () => {
		installPackagesTask(tree);
	};
}

export default initDesignSystemGenerator;
