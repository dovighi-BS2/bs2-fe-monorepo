import {
  addProjectConfiguration,
  formatFiles, 
  logger,
  readProjectConfiguration,
  Tree,
} from '@nx/devkit'; 

import { Bs2ConvertToProjectGeneratorSchema } from './schema';

export async function bs2ConvertToProjectGenerator(
  tree: Tree,
  options: Bs2ConvertToProjectGeneratorSchema
) {

  const projectRoot = "libs/ui/"  + options.name

  if(!tree.exists(projectRoot)){
    return logger.error("projeto não existe no workspace!")
  }

  const isProjectJsonExists = tree.exists(`${projectRoot}/project.json`)

  if(isProjectJsonExists){
    return logger.error(`o entrypoint já é considerado um projeto no workspace!`)
  }

  const projectConfiguration = readProjectConfiguration(tree , "ui")

  addProjectConfiguration(tree , `ui/${options.name}`, {
    root:projectRoot,
    projectType: "library",
    sourceRoot: `${projectRoot}/src`,
    targets: {
        test: {
          executor: "@nx/jest:jest",
          outputs: [
            `{workspaceRoot}/coverage/{projectRoot}/${options.name}`
          ],
          options: {
            jestConfig:`${projectConfiguration.root}/jest.config.ts`
          }
        },
        lint:{
          executor:"@nx/eslint:lint", 
        }
    }
  })

  await formatFiles(tree)
}

export default bs2ConvertToProjectGenerator;



