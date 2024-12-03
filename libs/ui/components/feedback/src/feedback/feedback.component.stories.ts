import { FeedbackContainerComponent } from '../feedback-container/feedback-container.component';
import { FeedbackComponent } from './feedback.component';
import { FilledButtonDirective } from '@bs2-fe-monorepo/ui/directives/button/filled-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FeedbackContainerService } from '../feedback-container/feedback-container.service';
import { Component, inject, Input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'button-mock',
  template: `
    <feedback-container />
    <button
      filled-button
      (click)="
        feedbackService.add({ type: this.type, message: this.message, status: this.status, duration: this.duration })
      "
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
  @Input() duration = 5000;
  @Input() message = '';
  @Input() type: 'static' | 'toast' = 'static';

  public feedbackService = inject(FeedbackContainerService);
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
    type: {
      control: 'select',
      options: ['static', 'toast'],
      defaultValue: { summary: 'static' },
      table: {
        type: {
          summary: 'static | toast',
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
    type: 'toast',
  },
};
