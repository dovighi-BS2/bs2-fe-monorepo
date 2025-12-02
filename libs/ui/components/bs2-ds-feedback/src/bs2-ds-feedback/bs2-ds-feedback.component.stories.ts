import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, inject, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  Bs2DSFeedbackContainerComponent,
  Bs2DSFeedbackComponent,
  Bs2DSFeedbackService,
} from '@bs2/design-system/components/bs2-ds-feedback';

@Component({
  selector: 'mock-bs2-ds-feedback',
  template: `
    <bs2-ds-feedback-container />
    <p>Para fazer o uso do toast, é necessário usar a service Bs2DSFeedbackService.</p>
    <button
      bs2-ds-filled-button
      (click)="
        bs2DSFeedbackService.add({
          title: this.title,
          message: this.message,
          status: this.status,
          duration: 5000
        })
      "
      aria-label="label"
    >
      Abrir Feedback
    </button>
  `,
  standalone: true,
  imports: [Bs2DSFeedbackContainerComponent, Bs2DSFilledButtonDirective],
})
class MockBs2DSFeedbackComponent {
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() title = '';
  @Input() message = '';

  public bs2DSFeedbackService = inject(Bs2DSFeedbackService);
}

const meta: Meta<MockBs2DSFeedbackComponent> = {
  component: MockBs2DSFeedbackComponent,
  title: 'Components/Feedback',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          Os componentes de feedback são elementos visuais projetados para comunicar ao usuário o status de ações, interações ou processos dentro da interface. Com indicadores de  sucesso, erro, alerta e informação. Esses componentes têm como objetivo fornecer respostas claras e imediatas ao usuário, garantindo que ele compreenda o impacto de suas ações e saiba como proceder em seguida.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockBs2DSFeedbackComponent,
        Bs2DSFeedbackComponent,
        Bs2DSFeedbackComponent,
        Bs2DSFilledButtonDirective,
        Bs2DSFeedbackContainerComponent,
        BrowserAnimationsModule,
      ],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    message: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: { type: { summary: 'string' } },
    },
    status: {
      control: 'select',
      options: ['info', 'attention', 'error', 'success'],
      defaultValue: { summary: 'info' },
      table: { type: { summary: "'info' | 'attention' | 'error' | 'success'" } },
    },
  },
};
export default meta;
type Story = StoryObj<MockBs2DSFeedbackComponent>;

export const Static: Story = {
  args: {
    title: 'Lorem ipsum dolor title',
    message: 'Lorem ipsum dolor message',
  },
  render: (args: MockBs2DSFeedbackComponent) => {
    return {
      props: { ...args },
      template: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSFeedbackComponent } from '@bs2/design-system/components/bs2-ds-feedback';
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSFeedbackComponent], ... })
export class YourComponentComponent {
    public title: string = 'Lorem ipsum dolor title';
    public message: string = 'Lorem ipsum dolor message';
}
-->

<!-- HTML -->
<bs2-ds-feedback status='info' [title]='title' [message]='message' /><br/>
<bs2-ds-feedback status='attention' [title]='title' [message]='message' /><br/>
<bs2-ds-feedback status='error' [title]='title' [message]='message' /><br/>
<bs2-ds-feedback status='success' [title]='title' [message]='message' />
      `,
    };
  },
};

export const Toast: Story = {
  args: {
    title: 'Título teste',
    message: 'Mensagem teste',
  },
  parameters: {
    docs: {
      source: {
        code: `
<!-- TYPESCRIPT -->
<!--
import { Bs2DSFeedbackContainerComponent, Bs2DSFeedbackService } from '@bs2/design-system/components/bs2-ds-feedback';
import { Component } from '@angular/core';

@Component({ imports: [Bs2DSFeedbackContainerComponent, Bs2DSFeedbackService], ... })
export class YourComponentComponent {
  public bs2DSFeedbackService = inject(Bs2DSFeedbackService);
}
-->

<!-- HTML -->
<bs2-ds-feedback-container />
<button (click)="bs2DSFeedbackService.add({ title: 'Título teste', message: 'Mensagem teste', status: 'info', duration: 5000 })">Abrir Feedback</button>
          `.trim(),
      },
    },
  },
};
