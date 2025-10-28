import { Meta, StoryObj } from '@storybook/angular';
import { Bs2DsDialogWrapperComponent } from './bs2-ds-dialog-wrapper.component';
import { DialogData } from './bs2-ds-dialog.component';

const meta: Meta<DialogData> = {
  title: 'Components/Dialog',
  component: Bs2DsDialogWrapperComponent,
  argTypes: {
    title: { control: 'text' },
    content: { control: 'text' },
    primaryText: { control: 'text' },
    secondaryText: { control: 'text' },
  },
  args: {
    title: 'Título do diálogo',
    content: 'Texto do diálogo',
    primaryText: 'Confirmar',
    secondaryText: 'Cancelar',
  },
};

export default meta;
type Story = StoryObj<typeof Bs2DsDialogWrapperComponent>;

function createStory(data: DialogData): Story {
  return {
    render: () => {
      (window as any)['storybookArgs'] = data;
      return { template: `<storybook-bs2-dialog-wrapper></storybook-bs2-dialog-wrapper>` };
    },
  };
}

export const Default = createStory({
  title: 'Título padrão',
  content: 'Texto do diálogo',
  primaryText: 'Confirmar',
  secondaryText: 'Cancelar',
  showIcon: false,
});

export const WithTemplate = createStory({
  title: 'Diálogo com Template',
  content: 'Simulação de TemplateRef',
  primaryText: 'Ok',
  secondaryText: 'Cancelar',
  showIcon: false,
});

export const WithIcon = createStory({
  title: 'Diálogo com Ícone',
  content: 'Texto simples do diálogo',
  primaryText: 'Confirmar',
  secondaryText: 'Cancelar',
  showIcon: true,
});

export const NoSecondaryButton = createStory({
  title: 'Apenas botão primário',
  content: 'Diálogo sem botão secundário',
  primaryText: 'Confirmar',
  showIcon: false,
});
