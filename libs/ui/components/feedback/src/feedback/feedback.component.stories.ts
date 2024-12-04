import { FeedbackContainerComponent } from '../feedback-container/feedback-container.component';
import { FeedbackComponent } from './feedback.component';
import { FilledButtonDirective } from '@bs2-fe-monorepo/ui/directives/button/filled-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FeedbackService } from '../feedback/feedback.service';
import { Component, inject, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'button-mock',
  template: `
    <feedback-container />
    <p>Para fazer o uso do toast, é necessário usar a service FeedbackService.</p>
    <button
      filled-button
      (click)="feedbackService.add({ message: this.message, status: this.status, duration: this.duration })"
      aria-label="label"
    >
      Abrir Toast
    </button>
  `,
  standalone: true,
  imports: [FeedbackContainerComponent, FilledButtonDirective],
})
class MockFeedbackComponent {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration?: number;
  @Input() message = '';

  public feedbackService = inject(FeedbackService);
}

const meta: Meta<MockFeedbackComponent> = {
  component: MockFeedbackComponent,
  title: 'Components/Feedback',
  // tags: ['autodocs'],
  subcomponents: {
    FeedbackComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockFeedbackComponent,
        FeedbackComponent,
        FeedbackComponent,
        FilledButtonDirective,
        FeedbackContainerComponent,
        BrowserAnimationsModule,
      ],
    }),
  ],
  argTypes: {
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
type Story = StoryObj<MockFeedbackComponent>;

export const Static: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
  render: (args: MockFeedbackComponent) => {
    return {
      template: `
        <feedback status='info' message='${args.message}' /><br/>
        <feedback status='attention' message='${args.message}' /><br/>
        <feedback status='error' message='${args.message}' /><br/>
        <feedback status='success' message='${args.message}' />
      `,
    };
  },
};

export const Toast: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
    status: 'success',
  },
};
