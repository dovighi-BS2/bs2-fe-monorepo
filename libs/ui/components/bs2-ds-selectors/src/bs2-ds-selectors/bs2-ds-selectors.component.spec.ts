import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSSelectorsComponent } from './bs2-ds-selectors.component';
import { By } from '@angular/platform-browser';
import { Component, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Bs2DSRadioComponent } from './bs2-ds-radio/bs2-ds-radio.component';
import { EventEmitter } from 'stream';

@Component({
  selector: 'mock-selectors',
  standalone: true,
  imports: [CommonModule, Bs2DSSelectorsComponent],
  template: `
    <div class="bs2_ds_selectors__wrapper">
      @if(isMain){
      <bs2-ds-selectors
        testId="{{ testId }}_is_main"
        [isMain]="isMain"
        [totalItemsCount]="options.length"
        [type]="type"
        [control]="control"
        value="isMainValueTest"
      >
        <ng-template>Todos</ng-template>
      </bs2-ds-selectors>
      }
      <ng-container *ngFor="let item of options">
        <bs2-ds-selectors testId="{{ testId }}_{{ item.id }}" [type]="type" [control]="control" [value]="item.id">
          <ng-template>{{ item.text }}</ng-template>
        </bs2-ds-selectors>
      </ng-container>
    </div>
  `,
})
class MockSelectorsComponent {
  @Input() testId = '';
  @Input() type: 'radio' | 'checkbox' | 'switch' = 'checkbox';
  @Input() isMain = false;
  @Input() options: any[] = [];
  @Input() control = new FormControl<any>([], []);
  @Input() totalItemsCount?: number;
}

describe('Bs2DSSelectorsComponent', () => {
  const testId = 'bs2_ds_selectors__test_id';
  const options = [
    { id: 1, text: 'Banana' },
    { id: 2, text: 'Maça' },
    { id: 3, text: 'Uva' },
  ];

  let component: MockSelectorsComponent;
  let fixture: ComponentFixture<MockSelectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockSelectorsComponent, Bs2DSRadioComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MockSelectorsComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[checkbox + switch] should be able to select only one', () => {
    component.control = new FormControl(1, []);

    for (const type of ['radio', 'checkbox', 'switch']) {
      component.control.setValue(1);
      component.type = type as 'radio' | 'checkbox' | 'switch';
      fixture.detectChanges();

      let selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      let selectors2 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_2']`));
      let selectors3 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_3']`));

      expect(Object.keys(selectors1.classes).includes('filled')).toBe(true);
      expect(Object.keys(selectors2.classes).includes('filled')).toBe(false);
      expect(Object.keys(selectors3.classes).includes('filled')).toBe(false);

      component.control.setValue(2);
      fixture.detectChanges();

      selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      selectors2 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_2']`));
      selectors3 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_3']`));

      expect(Object.keys(selectors1.classes).includes('filled')).toBe(false);
      expect(Object.keys(selectors2.classes).includes('filled')).toBe(true);
      expect(Object.keys(selectors3.classes).includes('filled')).toBe(false);
    }
  });

  it('[checkbox + switch] should be able to select multiple', () => {
    component.control = new FormControl([1], []);
    for (const type of ['radio', 'checkbox', 'switch']) {
      component.control.setValue([1]);
      component.type = type as 'radio' | 'checkbox' | 'switch';
      fixture.detectChanges();

      let selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      let selectors2 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_2']`));
      let selectors3 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_3']`));

      expect(Object.keys(selectors1.classes).includes('filled')).toBe(true);
      expect(Object.keys(selectors2.classes).includes('filled')).toBe(false);
      expect(Object.keys(selectors3.classes).includes('filled')).toBe(false);

      component.control.setValue([2, 3]);
      fixture.detectChanges();

      selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      selectors2 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_2']`));
      selectors3 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_3']`));

      expect(Object.keys(selectors1.classes).includes('filled')).toBe(false);
      expect(Object.keys(selectors2.classes).includes('filled')).toBe(true);
      expect(Object.keys(selectors3.classes).includes('filled')).toBe(true);
    }
  });

  it('[checkbox + switch] should be able to unselect', () => {
    for (const type of ['checkbox', 'switch']) {
      component.type = type as 'checkbox' | 'switch';
      component.control = new FormControl(1);
      fixture.detectChanges();

      let selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      expect(Object.keys(selectors1.classes).includes('filled')).toBe(true);

      selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));

      selectors1.componentInstance.toggle();
      fixture.detectChanges();
      expect(Object.keys(selectors1.classes).includes('filled')).toBe(false);
    }
  });

  it('[radio] should not be able to unselect', () => {
    component.type = 'radio';
    component.control = new FormControl(1);
    fixture.detectChanges();

    let selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
    expect(Object.keys(selectors1.classes).includes('filled')).toBe(true);

    selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));

    selectors1.componentInstance.select();
    fixture.detectChanges();
    expect(Object.keys(selectors1.classes).includes('filled')).toBe(true);
  });

  it('[checkbox + switch] should toggle value when multiple', () => {
    for (const type of ['checkbox', 'switch']) {
      component.type = type as 'checkbox' | 'switch';
      component.control = new FormControl([]);
      fixture.detectChanges();

      let selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      selectors1.componentInstance.toggle();
      fixture.detectChanges();
      expect(component.control.value.includes(1)).toBe(true);

      selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
      selectors1.componentInstance.toggle();
      fixture.detectChanges();
      expect(component.control.value.includes(1)).toBe(false);
    }
  });

  it('[radio] should not toggle value', () => {
    component.type = 'radio';
    component.control = new FormControl([]);
    fixture.detectChanges();

    let selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
    selectors1.componentInstance.select();
    fixture.detectChanges();
    expect(component.control.value.includes(1)).toBe(true);

    selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_1']`));
    selectors1.componentInstance.select();
    fixture.detectChanges();
    expect(component.control.value.includes(1)).toBe(true);
  });

  it('[checkbox + switch] should not set value when [isMain]="true"', () => {
    for (const type of ['checkbox', 'switch']) {
      component.type = type as 'checkbox' | 'switch';
      component.isMain = true;
      component.control = new FormControl([]);
      fixture.detectChanges();

      const selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_is_main']`));
      selectors1.componentInstance.toggle();
      fixture.detectChanges();
      expect(component.control.value.length).toBe(0);
    }
  });

  it('[radio] should not set value when [isMain]="true"', () => {
    component.type = 'radio';
    component.isMain = true;
    component.control = new FormControl([]);
    fixture.detectChanges();

    const selectors1 = fixture.debugElement.query(By.css(`[data-test='bs2_ds_selectors__test_id_is_main']`));
    selectors1.componentInstance.select();
    fixture.detectChanges();
    expect(component.control.value.length).toBe(0);
  });
});
