import { FeedbackContainerComponent } from '../feedback-container/feedback-container.component';
import { FeedbackComponent } from './feedback.component';
import { FilledButtonDirective } from '@bs2-fe-monorepo/ui/directives/button/filled-button';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

const meta: Meta<FeedbackComponent> = {
  component: FeedbackComponent,
  title: 'Components/Feedback Item',
  // tags: ['autodocs'],
  subcomponents: {
    FeedbackComponent,
  },
  decorators: [
    moduleMetadata({
      imports: [FeedbackComponent, FeedbackComponent, FilledButtonDirective, FeedbackContainerComponent],
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
type Story = StoryObj<FeedbackComponent>;

export const Static: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
};

export const AllStatus: Story = {
  args: {
    message: 'Lorem ipsum dolor sit amet',
  },
  render: (args: FeedbackComponent) => {
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

// export const Toast: Story = {
//   args: {
//     type: 'toast',
//     message: 'Lorem ipsum dolor sit amet',
//   },
//   render: (args: FeedbackComponent) => {
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
