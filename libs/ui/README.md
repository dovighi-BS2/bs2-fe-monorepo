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
│   │   ├── component
│   │   │   ├── button
│   │   │   │   ├── button.component.html
│   │   │   │   ├── button.component.scss
│   │   │   │   ├── button.component.spec.ts
│   │   │   │   ├── button.component.ts
│   │   │   │   ├── button.component.stories.ts
│   │   │   │   └── button_variants
│   │   │   │       ├── button-default.scss
│   │   │   │       ├── button-filled.scss
│   │   │   │       ├── button-outlined.scss
│   │   │   │       ├── button-flat.scss
│   │   │   │       ├── button-table-filled.scss
│   │   │   │       ├── button-table-outlined.scss
│   │   │   │       └── button-table-flat.scss
│   │   │   ├── other-component
│   │   │   │   └── ...
│   │   │   ├── other-component
│   │   │   │   └── ...
│   │   │   ├── other-component
│   │   │   │   └── ...
│   │   ├── styles
│   │   │   ├── core
│   │   │   │   ├── _functions.scss
│   │   │   │   └── _mixins.scss
│   │   │   ├── global
│   │   │   │   ├── _typography.scss
│   │   │   │   ├── _functions.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _breakpoint.scss
│   │   │   │   ├── _normalize.scss
│   │   │   │   ├── _overrides.scss
│   │   │   │   └── _styles.scss
│   │   │   ├── themes
│   │   │   │   ├── bs2
│   │   │   │   │   ├── _default.scss
│   │   │   │   │   └── ...
│   ├── assets
│   │   ├── themes
│   │   │   ├── bs2
│   │   │   │   ├── images
│   │   │   │   │   ├── logo.svg
│   │   │   │   │   └── ...
│   │   │   │   ├── fonts
│   │   │   │   │   ├── file-fonts.woff
│   │   │   │   │   └── file-fonts.wttf
│   │   │   │   └── ...
├── tsconfig.json
```

### Documentação dos Componentes

[Link Nx Compodoc](https://nx.dev/recipes/storybook/angular-storybook-compodoc)
