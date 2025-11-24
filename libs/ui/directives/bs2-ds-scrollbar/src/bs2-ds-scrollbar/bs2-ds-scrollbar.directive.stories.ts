import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSScrollbarDirective } from './bs2-ds-scrollbar.directive';

const meta: Meta<Bs2DSScrollbarDirective> = {
  component: Bs2DSScrollbarDirective,
  title: 'Directives/Scrollbar',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component: `
          A scrollbar é um componente visual que indica e permite a navegação em conteúdos que excedem o espaço visível na tela, também conhecido como dobra. Ela serve para mostrar a posição atual do usuário no conteúdo e oferecer um meio de interação para rolar vertical ou horizontalmente telas que ocupem espaços mais longos, garantindo acessibilidade e usabilidade em interfaces com conteúdo extenso.
        `.trim(),
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSScrollbarDirective],
    }),
    (storyFunc) => ({
      ...storyFunc(),
      styles: [...(storyFunc().styles || []), `:host { display: block; width: 312px; }`],
    }),
  ],
};
export default meta;
type Story = StoryObj<Bs2DSScrollbarDirective>;

export const Default: Story = {
  render: () => ({
    template: `
    <style>[bs2-ds-scrollbar] { width: 100%; height: 300px; overflow-y: auto; overflow-x: hidden; }</style>
    <div bs2-ds-scrollbar>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellendus delectus debitis, corporis a ipsum
        cupiditate totam asperiores nostrum consequatur animi, facere quisquam optio harum esse veritatis facilis non
        quis? <br /><br />
    </div>
    `,
  }),
};
