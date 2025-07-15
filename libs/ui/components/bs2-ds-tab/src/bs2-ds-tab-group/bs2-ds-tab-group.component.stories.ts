import { Bs2DSTabGroupComponent } from './../bs2-ds-tab-group/bs2-ds-tab-group.component';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSTabItemComponent } from '../bs2-ds-tab-item/bs2-ds-tab-item.component';

const meta: Meta<Bs2DSTabGroupComponent> = {
  component: Bs2DSTabGroupComponent,
  title: 'Components/Tabs',
  argTypes: {
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      defaultValue: { summary: 'neutral' },
      table: {
        type: {
          summary: "'start' | 'center' | 'end'",
        },
      },
    },
    full: {
      control: { type: 'boolean' },
      defaultValue: { summary: false },
      table: {
        type: {
          summary: 'false',
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
    selectedTab: {
      control: { type: 'text' },
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSTabGroupComponent, Bs2DSTabItemComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<Bs2DSTabGroupComponent>;

export const Default: Story = {
  args: {
    align: 'start',
    selectedTab: 'Tab 3',
    full: false,
  },
  render: (args: Bs2DSTabGroupComponent) => {
    return {
      props: {
        align: args.align,
        selectedTab: args.selectedTab,
        full: args.full,
      },
      template: `
        <bs2-ds-tab-group align='align' [full]='full' [selectedTab]='selectedTab'>
          <bs2-ds-tab-item title='Tab 1'>Conteúdo Tab 1</bs2-ds-tab-item>
          @if(full){
          <bs2-ds-tab-item title='Tab 2'>Conteúdo Tab 2</bs2-ds-tab-item>
          }
          <bs2-ds-tab-item title='Tab 3'>Conteúdo Tab 3</bs2-ds-tab-item>
        </bs2-ds-tab-group>
      `,
    };
  },
};
