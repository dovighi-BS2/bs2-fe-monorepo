import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSColumnDirective } from './bs2-ds-column.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-column-mock',
  template: `<div bs2-ds-column></div>`,
  imports: [Bs2DSColumnDirective],
  standalone: true,
})
class MockBs2DSColumnComponent {}

describe('Bs2DSColumnDirective', () => {
  let fixture: ComponentFixture<MockBs2DSColumnComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSColumnDirective, MockBs2DSColumnComponent],
    }).createComponent(MockBs2DSColumnComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const column = fixture.debugElement.query(By.css('div[bs2-ds-column]'));
    const directive = new Bs2DSColumnDirective(column);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_ds_column__*_* classes', () => {
    const column = fixture.debugElement.query(By.css('div[bs2-ds-column]'));
    const directive = new Bs2DSColumnDirective(column);
    directive.columns = [1, 2, 3, 4, 5, 6];
    directive.ngOnInit();
    const classes = Object.values(column.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_column__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_column__sm_2')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_column__md_3')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_column__lg_4')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_column__xl_5')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_column__xxl_6')).toBe(true);
  });

  it('should have omit other classes .bs2_ds_column__*_*', () => {
    const column = fixture.debugElement.query(By.css('div[bs2-ds-column]'));
    const directive = new Bs2DSColumnDirective(column);
    directive.columns = [1];
    directive.ngOnInit();
    const classes = Object.values(column.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_column__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_column__sm_2')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_column__md_3')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_column__lg_4')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_column__xl_5')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_column__xxl_6')).toBe(false);
  });
});
