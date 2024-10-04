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

	logger.info('Modificando o tsconfig para evitar erros de types');
	const tsConfigPath = tree.exists('tsconfig.base.json')
		? 'tsconfig.base.json'
		: 'tsconfig.json';

	updateJson(tree, tsConfigPath, (json) => {
		if (
			!('skipLibCheck' in json.compilerOptions) ||
			json.compilerOptions?.skipLibCheck === false
		) {
			json.compilerOptions.skipLibCheck = true;
		}

		return json;
	});

	await formatFiles(tree);

	return () => {
		installPackagesTask(tree);
	};
}

export default initDesignSystemGenerator;
