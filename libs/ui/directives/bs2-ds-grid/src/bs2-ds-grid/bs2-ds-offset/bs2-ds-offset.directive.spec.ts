import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSOffsetDirective } from './bs2-ds-offset.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-offset-mock',
  template: `<div bs2-ds-offset></div>`,
  imports: [Bs2DSOffsetDirective],
  standalone: true,
})
class MockBs2DSOffsetComponent {}

describe('Bs2DSOffsetDirective', () => {
  let fixture: ComponentFixture<MockBs2DSOffsetComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSOffsetDirective, MockBs2DSOffsetComponent],
    }).createComponent(MockBs2DSOffsetComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const offset = fixture.debugElement.query(By.css('div[bs2-ds-offset]'));
    const directive = new Bs2DSOffsetDirective(offset);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_ds_offset__*_* classes', () => {
    const offset = fixture.debugElement.query(By.css('div[bs2-ds-offset]'));
    const directive = new Bs2DSOffsetDirective(offset);
    directive.offsets = [1, 2, 3, 4, 5, 6];
    directive.ngOnInit();
    const classes = Object.values(offset.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__sm_2')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__md_3')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__lg_4')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__xl_5')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__xxl_6')).toBe(true);
  });

  it('should have omit other classes .bs2_ds_offset__*_*', () => {
    const offset = fixture.debugElement.query(By.css('div[bs2-ds-offset]'));
    const directive = new Bs2DSOffsetDirective(offset);
    directive.offsets = [1];
    directive.ngOnInit();
    const classes = Object.values(offset.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__xs_1')).toBe(true);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__sm_2')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__md_3')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__lg_4')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__xl_5')).toBe(false);
    expect(!!classes.find((item) => item === 'bs2_ds_offset__xxl_6')).toBe(false);
  });
});
