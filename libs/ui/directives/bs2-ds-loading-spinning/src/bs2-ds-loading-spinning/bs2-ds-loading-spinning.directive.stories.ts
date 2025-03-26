import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSLoadingSpinningDirective } from './bs2-ds-loading-spinning.directive';

const meta: Meta<Bs2DSLoadingSpinningDirective> = {
  component: Bs2DSLoadingSpinningDirective,
  title: 'Directives/Loading Spinning',
  decorators: [
    moduleMetadata({
      imports: [Bs2DSLoadingSpinningDirective],
    }),
  ],
  argTypes: {
    loader: {
      control: { type: 'boolean' },
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    loaderBG: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
          detail: 'Use hexadecimal, cores padrões ou até variaveis de css. Ex: #f5f5f5 | red | var(--neutral_n2)',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSLoadingSpinningDirective>;

export const Filled: Story = {
  render: (args) => ({
    styles: [
      `
      .sm{ position:relative; border: 1px solid red; width: 100px; height: 100px; }
      .md{ position:relative; border: 1px solid red; width: 200px; height: 200px; }
      .lg{ position:relative; border: 1px solid red; width: 300px; height: 300px; }
      .relative{ position:relative; width:100%; height:100%; }
      .absolute{ position:absolute; width:100%; height:100%; }
    `,
    ],
    template: `
      <div style='display:flex'>
        <div class="sm">
          <div class="relative" [bs2-ds-loading-spinning]='${args.loader}'>primeiro</div>
        </div>
        <div class="md">
          <div class="absolute" [bs2-ds-loading-spinning]='${args.loader}' loaderBG='${args.loaderBG}'>segundo</div>
        </div>
        <div class="lg">
          <div class="absolute" [bs2-ds-loading-spinning]='${args.loader}'>terceiro</div>
        </div>
      </div>
    `,
  }),
};
