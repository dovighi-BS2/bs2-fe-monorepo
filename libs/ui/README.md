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
\---ui
    |   ... [Arquivos default Nx libs]
    |
    +---.storybook
    |       main.ts
    |       preview.ts
    |       tsconfig.json
    |
    \---src
        |   index.ts
        |   test-setup.ts
        |
        \---lib
            +---component
            |   \---button
            |           button.component.{css,html,spec,stories,ts}
            |    \--- ... [Demais componentes aqui]
            \---scss
            | [global styles]
```

### Documentação dos Componentes

[Link Nx Compodoc](https://nx.dev/recipes/storybook/angular-storybook-compodoc)
