import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSInputTextComponent } from '@bs2/design-system/components/bs2-ds-input-text';

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';
import { provideNgxMask } from 'ngx-mask';
import { setTranslationsConstantsInstance } from '@bs2/design-system/translations';

setTranslationsConstantsInstance();

const meta: Meta<Bs2DSInputTextComponent> = {
  component: Bs2DSInputTextComponent,
  title: 'Form Components/InputText',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os campos de input text, select, dropdown e textarea são componentes essenciais para entrada de dados, permitindo aos usuários inserir, selecionar opções de forma intuitiva e acessível.
          Normalmente usados em formulários, são projetados para manter a consistência visual, com tipografia legível, espaçamento adequado e indicadores visuais para estados como foco, erro e sucesso. Padrões de bordas, cores e mensagens auxiliares orientam a interação, oferecendo feedback claro e garantindo uma experiência de coleta de dados eficiente e fluida na interface, facilitando tanto escolhas simples quanto múltiplas.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSInputTextComponent],
      providers: [provideNgxMask()],
    }),
    (storyFunc: any) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 300px; }`],
    }),
  ],
  argTypes: {
    control: {
      control: 'object',
      defaultValue: { summary: 'new FormControl()' },
      table: { type: { summary: 'FormControl' } },
    },
    state: {
      control: 'select',
      options: ['default', 'hovered', 'focused', 'error', 'filled', 'disabled'],
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: "'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled'" } },
    },
    type: {
      control: { type: 'text' },
      defaultValue: { summary: 'text' },
      table: { type: { summary: 'string' } },
    },
    id: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    label: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    class: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    leftIcon: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    rightIcon: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    helperText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    errorText: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    placeholder: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    readOnly: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    maxLength: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'number | undefined' } },
    },
    minLength: {
      control: { type: 'number' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'number | undefined' } },
    },
    pattern: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    ariaLabel: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    ariaRequired: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
    ariaInvalid: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: { type: { summary: 'boolean' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSInputTextComponent>;

export const Default: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    state: 'default',
    type: 'text',
    id: '',
    label: 'E-mail',
    class: '',
    leftIcon: '',
    rightIcon: '',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    placeholder: 'Ex: joao.da.silva@gmail.com',
    readOnly: false,
    maxLength: undefined,
    minLength: undefined,
    pattern: '',
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSInputTextComponent } from "@bs2/design-system/components/bs2-ds-input-text";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSInputTextComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public state: 'default' | 'hovered' | 'focused' | 'error' | 'filled' | 'disabled' = 'default';
  public type: string = 'text';
  public id: string = '';
  public label: string = 'E-mail';
  public class: string = '';
  public leftIcon: string = '';
  public rightIcon: string = '';
  public helperText: string = 'Digite seu e-mail principal.';
  public errorText: string = '';
  public placeholder: string = 'Ex: joao.da.silva@gmail.com';
  public readOnly: boolean = false;
  public maxLength: number | undefined = undefined;
  public minLength: number | undefined = undefined;
  public pattern: string = '';
  public ariaLabel: string = '';
  public ariaRequired: boolean = false;
  public ariaInvalid: boolean = false;
}
-->

<!-- HTML -->
<bs2-ds-input-text
  [control]="control"
  [state]="state"
  [type]="type"
  [id]="id"
  [label]="label"
  [class]="class"
  [leftIcon]="leftIcon"
  [rightIcon]="rightIcon"
  [helperText]="helperText"
  [errorText]="errorText"
  [placeholder]="placeholder"
  [readOnly]="readOnly"
  [maxLength]="maxLength"
  [minLength]="minLength"
  [pattern]="pattern"
  [ariaLabel]="ariaLabel"
  [ariaRequired]="ariaRequired"
  [ariaInvalid]="ariaInvalid"
/>
    `,
  }),
};

export const WithIcon: Story = {
  args: {
    control: new FormControl(null, [CustomValidators.required]),
    state: 'default',
    type: 'text',
    id: '',
    label: 'E-mail',
    class: '',
    leftIcon: 'ico-checked',
    rightIcon: 'ico-erro',
    helperText: 'Digite seu e-mail principal.',
    errorText: '',
    placeholder: 'Ex: joao.da.silva@gmail.com',
    readOnly: false,
    ariaLabel: '',
    ariaRequired: false,
    ariaInvalid: false,
  },
  render: (args) => ({
    props: { ...args },
    template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSInputTextComponent } from "@bs2/design-system/components/bs2-ds-input-text";
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSInputTextComponent], ... })
export class YourComponentComponent {
  public control: FormControl = new FormControl(null, [CustomValidators.required]);
  public leftIcon: string = 'ico-checked';
  public rightIcon: string = 'ico-erro';
}
-->

<!-- HTML -->
<bs2-ds-input-text
  [control]="control"
  [label]="label"
  [leftIcon]="leftIcon"
  [rightIcon]="rightIcon"
  [placeholder]="placeholder"
/>
    `,
  }),
};

@Component({
  selector: 'bs2-ds-input-text-password-story',
  standalone: true,
  imports: [Bs2DSInputTextComponent],
  template: `
    <bs2-ds-input-text
      [control]="control"
      label="Senha"
      placeholder="Digite sua senha"
      [type]="visible ? 'text' : 'password'"
      [rightIcon]="visible ? 'ico-view-on' : 'ico-view-off'"
      (rightIconClick)="visible = !visible"
    />
  `,
})
class Bs2DSInputTextPasswordStoryComponent {
  visible = false;
  control = new FormControl(null, [CustomValidators.required]);
}

export const Password: Story = {
  decorators: [moduleMetadata({ imports: [Bs2DSInputTextPasswordStoryComponent] })],
  render: () => ({
    template: `<bs2-ds-input-text-password-story></bs2-ds-input-text-password-story>`,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSInputTextComponent } from "@bs2/design-system/components/bs2-ds-input-text";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({ imports: [Bs2DSInputTextComponent], ... })
export class YourComponentComponent {
  public visible = false;
  public control = new FormControl();
}
-->

<!-- HTML -->
<bs2-ds-input-text
  [control]="control"
  label="Senha"
  placeholder="Digite sua senha"
  [type]="visible ? 'text' : 'password'"
  [rightIcon]="visible ? 'ico-view-on' : 'ico-view-off'"
  (rightIconClick)="visible = !visible"
/>
        `.trim(),
      },
    },
  },
};
