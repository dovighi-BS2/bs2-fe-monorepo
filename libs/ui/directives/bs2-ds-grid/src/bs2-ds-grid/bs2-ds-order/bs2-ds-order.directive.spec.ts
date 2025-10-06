import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSOrderDirective } from './bs2-ds-order.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-order-mock',
  template: `<div bs2-ds-order></div>`,
  imports: [Bs2DSOrderDirective],
  standalone: true,
})
class MockBs2DSOrderComponent {}

describe('Bs2DSOrderDirective', () => {
  let fixture: ComponentFixture<MockBs2DSOrderComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSOrderDirective, MockBs2DSOrderComponent],
    }).createComponent(MockBs2DSOrderComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const order = fixture.debugElement.query(By.css('div[bs2-ds-order]'));
    const directive = new Bs2DSOrderDirective(order);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_ds_order__*_* classes', () => {
    const order = fixture.debugElement.query(By.css('div[bs2-ds-order]'));
    const directive = new Bs2DSOrderDirective(order);
    directive.orders = [1, 2, 3, 4, 5, 6];
    directive.ngOnInit();
    const classes = Object.values(order.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_order__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_order__sm_2')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_order__md_3')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_order__lg_4')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_order__xl_5')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_order__xxl_6')).toBe(true);
  });

  it('should have omit other classes .bs2_ds_order__*_*', () => {
    const order = fixture.debugElement.query(By.css('div[bs2-ds-order]'));
    const directive = new Bs2DSOrderDirective(order);
    directive.orders = [1];
    directive.ngOnInit();
    const classes = Object.values(order.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_order__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_order__sm_2')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_order__md_3')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_order__lg_4')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_order__xl_5')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_order__xxl_6')).toBe(false);
  });
});
