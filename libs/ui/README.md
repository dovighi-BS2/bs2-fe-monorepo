# Design System

Esta biblioteca foi gerada com [Nx](https://nx.dev).

## Storybook

### Comandos

#### Executar Storybook

Rode `npx nx run ui:storybook` para executar o storybook
Por padrão será executado na porta 4400 - Link: http://localhost:4400/

#### Contruir (Build) Storybook

Rode `npx nx run ui:build-storybook` para buildar o storybook

#### Testar Storybook

Rode `npx nx run ui:test-storybook` para buildar o storybook
Para rodar os teste localmente talvez seja necessário rodar o seguinte commando `npx playwright install` para instalar o

### Estrutura de diretorios

Neste momento foi alinhado com o [Responsavel da Área] que iremos seguir no seguinte formato:
Obs.: Utilize a extensão [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) para gerar os componentes.

```
| [diretório libs]
ui
|   ... [Arquivos default Nx libs]
├── storybook
│   ├── preview.js
│   ├── main.js
│   └── tsconfig.json
├── src
│   ├── lib
│   │   ├── directives
│   │   │   ├── bs2-button
│   │   │   │   ├── bs2-filled-button
│   │   │   │   │   ├── bs2-filled-button.directive.ts
│   │   │   │   │   ├── bs2-filled-button.directive.spec.ts
│   │   │   │   │   └── bs2-filled-button.directive.scss
│   │   │   │   │── [other-button-types]
│   │   │   │   │── ...
│   │   │   │   │── bs2-button.directive.scss
│   │   │   │   └── bs2-button.directive.stories.ts
│   │   ├── component
│   │   │   ├── button
│   │   │   │   └── ...
│   │   │   ├── other-component
│   │   │   │   └── ...
│   │   │   ├── other-component
│   │   │   │   └── ...
│   │   │   ├── other-component
│   │   │   │   └── ...
│   │   ├── styles
│   │   │   ├── global
│   │   │   │   ├── _directives.scss
│   │   │   │   ├── _breakpoint.scss
│   │   │   │   ├── _functions.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _normalize.scss
│   │   │   │   ├── _overrides.scss
│   │   │   │   └── _styles.scss
│   │   │   │   ├── _typography.scss
│   │   │   │   ├── _variables.scss
│   │   │   ├── themes
│   │   │   │   ├── bs2
│   │   │   │   │   ├── _colors.scss
│   │   │   │   │   ├── _variables.scss
│   │   │   │   │   └── ...
│   │   │   │   └── [other-theme]
│   │   │   │       ├── _colors.scss
│   │   │   │       ├── _variables.scss
│   │   │   │       └── ...
│   ├── assets
│   │   ├── core
│   │   │   ├── images
│   │   │   │   ├── flags-currency
│   │   │   │   │   └── ...
│   │   │   │   ├── flags-square
│   │   │   │   │   └── ...
│   │   │   │   ├── [images-business] // A imagem que não ser substituida quando houver a troca de thema deve ser incluida em Core
│   │   │   │   │   └── ...
│   │   ├── themes
│   │   │   ├── bs2
│   │   │   │   ├── images
│   │   │   │   │   ├── logo.svg
│   │   │   │   │   └── ...
│   │   │   │   ├── fonts
│   │   │   │   │   ├── file-fonts.woff
│   │   │   │   │   └── file-fonts.wttf
│   │   │   │   └── [other-theme]
│   │   │   │           ├── _default.scss
│   │   │   │           └── ...
├── tsconfig.json
```

### Documentação dos Componentes

[Link Nx Compodoc](https://nx.dev/recipes/storybook/angular-storybook-compodoc)

### Importação de estilos

Hoje existe uma unica pré configuração de caminho para importação de estilo, que fica em:
`libs/ui/src/lib/styles/global`. Ao usar `@import "styles";` por exemplo, ele esta importando
o arquivo `libs/ui/src/lib/styles/global/_styles.scss` que contém todas as importações basicas do sistema.

#### Adicionando uma nova configuração de estilo

Para adicionar uma nova configuração, basta ir no arquivo `libs/ui/src/project.json` e procurar por 2
props `build | build-storybook`, cada uma contém uma prop `options` que por sua vez possui um array de
`stylePreprocessorOptions`, agora basta adicionar seu path dentro desse array. Por exemplo:

```
"stylePreprocessorOptions": {
    "includePaths": [
        "libs/ui/src/lib/styles/global",
        "libs/ui/src/lib/styles/seu-path-exemplo"
    ]
}
```
