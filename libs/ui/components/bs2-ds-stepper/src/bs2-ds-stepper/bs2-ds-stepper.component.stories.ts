import { Bs2DSStepperComponent } from './bs2-ds-stepper.component';
import { Bs2DSStepComponent } from '../bs2-ds-step/bs2-ds-step.component';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { Bs2DSOutlinedButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-outlined-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<Bs2DSStepperComponent> = {
  component: Bs2DSStepperComponent,
  title: 'Components/Stepper',
  argTypes: {
    horizontal: { control: 'boolean' },
    gap: {
      control: { type: 'number', min: 0, step: 8 },
      if: { arg: 'horizontal', truthy: true },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Também conhecidos como indicadores de progressão, ou progress indicators, são componentes que indicam e guiam o usuário por etapas sequenciais de um processo, como preenchimento de formulários ou fluxo de checkout.
          Proporcionam clareza sobre o progresso, indicando em qual etapa o usuário está, quais já foram concluídas e quais ainda estão por vir, melhorando a experiência e estimulando os usuários a finalizar processos mais longos de maneira mais gerenciável e intuitiva.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSStepperComponent, Bs2DSStepComponent, Bs2DSFilledButtonDirective, Bs2DSOutlinedButtonDirective],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; min-width: 400px; }`],
    }),
  ],
};
export default meta;

type Story = StoryObj<Bs2DSStepperComponent>;

export const Vertical: Story = {
  name: 'Vertical (default)',
  args: { horizontal: false, gap: undefined },
  render: (args) => ({
    props: args,
    template: `
<bs2-ds-stepper #stepper [horizontal]="horizontal" [gap]="gap">
  <bs2-ds-step title="Dados pessoais">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 1</p>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Endereço">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 2</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Confirmação">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 3</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
    </div>
  </bs2-ds-step>
</bs2-ds-stepper>
    `,
  }),
};

export const Horizontal: Story = {
  name: 'Horizontal with fixed gap',
  args: { horizontal: true, gap: 80 },
  render: (args) => ({
    props: args,
    template: `
<bs2-ds-stepper #stepper [horizontal]="horizontal" [gap]="gap">
  <bs2-ds-step title="Dados pessoais">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 1</p>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Endereço">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 2</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Confirmação">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 3</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
    </div>
  </bs2-ds-step>
</bs2-ds-stepper>
    `,
  }),
};

export const HorizontalStretch: Story = {
  name: 'Horizontal stretch',
  decorators: [
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 700px; }`],
    }),
  ],
  args: { horizontal: true, gap: undefined },
  render: (args) => ({
    props: args,
    template: `
<bs2-ds-stepper #stepper [horizontal]="horizontal" [gap]="gap">
  <bs2-ds-step title="Passo 1">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 1</p>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Passo 2">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 2</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Passo 3">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 3</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
    </div>
  </bs2-ds-step>
</bs2-ds-stepper>
    `,
  }),
};

export const WithError: Story = {
  name: 'With error step',
  args: { horizontal: false, gap: undefined },
  render: (args) => ({
    props: args,
    template: `
<bs2-ds-stepper #stepper [horizontal]="horizontal" [gap]="gap">
  <bs2-ds-step title="Dados pessoais">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 1</p>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Endereço" [hasError]="true">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Este passo está com erro.</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
      <button bs2-ds-filled-button (click)="stepper.next()">Próximo</button>
    </div>
  </bs2-ds-step>
  <bs2-ds-step title="Confirmação">
    <div style="padding: 16px 0; display: flex; gap: 8px">
      <p>Conteúdo do passo 3</p>
      <button bs2-ds-outlined-button (click)="stepper.prev()">Voltar</button>
    </div>
  </bs2-ds-step>
</bs2-ds-stepper>
    `,
  }),
};
