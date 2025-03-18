import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSLoaderDirective } from './bs2-ds-loader.directive';

const meta: Meta<Bs2DSLoaderDirective> = {
  component: Bs2DSLoaderDirective,
  title: 'Directives/Loader',
  decorators: [
    moduleMetadata({
      imports: [Bs2DSLoaderDirective],
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
type Story = StoryObj<Bs2DSLoaderDirective>;

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
          <div class="relative" [bs2-ds-loader]='${args.loader}'>primeiro</div>
        </div>
        <div class="md">
          <div class="absolute" [bs2-ds-loader]='${args.loader}' loaderBG='${args.loaderBG}'>segundo</div>
        </div>
        <div class="lg">
          <div class="absolute" [bs2-ds-loader]='${args.loader}'>terceiro</div>
        </div>
      </div>
    `,
  }),
};
