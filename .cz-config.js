module.exports = {
  types: [
    { value: 'feat', name: 'feat:     Uma nova feature' },
    { value: 'fix', name: 'fix:      Uma correção de bug' },
    { value: 'docs', name: 'docs:     mudanças na documentação' },
    {
      value: 'style',
      name: 'style:    Mudanças que não afetam o comportamento do código\n            (white-space, formatting, missing semi-colons, etc)',
    },
    {
      value: 'refactor',
      name: 'refactor: Uma alteração de código que não corrige um bug nem adiciona um recurso',
    },
    {
      value: 'perf',
      name: 'perf:     Uma mudança de código que melhora o desempenho',
    },
    { value: 'test', name: 'test:     Adicionando cobertura de testes' },
    {
      value: 'chore',
      name: 'chore:    Mudanças no processo de construção ou ferramentas auxiliares\n            e bibliotecas como geração de documentação',
    },
    { value: 'revert', name: 'revert:   Reverter para um commit' },
    { value: 'WIP', name: 'WIP:      Trabalho em progresso' },
  ],

  scopes: [
    { name: 'migration' },
    { name: 'core' },
    { name: 'configs' },
    { name: 'deps' },
    { name: 'docker' },
    { name: 'docs' },
    { name: 'setup' },
    { name: 'ui' },
  ],
  allowTicketNumber: true,
  isTicketNumberRequired: false,
  ticketNumberPrefix: '#',
  ticketNumberRegExp: '\\d{1,5}',
  // override the messages, defaults are as follows
  messages: {
    type: 'Selecione o tipo de mudança do seu commit:',
    scope: 'Indique o SCOPE (escopo) desta mudança:',
    // used if allowCustomScopes is true
    customScope: 'Denote the SCOPE of this change:',
    subject: 'Escreva uma descrição CURTA, IMPERATIVA sobre a mudança:\n',
    body: 'Forneça uma descrição MAIS LONGA da alteração (opcional). Use "|" para quebrar nova linha:\n',
    ticketNumber: 'Número do card do BOARD (somente os números):',
    breaking: 'Liste as BREAKING CHANGES (optional):\n',
    footer:
      'Liste quaisquer demandas do AZURE DEVOPS para esta mudança (opcional) Ex.: #1100, #1200:\n',
    confirmCommit: 'Tem certeza de que deseja prosseguir com o commit acima?',
  },
  skipQuestions: ['footer'],
  breaklineChar: '|', // It is supported for fields body and footer.
};
