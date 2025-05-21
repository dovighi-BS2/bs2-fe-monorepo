import { Bs2DSOrderDirective } from './bs2-ds-order/bs2-ds-order.directive';
import { Bs2DSPushDirective } from './bs2-ds-push/bs2-ds-push.directive';
import { Bs2DSOffsetDirective } from './bs2-ds-offset/bs2-ds-offset.directive';
import { Bs2DSColumnDirective } from './bs2-ds-column/bs2-ds-column.directive';
import { Bs2DSRowDirective } from './bs2-ds-row/bs2-ds-row.directive';
import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Component } from '@angular/core';

const boxStyle = `
      <style>
        .box {
          font-size:12px;
          display: block;
          text-align: center;
          width:100%;
          border-radius: 5px;
          padding: 5px 0px;
          background-color: rgba(0,0,0,0.1);
          margin-bottom: 10px;
        }
      </style>
      `;

const column = (amount: number, columns?: number[], offsets?: number[], pushs?: number[], orders?: number[]) =>
  Array(amount)
    .fill(0)
    .map(
      () =>
        `<div
            ${(columns || []).length > 0 ? `[bs2-ds-column]="${JSON.stringify(columns || [])}"` : ''}
            ${(offsets || []).length > 0 ? `[bs2-ds-offset]="${JSON.stringify(offsets || [])}"` : ''}
            ${(pushs || []).length > 0 ? `[bs2-ds-push]="${JSON.stringify(pushs || [])}"` : ''}
            ${(orders || []).length > 0 ? `[bs2-ds-order]="${JSON.stringify(orders || [])}"` : ''}
          >
            <span class='box'>
              ${(columns || []).length > 0 ? `columns: ${getBreakpoints(columns)}` : ''}
              ${(offsets || []).length > 0 ? `offsets: ${getBreakpoints(offsets)}` : ''}
              ${(pushs || []).length > 0 ? `pushs: ${getBreakpoints(pushs)}` : ''}
              ${(orders || []).length > 0 ? `orders: ${getBreakpoints(orders)}` : ''}
            </span>
          </div>`
    )
    .join('');

function getBreakpoints(columns: number[]) {
  let text = ``;
  if (!isNaN(columns[0]) && columns[0] !== 0) text += `(xs:${columns[0]})`;
  if (!isNaN(columns[1]) && columns[1] !== 0) text += `(sm:${columns[1]})`;
  if (!isNaN(columns[2]) && columns[2] !== 0) text += `(md:${columns[2]})`;
  if (!isNaN(columns[3]) && columns[3] !== 0) text += `(lg:${columns[3]})`;
  if (!isNaN(columns[4]) && columns[4] !== 0) text += `(xl:${columns[4]})`;
  if (!isNaN(columns[5]) && columns[5] !== 0) text += `(xxl:${columns[5]})`;
  return text;
}

@Component({
  selector: 'grid-mock',
  imports: [Bs2DSRowDirective, Bs2DSColumnDirective, Bs2DSOffsetDirective, Bs2DSPushDirective, Bs2DSOrderDirective],
  template: ``,
  standalone: true,
})
class MockGridComponent {}

const meta: Meta<MockGridComponent> = {
  component: MockGridComponent,
  title: 'Directives/Grid',
  subcomponents: {
    Bs2DSRowDirective,
    Bs2DSColumnDirective,
    Bs2DSOffsetDirective,
    Bs2DSPushDirective,
    Bs2DSOrderDirective,
  },
  decorators: [
    moduleMetadata({
      imports: [
        MockGridComponent,
        Bs2DSRowDirective,
        Bs2DSColumnDirective,
        Bs2DSOffsetDirective,
        Bs2DSPushDirective,
        Bs2DSOrderDirective,
      ],
    }),
  ],
  argTypes: {},
};
export default meta;
type Story = StoryObj<MockGridComponent>;

export const TwelveColumn: Story = {
  render: () => ({
    template: `
      ${boxStyle}
      <h3>(Default Max Column:12) (Default Gap: 30px)</h3>
      <div bs2-ds-row>
        ${column(1, [12])}
        ${column(2, [6])}
        ${column(3, [4])}
        ${column(4, [3])}
        ${column(6, [2])}
        ${column(12, [1])}
      </div>
    `,
  }),
};

export const Responsive: Story = {
  render: () => ({
    template: `
      ${boxStyle}
        <div bs2-ds-row gap='30px'>
            <div [bs2-ds-column]="[12, 6, 4, 3]"><span class="box">${getBreakpoints([12, 6, 4, 3])}</span></div>
            <div [bs2-ds-column]="[12, 6, 4, 3]"><span class="box">${getBreakpoints([12, 6, 4, 3])}</span></div>
            <div [bs2-ds-column]="[12, 6, 4, 3]"><span class="box">${getBreakpoints([12, 6, 4, 3])}</span></div>
            <div [bs2-ds-column]="[12, 6, 4, 3]"><span class="box">${getBreakpoints([12, 6, 4, 3])}</span></div>
          </div>
    `,
  }),
};

export const CustomMaxColumnAndGap: Story = {
  render: () => ({
    template: `
      ${boxStyle}
      <h3>(Max Column:16) (Gap: 10px)</h3>
      <p>Atributo: [columns] pode ser no maximo 20. Caso precise de mais colunas, basta ir no arquivo bs2-ds-grid.directive.scss e mudar a variavel $maxColumns.</p>
      <p>Atributo [gap] é uma string livre, pode ser qualquer numero em qualquer unidade de medida CSS.</p>
      <div bs2-ds-row columns='16' gap='10px'>
        ${column(1, [16])}
        ${column(2, [8])}
        ${column(4, [4])}
        ${column(8, [2])}
        ${column(16, [1])}
      </div>
    `,
  }),
};

export const Offset: Story = {
  render: () => ({
    template: `
      ${boxStyle}
        <div bs2-ds-row gap='30px'>
          ${column(1, [4], [0, 6, 3])}
          ${column(1, [4], [1])}
        </div>
    `,
  }),
};

export const Push: Story = {
  render: () => ({
    template: `
      ${boxStyle}
        <div bs2-ds-row gap='30px'>
          ${column(1, [4], [], [0, 6, 1])}
          ${column(1, [1], [], [])}
        </div>
    `,
  }),
};

export const Order: Story = {
  render: () => ({
    template: `
      ${boxStyle}
        <div bs2-ds-row gap='10px'>
          ${column(1, [4], [], [], [2, 1])}
          ${column(1, [8], [], [], [1, 2])}
        </div>
    `,
  }),
};
