import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import {
  Bs2DSStepNavigatorGroupComponent,
  Bs2DSStepNavigatorItemComponent,
} from '@bs2/design-system/components/bs2-ds-step-navigator';

const meta: Meta<Bs2DSStepNavigatorGroupComponent> = {
  component: Bs2DSStepNavigatorGroupComponent,
  title: 'Components/StepNavigator',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Da mesma forma que os botões de acesso rápido, são componentes de navegação contendo ícones que permitem o acesso rápido aos  principais itens de serviço listados no menu do aplicativo. Com a mesma função de otimizar a navegação em telas menores, garantindo acessibilidade e usabilidade enquanto mantém o design limpo e funcional.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSStepNavigatorGroupComponent, Bs2DSStepNavigatorItemComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 100%; }`],
    }),
  ],
  argTypes: {
    activatedIndex: {
      control: { type: 'number' },
      defaultValue: { summary: 0 },
      table: { type: { summary: 'number' } },
    },
    timer: {
      control: { type: 'number' },
      defaultValue: { summary: 5000 },
      table: { type: { summary: 'number' } },
    },
    loop: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    auto: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSStepNavigatorGroupComponent>;

export const Default: Story = {
  args: {
    activatedIndex: 0,
    timer: 5000,
    loop: true,
    auto: true,
  },
  render: (args: Bs2DSStepNavigatorGroupComponent) => {
    return {
      props: { ...args },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepNavigatorComponent, Bs2DSStepNavigatorItemComponent } from "@bs2/design-system/components/bs2-ds-step-navigator";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepNavigatorComponent, Bs2DSStepNavigatorItemComponent], ... })
export class YourComponentComponent {
  public activatedIndex: number = 0;
  public auto: boolean = false;
  public loop: boolean = false;
  public timer: number = 5000;
}
-->

<!-- HTML -->
<bs2-ds-step-navigator-group [activatedIndex]='activatedIndex' [timer]='timer' [loop]='loop' [auto]='auto'>
  <span ngProjectAs='previous'>Voltar</span>
  <span ngProjectAs='next'>Próximo</span>
  <bs2-ds-step-navigator-item>
    step 1
  </bs2-ds-step-navigator-item>
  <bs2-ds-step-navigator-item>
    step 2
  </bs2-ds-step-navigator-item>
  <bs2-ds-step-navigator-item>
    step 3
  </bs2-ds-step-navigator-item>
  <bs2-ds-step-navigator-item>
    step 4
  </bs2-ds-step-navigator-item>
</bs2-ds-step-navigator-group>
      `,
    };
  },
};

export const Nested: Story = {
  args: {
    activatedIndex: 0,
    timer: 5000,
    loop: true,
    auto: true,
  },
  render: (args: Bs2DSStepNavigatorGroupComponent) => {
    return {
      props: { ...args },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepNavigatorComponent, Bs2DSStepNavigatorItemComponent } from "@bs2/design-system/components/bs2-ds-step-navigator";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepNavigatorComponent, Bs2DSStepNavigatorItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-step-navigator-group [activatedIndex]='0' [timer]='5000' [loop]='true' [auto]='true'>
  <span ngProjectAs='previous'>Voltar</span>
  <span ngProjectAs='next'>Próximo</span>
  <bs2-ds-step-navigator-item>
    step 1
  </bs2-ds-step-navigator-item>
  <bs2-ds-step-navigator-item>
    <bs2-ds-step-navigator-group [activatedIndex]='0' [timer]='1000' [loop]='true' [auto]='true'>
      <span ngProjectAs='previous'>Voltar</span>
      <span ngProjectAs='next'>Próximo</span>
      <bs2-ds-step-navigator-item>
        nested step 1
      </bs2-ds-step-navigator-item>
      <bs2-ds-step-navigator-item>
        nested step 2
      </bs2-ds-step-navigator-item>
      <bs2-ds-step-navigator-item>
        nested step 3
      </bs2-ds-step-navigator-item>
      <bs2-ds-step-navigator-item>
        nested step 4
      </bs2-ds-step-navigator-item>
    </bs2-ds-step-navigator-group>
  </bs2-ds-step-navigator-item>
  <bs2-ds-step-navigator-item>
    step 3
  </bs2-ds-step-navigator-item>
  <bs2-ds-step-navigator-item>
    step 4
  </bs2-ds-step-navigator-item>
</bs2-ds-step-navigator-group>
      `,
    };
  },
};
