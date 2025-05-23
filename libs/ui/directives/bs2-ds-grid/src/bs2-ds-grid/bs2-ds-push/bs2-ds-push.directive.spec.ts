import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSPushDirective } from './bs2-ds-push.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-push-mock',
  template: `<div bs2-ds-push></div>`,
  imports: [Bs2DSPushDirective],
  standalone: true,
})
class MockBs2DSPushComponent {}

describe('Bs2DSPushDirective', () => {
  let fixture: ComponentFixture<MockBs2DSPushComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSPushDirective, MockBs2DSPushComponent],
    }).createComponent(MockBs2DSPushComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const push = fixture.debugElement.query(By.css('div[bs2-ds-push]'));
    const directive = new Bs2DSPushDirective(push);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_ds_push__*_* classes', () => {
    const push = fixture.debugElement.query(By.css('div[bs2-ds-push]'));
    const directive = new Bs2DSPushDirective(push);
    directive.pushs = [1, 2, 3, 4, 5, 6];
    directive.ngOnInit();
    const classes = Object.values(push.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_push__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_push__sm_2')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_push__md_3')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_push__lg_4')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_push__xl_5')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_push__xxl_6')).toBe(true);
  });

  it('should have omit other classes .bs2_ds_push__*_*', () => {
    const push = fixture.debugElement.query(By.css('div[bs2-ds-push]'));
    const directive = new Bs2DSPushDirective(push);
    directive.pushs = [1];
    directive.ngOnInit();
    const classes = Object.values(push.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_push__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_push__sm_2')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_push__md_3')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_push__lg_4')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_push__xl_5')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_push__xxl_6')).toBe(false);
  });
});
