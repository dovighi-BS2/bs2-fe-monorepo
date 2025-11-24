import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSDividerComponent } from './bs2-ds-divider.component';

const meta: Meta<Bs2DSDividerComponent> = {
  component: Bs2DSDividerComponent,
  title: 'Components/Divider',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          O divider é um elemento visual usado para separar dois ou mais conteúdos. É um elemento de layout que pode separar diversos tipos de componentes como textos, listas ou grupos específicos de inputs ou outros componentes..
          Eles ajudam a criar uma hierarquia visual coesa, aproveitasndo e organizando o uso do espaço espaço, melhorando a experiência do usuário.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSDividerComponent],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
  argTypes: {
    space: {
      control: { type: 'number' },
      defaultValue: { summary: '20' },
      table: { type: { summary: 'number' } },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSDividerComponent>;

export const Default: Story = {
  args: {
    space: 20,
  },
};
