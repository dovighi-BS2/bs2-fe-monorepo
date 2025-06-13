import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { Bs2DSSelectorsComponent } from './bs2-ds-selectors.component';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';

const meta: Meta<Bs2DSSelectorsComponent> = {
  component: Bs2DSSelectorsComponent,
  title: 'Form Components/Selectors',
  subcomponents: {},
  decorators: [
    moduleMetadata({
      imports: [Bs2DSSelectorsComponent],
    }),
  ],
  argTypes: {
    testId: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    type: {
      control: 'select',
      options: ['radio', 'checkbox', 'switch'],
      defaultValue: { summary: 'checkbox' },
      table: {
        type: {
          summary: 'radio | checkbox | switch',
        },
      },
    },
    control: {
      defaultValue: { summary: 'new FormControl()' },
      table: {
        type: {
          summary: 'FormControl',
          detail:
            "Para conseguir marcar varios selectors, use um valor inicial de array: new FormControl([])\nPara marcar  apenas um unico selectors, use um valor inicial de '': new FormControl('')",
        },
      },
    },
    value: {
      control: 'text',
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'any',
        },
      },
    },
    isMain: {
      control: 'boolean',
      defaultValue: { summary: 'false' },
      table: {
        type: {
          summary: 'boolean',
        },
      },
    },
    totalItemsCount: {
      control: 'number',
      defaultValue: { summary: '(vazio)' },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    subject: {
      defaultValue: { summary: 'new Subject<any>()' },
      table: {
        type: {
          summary: 'Subject<any>',
        },
      },
    },
    emitter: {
      defaultValue: { summary: 'new EventEmitter<any>()' },
      table: {
        type: {
          summary: 'Function',
        },
      },
    },
  },
};
export default meta;
type Story = StoryObj<Bs2DSSelectorsComponent>;

export const Default: Story = {
  args: {
    type: 'checkbox',
  },
  render: (args) => {
    const control = new FormControl('');

    return {
      props: {
        ...args,
        control,
      },
      template: `
          <bs2-ds-selectors
            [type]="type"
            [control]="control"
            value="Selector Value"
          />
      `,
    };
  },
};

export const Radio: Story = {
  render: () => {
    const control = new FormControl('');
    const options = [
      { id: 1, text: 'Banana' },
      { id: 2, text: 'Maça' },
      { id: 3, text: 'Uva' },
    ];

    return {
      props: {
        control,
        options,
      },
      template: `
        <ng-container *ngFor="let item of options">
          <bs2-ds-selectors
            type="radio"
            [control]="control"
            [value]="item.id"
            (emitter)="emitter($event)"
          >
            <ng-template>{{ item.text }}</ng-template>
          </bs2-ds-selectors>
        </ng-container>
      `,
    };
  },
};

export const Checkbox: Story = {
  render: () => {
    const control = new FormControl([]);
    const options = [
      { id: 1, text: 'Banana' },
      { id: 2, text: 'Maça' },
      { id: 3, text: 'Uva' },
    ];

    const emitter = () => {
      if (control.value.length === options.length) return control.setValue([]);
      if (control.value.length >= 0) return control.setValue(options.map((item) => item.id));
    };

    return {
      props: {
        control,
        options,
        emitter,
      },
      template: `
        <bs2-ds-selectors
          type="checkbox"
          [control]="control"
          value="Todos"
          [isMain]="true"
          [totalItemsCount]="options.length"
          (emitter)="emitter($event)"
        >
          <ng-template>Todos</ng-template>
        </bs2-ds-selectors>

        <ng-container *ngFor="let item of options">
          <bs2-ds-selectors
            type="checkbox"
            [control]="control"
            [value]="item.id"
          >
            <ng-template>{{ item.text }}</ng-template>
          </bs2-ds-selectors>
        </ng-container>
      `,
    };
  },
};

export const Switch: Story = {
  render: () => {
    const control = new FormControl([]);
    const options = [
      { id: 1, text: 'Banana' },
      { id: 2, text: 'Maça' },
      { id: 3, text: 'Uva' },
    ];

    const emitter = () => {
      if (control.value.length === options.length) return control.setValue([]);
      if (control.value.length >= 0) return control.setValue(options.map((item) => item.id));
    };

    return {
      props: {
        control,
        options,
        emitter,
      },
      template: `
        <bs2-ds-selectors
          type="switch"
          [control]="control"
          value="Todos"
          [isMain]="true"
          [totalItemsCount]="options.length"
          (emitter)="emitter($event)"
        >
          <ng-template>Todos</ng-template>
        </bs2-ds-selectors>

        <ng-container *ngFor="let item of options">
          <bs2-ds-selectors
            type="switch"
            [control]="control"
            [value]="item.id"
          >
            <ng-template>{{ item.text }}</ng-template>
          </bs2-ds-selectors>
        </ng-container>
      `,
    };
  },
};
