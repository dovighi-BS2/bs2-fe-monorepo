import { FeedbackContainerComponent } from '../feedback-container/feedback-container.component';
import { FeedbackItemComponent } from './feedback-item.component';
import { Component, Input } from '@angular/core';
import { FilledButtonDirective } from '@bs2-fe-monorepo/ui/directives/button/filled-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FeedbackContainerService } from '../feedback-container/feedback-container.service';
import { FeedbackItem } from './feedback-item.interface';

const mock = {
  feedbackItems: [] as FeedbackItem[],
  default: { duration: 5000 },
  add(feedbackItem: FeedbackItem) {
    feedbackItem.id = Math.random();
    mock.feedbackItems = [...mock.feedbackItems, { ...mock.default, ...feedbackItem, class: 'in' }];

    setTimeout(() => {
      mock.feedbackItems = mock.feedbackItems.filter((item) => item.id !== feedbackItem.id);
    }, feedbackItem.duration || mock.default.duration);

    return '';
  },
};

@Component({
  selector: 'father-simulation',
  template: `<feedback-item [status]="status" [message]="message" [type]="type" [testId]="testId" />`,
  standalone: true,
  imports: [FeedbackItemComponent],
})
class FatherSimulationComponent {
  @Input() testId? = '';
  @Input() status: 'info' | 'attention' | 'error' | 'success' = 'info';
  @Input() duration = 5000;
  @Input() message = '';
  @Input() type: 'static' | 'toast' = 'static';
}

const meta: Meta<FatherSimulationComponent> = {
  component: FatherSimulationComponent,
  title: 'Components/Feedback Item',
  // tags: ['autodocs'],
  subcomponents: {
    FeedbackItemComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [FatherSimulationComponent, FeedbackItemComponent, FilledButtonDirective, FeedbackContainerComponent],
      providers: [
        {
          provide: FeedbackContainerService,
          useValue: mock,
        },
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
type Story = StoryObj<FatherSimulationComponent>;

export const Static: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
};

export const AllStatus: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
  render: (args: FatherSimulationComponent) => {
    return {
      template: `
        <feedback-item status='info' message='${args.message}' /><br/>
        <feedback-item status='attention' message='${args.message}' /><br/>
        <feedback-item status='error' message='${args.message}' /><br/>
        <feedback-item status='success' message='${args.message}' />
      `,
    };
  },
};

// export const Toast: Story = {
//   args: {
//     type: 'toast',
//     message: 'Lorem ipsum dolor sit amet',
//   },
//   render: (args: FatherSimulationComponent) => {
//     // const feedbackItems = [
//     //   { duration: 5000, message: 'Lorem ipsum dolor sit amet', status: 'info', type: 'toast' },
//     //   { duration: 5000, message: 'Lorem ipsum dolor sit amet', status: 'attention', type: 'toast' },
//     //   { duration: 5000, message: 'Lorem ipsum dolor sit amet', status: 'error', type: 'toast' },
//     //   { duration: 5000, message: 'Lorem ipsum dolor sit amet', status: 'success', type: 'toast' },
//     //   { duration: 5000, message: 'Lorem ipsum dolor sit amet', status: 'error', type: 'toast' },
//     // ];

//     return {
//       template: `
//         <p>Visualize em modo tela cheia para melhor experiência</p>
//         <button filled-button aria-label='Abrir toast' (click)='${mock.add({ message: "hahaha" })}'>Abrir toast</button>
//         <feedback-container />
//       `,
//     };
//   },
// };
