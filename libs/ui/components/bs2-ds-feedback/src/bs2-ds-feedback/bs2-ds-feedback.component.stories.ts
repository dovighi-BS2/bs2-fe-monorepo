import { Bs2DSFeedbackService } from './bs2-ds-feedback.service';
import { Bs2DSFeedbackComponent } from './bs2-ds-feedback.component';
import { Bs2DSFilledButtonDirective } from '@bs2/design-system/directives/bs2-ds-button/bs2-ds-filled-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component, inject, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Bs2DSFeedbackContainerComponent } from '../bs2-ds-feedback-container/bs2-ds-feedback-container.component';

@Component({
  selector: 'button-mock',
  template: `
    <bs2-ds-feedback-container />
    <p>Para fazer o uso do toast, é necessário usar a service Bs2DSFeedbackService.</p>
    <button
      bs2-ds-filled-button
      (click)="
        feedbackService.add({ title: this.title, message: this.message, status: this.status, duration: this.duration })
      "
      aria-label="label"
    >
      Abrir Toast
    </button>
  `,
  standalone: true,
  imports: [Bs2DSFeedbackContainerComponent, Bs2DSFilledButtonDirective],
})
class MockBs2DSFeedbackComponent {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration?: number;
  @Input() title = '';
  @Input() message = '';

  public feedbackService = inject(Bs2DSFeedbackService);
}

const meta: Meta<MockBs2DSFeedbackComponent> = {
  component: MockBs2DSFeedbackComponent,
  title: 'Components/Feedback',
  subcomponents: {
    Bs2DSFeedbackComponent,
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
  ],
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    message: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    status: {
      control: 'select',
      options: ['info', 'attention', 'error', 'success'],
      defaultValue: { summary: 'visible' },
      table: {
        type: {
          summary: 'info | attention | error | success',
        },
      },
    },
    duration: {
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'number | undefined',
        },
      },
    },
    testId: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
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
      template: `
        <bs2-ds-feedback status='info' title='${args.title}' message='${args.message}' /><br/>
        <bs2-ds-feedback status='attention' title='${args.title}' message='${args.message}' /><br/>
        <bs2-ds-feedback status='error' title='${args.title}' message='${args.message}' /><br/>
        <bs2-ds-feedback status='success' title='${args.title}' message='${args.message}' />
      `,
    };
  },
};

export const Toast: Story = {
  args: {
    title: 'Lorem ipsum dolor title',
    message: 'Lorem ipsum dolor message',
    status: 'success',
  },
};
