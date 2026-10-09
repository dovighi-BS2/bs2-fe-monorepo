import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSFilledButtonDirective } from "@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button";
import { Bs2DSOutlinedButtonDirective } from "@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button";
import { Bs2DSFlatButtonDirective } from "@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button";
import { Component } from '@angular/core';

@Component({
  selector: 'bs2-ds-button-mock',
  template: ``,
  standalone: true,
})
class Bs2DSButtonMockComponent {}

const meta: Meta<Bs2DSButtonMockComponent> = {
  component: Bs2DSButtonMockComponent,
  title: 'Directives/Button',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os botões desempenham um papel fundamental como componentes interativos que orientam os usuários em ações específicas de forma clara e intuitiva. Eles são projetados para serem visualmente distintos, com padrões de cores, tipografia e iconografia que facilitam a identificação rápida de sua função, como ações primárias, secundárias e de alerta.
          Esses padrões garantem consistência visual e comportamental em toda a interface, apoiando na reduzição da carga cognitiva ao estabelecer uma hierarquia de interação que reforça a usabilidade e a experiência do usuário.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        Bs2DSButtonMockComponent,
        Bs2DSFilledButtonDirective,
        Bs2DSOutlinedButtonDirective,
        Bs2DSFlatButtonDirective,
      ],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: max-content; }`],
    }),
  ],
};
export default meta;
type Story = StoryObj<Bs2DSButtonMockComponent>;

export const Filled: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSFilledButtonDirective } from "@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSFilledButtonDirective], ... })
export class YourComponentComponent { }
-->

<!-- HTML -->
<style>button + button { margin-left: 10px; }</style>
<button bs2-ds-filled-button>button</button>
<button bs2-ds-filled-button="small">button</button>
<button bs2-ds-filled-button="medium">button</button>
<button bs2-ds-filled-button="large">button</button>
<button bs2-ds-filled-button icon="ico-checked" iconPosition="left">button</button>
<button bs2-ds-filled-button icon="ico-checked" iconPosition="right">button</button>
    `,
  }),
};

export const Outlined: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSOutlinedButtonDirective } from "@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSOutlinedButtonDirective], ... })
export class YourComponentComponent { }
-->

<!-- HTML -->
<style>button + button { margin-left: 10px; }</style>
<button bs2-ds-outlined-button>button</button>
<button bs2-ds-outlined-button="small">button</button>
<button bs2-ds-outlined-button="medium">button</button>
<button bs2-ds-outlined-button="large">button</button>
<button bs2-ds-outlined-button icon="ico-checked" iconPosition="left">button</button>
<button bs2-ds-outlined-button icon="ico-checked" iconPosition="right">button</button>
    `,
  }),
};

export const Flat: Story = {
  render: () => ({
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSFlatButtonDirective } from "@bs2/design-system/directives/bs2-ds-button/bs2-ds-flat-button";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSFlatButtonDirective], ... })
export class YourComponentComponent { }
-->

<!-- HTML -->
<style>button + button { margin-left: 10px; }</style>
<button bs2-ds-flat-button>button</button>
<button bs2-ds-flat-button="small">button</button>
<button bs2-ds-flat-button="medium">button</button>
<button bs2-ds-flat-button="large">button</button>
<button bs2-ds-flat-button icon="ico-checked" iconPosition="left">button</button>
<button bs2-ds-flat-button icon="ico-checked" iconPosition="right">button</button>
    `,
  }),
};
