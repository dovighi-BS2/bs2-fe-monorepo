import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSStepNavigatorGroupComponent } from './bs2-ds-step-navigator-group.component';
import { Bs2DSStepNavigatorItemComponent } from '../bs2-ds-step-navigator-item/bs2-ds-step-navigator-item.component';

const meta: Meta<Bs2DSStepNavigatorGroupComponent> = {
  component: Bs2DSStepNavigatorGroupComponent,
  title: 'Components/StepNavigatorGroup',
  argTypes: {},
  subcomponents: {
    Bs2DSStepNavigatorGroupComponent,
    Bs2DSStepNavigatorItemComponent,
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
  args: {},
  render: (args: Bs2DSStepNavigatorGroupComponent) => {
    return {
      template: `
        <bs2-ds-step-navigator-group>
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
