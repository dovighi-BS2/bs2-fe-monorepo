import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSCardRatingComponent } from '@bs2/design-system/components/bs2-ds-card-rating';

import { FormControl } from '@angular/forms';

const meta: Meta<Bs2DSCardRatingComponent> = {
  component: Bs2DSCardRatingComponent,
  title: 'Form Components/Card Rating',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          O componente de avaliação (rating) com 5 estrelas é usado para capturar ou exibir uma pontuação baseada na experiência ou opinião do usuário. Ele permite que os usuários avaliem algo em uma escala visual de 1 a 5 estrelas, oferecendo um feedback claro e intuitivo. Sua função é facilitar a coleta e a apresentação de avaliações de forma rápida e compreensível.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSCardRatingComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: max-content; }`],
    }),
  ],
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
      table: { type: { summary: 'FormControl' } },
    },
    title: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    from: {
      control: { type: 'number' },
      defaultValue: { summary: '1' },
      table: { type: { summary: 'number' } },
    },
    to: {
      control: { type: 'number' },
      defaultValue: { summary: '5' },
      table: { type: { summary: 'number' } },
    },
    lastText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    firstText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
  },
};

export default meta;
type Story = StoryObj<Bs2DSCardRatingComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(null),
    title: 'Como você avalia nossa nova tela inicial?',
    from: 1,
    to: 5,
    firstText: 'Muito ruim',
    lastText: 'Excelente',
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSCardRatingComponent } from "@bs2/design-system/components/bs2-ds-card-rating";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSCardRatingComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-card-rating
  [title]="title"
  [from]="from"
  [to]="to"
  [firstText]="firstText"
  [lastText]="lastText"
  [control]="control"
/>
    `,
  }),
};
