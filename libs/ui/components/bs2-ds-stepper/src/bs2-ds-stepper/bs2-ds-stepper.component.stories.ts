import { Bs2DSStepperComponent, Bs2DSStepperItemComponent } from '@bs2/design-system/components/bs2-ds-stepper';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<Bs2DSStepperComponent> = {
  component: Bs2DSStepperComponent,
  title: 'Components/Stepper',
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
      imports: [Bs2DSStepperComponent, Bs2DSStepperItemComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {},
};
export default meta;

type Story = StoryObj<Bs2DSStepperComponent>;

export const Horizontal: Story = {
  name: 'Horizontal',
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepperComponent, Bs2DSStepperItemComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepperComponent, Bs2DSStepperItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-stepper [horizontal]="true">
  <bs2-ds-stepper-item [index]="0" [indexOfCurrent]="1">
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 1</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 1</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="1" [indexOfCurrent]="1">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 2</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 2</span>
    </bs2-ds-stepper-item>
    <bs2-ds-stepper-item [index]="2" [indexOfCurrent]="1">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 3</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 3</span>
    </bs2-ds-stepper-item>
</bs2-ds-stepper>
    `,
  }),
};

export const Array: Story = {
  name: 'Usando via @Input() items: Bs2DSStepperItemComponent[]',
  args: {
    items: [
      { step: 'Array bullet 1', label: 'Array label 1', title: 'Array title 1', description: 'Array description 1' },
      { step: 'Array bullet 2', label: 'Array label 2', title: 'Array title 2', description: 'Array description 2' },
      { step: 'Array bullet 3', label: 'Array label 3', title: 'Array title 3', description: 'Array description 3' },
      { step: 'Array bullet 4', label: 'Array label 4', title: 'Array title 4', description: 'Array description 4' },
    ] as Bs2DSStepperItemComponent[],
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepperComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepperComponent], ... })
export class YourComponentComponent {
    public items: Bs2DSStepperItemComponent[] = [
      { step: 'Array bullet 1', label: 'Array label 1', title: 'Array title 1', description: 'Array description 1', indexOfCurrent: 1 },
      { step: 'Array bullet 2', label: 'Array label 2', title: 'Array title 2', description: 'Array description 2', indexOfCurrent: 1 },
      { step: 'Array bullet 3', label: 'Array label 3', title: 'Array title 3', description: 'Array description 3', indexOfCurrent: 1 },
      { step: 'Array bullet 4', label: 'Array label 4', title: 'Array title 4', description: 'Array description 4', indexOfCurrent: 1 },
    ];
}
-->

<!-- HTML -->
<bs2-ds-stepper [items]="items">
    `,
  }),
};

export const ContentChildren: Story = {
  name: 'Usando via @ContentChildren() items: Bs2DSStepperItemComponent',
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepperComponent, Bs2DSStepperItemComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepperComponent, Bs2DSStepperItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-stepper>
  <bs2-ds-stepper-item [index]="0" [indexOfCurrent]="0">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 1</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 1</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 1</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="1" [indexOfCurrent]="0">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 2</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 2</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 2</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="2" [indexOfCurrent]="0">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 3</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 3</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 3</span>
  </bs2-ds-stepper-item>
</bs2-ds-stepper>
    `,
  }),
};

export const CustomEverything: Story = {
  name: '100% Customizavel',
  parameters: {
    docs: {
      description: {
        story:
          'Você pode ter algo 100% customizavel sim, mas usando as classes `.bs2_ds_stepper_item__label` `.bs2_ds_stepper_item__title` `.bs2_ds_stepper_item__description` você mantém o padrão feito no design. Caso esses 3 atributos sejam passados via @Input(), o componente ja vai usar o padrão normalmente. Também é possivel customizar cada icone de cada tipo de status diferente, sendo eles `default` `done` `doing` `error` segue abaixo os exemplos.',
      },
    },
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepperComponent, Bs2DSStepperItemComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepperComponent, Bs2DSStepperItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-stepper>
  <bs2-ds-stepper-item [index]="1" [indexOfCurrent]="0">
    <span ngProjectAs="default">A</span>
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Icone default customizado</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">O padrão é usar o <strong>index</strong> caso não passe nada</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="0" [indexOfCurrent]="0">
    <span ngProjectAs="doing">B</span>
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Icone doing customizado</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">O padrão é usar o <strong>index</strong> caso não passe nada</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="0" [indexOfCurrent]="1">
    <span ngProjectAs="done">C</span>
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Icone done customizado</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">O padrão é usar o icone <strong>icon-checked</strong> caso não passe nada</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="0" [indexOfCurrent]="0" [hasError]="true">
    <span ngProjectAs="error">D</span>
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Icone error customizado</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">O padrão é usar o icone <strong>icon-sair</strong> caso não passe nada</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="1" [indexOfCurrent]="0">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label padrão via ContentChildren()</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title padrão via ContentChildren()</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description padrão via ContentChildren()</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item
    [index]="1"
    [indexOfCurrent]="0"
    [label]="'Label padrão via Input()'"
    [title]="'Title padrão via Input()'"
    [description]="'Description padrão via Input()'"
  ></bs2-ds-stepper-item>
</bs2-ds-stepper>
    `,
  }),
};

export const AdaptableSize: Story = {
  name: 'Tamanho adaptavel',
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSStepperComponent, Bs2DSStepperItemComponent } from "@bs2/design-system/components/bs2-ds-card-balance";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSStepperComponent, Bs2DSStepperItemComponent], ... })
export class YourComponentComponent {}
-->

<!-- HTML -->
<bs2-ds-stepper>
  <bs2-ds-stepper-item [index]="0" [indexOfCurrent]="1">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">
      Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1
      Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1
      Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1
      Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1
      Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1 Label 1
    </span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 1</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 1</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="1" [indexOfCurrent]="1">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 2</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">
      Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2
      Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2
      Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2
      Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2
      Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2 Title 2
    </span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">Description 2</span>
  </bs2-ds-stepper-item>
  <bs2-ds-stepper-item [index]="2" [indexOfCurrent]="1">
    <span class="bs2_ds_stepper_item__label" ngProjectAs="label">Label 3</span>
    <span class="bs2_ds_stepper_item__title" ngProjectAs="title">Title 3</span>
    <span class="bs2_ds_stepper_item__description" ngProjectAs="description">
      Description 3 Description 3 Description 3 Description 3 Description 3
      Description 3 Description 3 Description 3 Description 3 Description 3
      Description 3 Description 3 Description 3 Description 3 Description 3
      Description 3 Description 3 Description 3 Description 3 Description 3
      Description 3 Description 3 Description 3 Description 3 Description 3
    </span>
  </bs2-ds-stepper-item>
</bs2-ds-stepper>
    `,
  }),
};
