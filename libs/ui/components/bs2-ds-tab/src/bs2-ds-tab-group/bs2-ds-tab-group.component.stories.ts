import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSTabGroupComponent, Bs2DSTabItemComponent } from '@bs2/design-system/components/bs2-ds-tab';

const meta: Meta<Bs2DSTabGroupComponent> = {
  component: Bs2DSTabGroupComponent,
  title: 'Components/Tabs',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Tabs são componentes de navegação que organizam conteúdo em diferentes seções, permitindo ao usuário alternar entre informações ou funcionalidades relacionadas sem sair da página atual. Facilitam a exploração de conteúdo agrupado, garantindo uma experiência limpa e estruturada.
          Com padrões visuais consistentes, como indicadores de estado ativo, inativo e hover, as tabs guiam o usuário de forma clara, promovendo a usabilidade e o acesso rápido a informações segmentadas.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 576px; }`],
    }),
  ],
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      defaultValue: { summary: 'start' },
      table: { type: { summary: "'start' | 'center' | 'end'" } },
    },
    full: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      table: { type: { summary: 'boolean' } },
    },
    selectedTab: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSTabGroupComponent>;

export const Default: Story = {
  args: {
    align: 'start',
    selectedTab: 'Tab 1',
    full: false,
  },
  render: (args: Bs2DSTabGroupComponent) => {
    return {
      props: { ...args },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTabGroupComponent, Bs2DSTabItemComponent } from "@bs2/design-system/components/bs2-ds-tab";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-tab-group [align]='align' [full]='full' [selectedTab]='selectedTab'>
  <bs2-ds-tab-item title='Tab 1'>Conteúdo Tab 1</bs2-ds-tab-item>
  <bs2-ds-tab-item title='Tab 2'>Conteúdo Tab 2</bs2-ds-tab-item>
  <bs2-ds-tab-item title='Tab 3'>Conteúdo Tab 3</bs2-ds-tab-item>
</bs2-ds-tab-group>
      `,
    };
  },
};

export const Nested: Story = {
  args: {
    align: 'start',
    selectedTab: 'Tab 1',
    full: false,
  },
  render: (args: Bs2DSTabGroupComponent) => {
    return {
      props: { ...args },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSTabGroupComponent, Bs2DSTabItemComponent } from "@bs2/design-system/components/bs2-ds-tab";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-tab-group [align]='align' [full]='full' [selectedTab]='selectedTab'>
  <bs2-ds-tab-item title='Tab 1'>Conteúdo Tab 1</bs2-ds-tab-item>
  <bs2-ds-tab-item title='Tab 2'>
    Conteúdo Tab 2
    <bs2-ds-tab-group>
      <bs2-ds-tab-item title='Nested Tab 1'>Nested Conteúdo Tab 1</bs2-ds-tab-item>
      <bs2-ds-tab-item title='Nested Tab 2'>Nested Conteúdo Tab 2</bs2-ds-tab-item>
      <bs2-ds-tab-item title='Nested Tab 3'>Nested Conteúdo Tab 3</bs2-ds-tab-item>
    </bs2-ds-tab-group>
  </bs2-ds-tab-item>
  <bs2-ds-tab-item title='Tab 3'>Conteúdo Tab 3</bs2-ds-tab-item>
</bs2-ds-tab-group>
      `,
    };
  },
};
