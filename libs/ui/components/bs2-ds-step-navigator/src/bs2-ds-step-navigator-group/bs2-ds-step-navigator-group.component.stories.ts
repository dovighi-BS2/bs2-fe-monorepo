import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSStepNavigatorGroupComponent } from './bs2-ds-step-navigator-group.component';
import { Bs2DSStepNavigatorItemComponent } from '../bs2-ds-step-navigator-item/bs2-ds-step-navigator-item.component';

const meta: Meta<Bs2DSStepNavigatorGroupComponent> = {
  component: Bs2DSStepNavigatorGroupComponent,
  title: 'Components/StepNavigator',
  argTypes: {
    activatedIndex: {
      control: { type: 'number' },
      description: 'opcional',
      defaultValue: { summary: 'text' },
    },
    timer: {
      control: { type: 'number' },
      description: 'opcional',
      defaultValue: { summary: 'text' },
    },
    loop: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
    auto: {
      control: { type: 'boolean' },
      description: 'opcional',
      defaultValue: { summary: 'false' },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSStepNavigatorGroupComponent, Bs2DSStepNavigatorItemComponent],
    }),
  ],
};
export default meta;
type Story = StoryObj<Bs2DSStepNavigatorGroupComponent>;

export const Default: Story = {
  args: {
    activatedIndex: 3,
    timer: 5000,
    loop: true,
    auto: true,
  },
  render: (args: Bs2DSStepNavigatorGroupComponent) => {
    return {
      props: {
        activatedIndex: args.activatedIndex,
        timer: args.timer,
        loop: args.loop,
        auto: args.auto,
      },
      template: `
        <bs2-ds-step-navigator-group [activatedIndex]='activatedIndex' [timer]='timer' [loop]='loop' [auto]='auto'>
          <span ngProjectAs='previous'>Voltar</span>
          <span ngProjectAs='next'>Próximo</span>
          <bs2-ds-step-navigator-item>
            aa
          </bs2-ds-step-navigator-item>
          <bs2-ds-step-navigator-item>
            bb
          </bs2-ds-step-navigator-item>
          <bs2-ds-step-navigator-item>
            cc
          </bs2-ds-step-navigator-item>
          <bs2-ds-step-navigator-item>
            dd
          </bs2-ds-step-navigator-item>
          <bs2-ds-step-navigator-item>
            ee
          </bs2-ds-step-navigator-item>
          <bs2-ds-step-navigator-item>
            ff
          </bs2-ds-step-navigator-item>
        </bs2-ds-step-navigator-group>
      `,
    };
  },
};
