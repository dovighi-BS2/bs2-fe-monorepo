# Design System

Esta biblioteca foi gerada com [Nx](https://nx.dev).


## Visão e Objetivo

O Design System foi criado para unificar a linguagem visual e de código entre todos os produtos do Banco BS2, promovendo consistência, velocidade de desenvolvimento e qualidade na experiência do usuário.

Ele serve como uma base compartilhada entre designers e desenvolvedores, garantindo que cada novo produto mantenha a identidade visual e técnica da marca.


## Diretrizes operacionais para construção do Design System

Para ajudar a garantir a consistência e a qualidade no desenvolvimento a construção dos componentes devem ser baseadas apenas em HTML e SCSS. Inicialmente,
o nosso design system foi construído sobre o material design components 2. Portanto,
A integridade deve ser mantida mesmo se o framework (angular material) obrigar a usar material design components 3 futuramente.
Contudo, podemos utilizar, se necessário,
o ([CDK (components development kit) ](https://material.angular.io/cdk/categories))
em casos onde a complexidade e a abrangência de recursos são necessárias. Todo componente , diretiva , etc precisam ser entrypoints
dentro do design system para evitar performance bottlenecks e trabalharmos com o NX de forma eficiente.


## Estrutura de diretórios

A estrutura de diretórios segue o padrão acordado com o responsável da área e equipe de desenvolvimento.
Obs.: Utilize a extensão [Nx Console](https://marketplace.visualstudio.com/items?itemName=nrwl.angular-console) para gerar os componentes.


## Guia de Contribuição

### Inicialização o projeto

Antes de rodar o projeto, instale as dependências:

```bash
npm install
```
#### Executar o projeto principal

Para rodar a aplicação principal (monorepo Angular), utilize o comando:
```bash
npx nx run app-angular-monorepo:serve
```

Por padrão, o projeto será executado em:
`http://localhost:4200/`


### Criação de Componentes

Use o comando 
```bash
npm run create-entrypoint
```
para gerar novos componentes ou diretivas.

Se criar o entrypoint diretamente com o nome, ele será gerado na raiz do diretório UI. 
Para criar dentro de uma subpasta, especifique o caminho:

```bash
npm run create-entrypoint components/meu-entrypoint
```

- Cada componente deve possuir:
  - Arquivo `.ts`
  - Arquivo `.scss`
  - Arquivo `.spec.ts`
  - Arquivo `.stories.ts`
- O nome do componente deve seguir o padrão `bs2-ds-[nome-do-componente]`.
- Utilize **HTML e SCSS puros**, sem dependências externas de UI (exceto CDK, quando estritamente necessário).


## Estilos e temas

### Importação de estilos

O caminho padrão de importação de estilos é:
`libs/ui/src/lib/styles/global`

Ao usar:
`@import "styles";`
Você está importando o arquivo _styles.scss, que contém todas as importações básicas.

### Utilização de design tokens e temas

- Os design tokens definem os valores fundamentais de identidade visual (cores, tipografia, espaçamento, etc).
- No Design System, utilizamos temas para adaptar esses tokens à identidade visual de cada parceiro do Banco BS2, garantindo consistência e flexibilidade na personalização da interface.

Exemplo de path:

`\libs\ui\src\lib\sass\themes\bs2\_colors.scss`

- Cada tema define um conjunto de variáveis SCSS que representam os tokens de cor.
- Essas variáveis são expostas também como CSS Custom Properties, permitindo o uso direto nos estilos dos componentes.

Dentro dos seus componentes SCSS, você pode utilizar as variáveis do tema diretamente:

```
.meu-componente {
 color: var(--primary_text_dark);
 background-color: var(--primary_text_bkg_light);   
}

```

### Adicionar uma nova configuração de estilo

Edite o arquivo libs/ui/src/project.json e adicione seu path dentro de **stylePreprocessorOptions**:

```
"stylePreprocessorOptions": {
    "includePaths": [
        "libs/ui/src/lib/styles/global",
        "libs/ui/src/lib/styles/seu-path-exemplo"
    ]
}
```

### Tipografia

A tipografia do Design System segue a família Poppins, importada diretamente do Google Fonts, garantindo legibilidade, consistência e alinhamento visual entre todos os componentes.

Os estilos tipográficos são organizados em níveis hierárquicos e pesos, facilitando a padronização e o uso em componentes e layouts.

#### Estrutura de estilos

Cada grupo tipográfico é dividido em quatro categorias:

Display – utilizado para títulos de destaque e hero sections.

Headline – títulos principais de seções e páginas.

Title – subtítulos e títulos de cards.

Body – textos corridos e parágrafos.

Label – rótulos, legendas e textos de apoio.

Cada categoria contém variações de peso (light, regular, semi-bold, bold) e tamanho (large, medium, small).

Exemplo de uso:

<p class="bs2-body-regular-medium">Texto de exemplo</p>
<h1 class="bs2-display-bold-large">Título principal</h1>


## Cobertura de Testes

- Cada componente, diretiva ou serviço novo deve possuir **testes unitários** cobrindo pelo menos **70%** do código.  
- A cobertura mínima é validada automaticamente no pipeline de CI/CD.  

Utilize o comando abaixo para verificar a cobertura localmente:

```bash
npx nx test ui --code-coverage
``` 

Para executar o **teste de um componente específico**, utilize o comando:

```bash
npx nx run bs2-ds-componente:test --coverage --html --watch
```


## Padrão de Commits

Os commits devem seguir o formato [Conventional Commits](https://www.conventionalcommits.org/):

Exemplos:
- `feat(button): adiciona variação outline`
- `fix(dialog): corrige bug no fechamento ao pressionar ESC`
- `docs(readme): atualiza instruções de contribuição`


## Storybook

O Storybook é uma ferramenta para visualizar, testar e documentar os componentes do Design System de forma isolada, 
garantindo consistência e facilidade de desenvolvimento.

### Executar Storybook

Execute o comando 
```bash
npx nx run ui:storybook
```

Por padrão será executado na porta 4400 - Link: http://localhost:4400/

### Construir (Build) Storybook

Execute o comando 
```bash
npx nx run ui:build-storybook
``` 
para buildar o storybook

### Boas práticas para criação de stories

- Cada componente deve ter stories claros e independentes, representando seus principais estados e variações.  
- Use nomes descritivos para os stories.
- Inclua controles (args) sempre que possível para facilitar a interação e visualização de diferentes propriedades.  
- Mantenha o layout e o conteúdo minimalistas, mostrando apenas o necessário para demonstrar o comportamento do componente.  
- Evite dependências externas ou contextos complexos, o foco deve ser apenas o componente em si.  
- Sempre que adicionar um novo componente ao Design System, crie seu **story correspondente**.

### Testar Storybook

Execute o comando 
```bash
npx nx run ui:test-storybook
``` 
para testar o storybook

Se necessário, instale o Playwright:
```bash
npx playwright install
```

### Gerar versão do Storybook

Execute o comando 
```bash
npx nx run ui:publish
```


## Documentação dos Componentes

[Link Nx Compodoc](https://nx.dev/recipes/storybook/angular-storybook-compodoc)
