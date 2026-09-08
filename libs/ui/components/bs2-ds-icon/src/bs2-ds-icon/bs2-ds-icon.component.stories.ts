import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSIconComponent } from '@bs2/design-system/components/bs2-ds-icon';
import { HttpClientModule } from '@angular/common/http';

const ICON_NAMES = ['ico-checked', 'ico-erro', 'ico-alerta'] as const;

const meta: Meta<Bs2DSIconComponent> = {
  component: Bs2DSIconComponent,
  title: 'Components/Icon',
  parameters: {
    layout: 'centered',
    docs: {
      autodocs: false,
      description: {
        component:
          'Galeria com os icones disponiveis no pacote. O valor informado no input "name" deve ser o nome do arquivo SVG em assets/icons, sem a extensao.',
      },
    },
  },
  decorators: [
    moduleMetadata({
      imports: [Bs2DSIconComponent, HttpClientModule],
    }),
  ],
  argTypes: {
    name: {
      control: 'select',
      options: ICON_NAMES,
      description: 'Nome do icone em assets/icons (sem .svg)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
};

export default meta;

type Story = StoryObj<Bs2DSIconComponent>;

export const Playground: Story = {
  args: {
    name: 'ico-checked',
  },
  parameters: {
    docs: {
      source: {
        code: `<bs2-ds-icon [name]="name"></bs2-ds-icon>`,
      },
    },
  },
  render: (args) => ({
    props: {
      ...args,
      iconName: args.name,
    },
    template: `
<div style="display:flex;align-items:center;gap:12px;font-family:Arial,sans-serif;color:#2d3748;">
  <img [src]="'/assets/icons/' + iconName + '.svg'" [alt]="iconName" style="width:24px;height:24px;display:block" />
  <span>{{ iconName }}</span>
</div>
`,
  }),
};

export const Gallery: Story = {
  parameters: {
    docs: {
      source: {
        code: `<bs2-ds-icon name="ico-checked"></bs2-ds-icon>\n<bs2-ds-icon name="ico-erro"></bs2-ds-icon>\n<bs2-ds-icon name="ico-alerta"></bs2-ds-icon>`,
      },
    },
  },
  render: () => ({
    props: {
      icons: ICON_NAMES,
    },
    template: `
<div style="font-family:Arial,sans-serif;min-width:520px;max-width:760px;">
  <p style="margin:0 0 14px 0;color:#4a5568;font-size:13px;">
    Use o nome abaixo no input <code style="font-family:Consolas,monospace">name</code> do componente.
  </p>
  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:12px;">
    @for (iconName of icons; track iconName) {
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border:1px solid #d9e2ec;border-radius:10px;padding:16px;background:#ffffff;min-height:92px;">
        <img [src]="'/assets/icons/' + iconName + '.svg'" [alt]="iconName" style="width:24px;height:24px;display:block" />
        <code style="font-family:Consolas,monospace;font-size:12px;color:#1a202c">{{ iconName }}</code>
      </div>
    }
  </div>
</div>
`,
  }),
};
