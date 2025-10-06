import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSRowDirective } from './bs2-ds-row.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-row-mock',
  template: `<div bs2-ds-row></div>`,
  imports: [Bs2DSRowDirective],
  standalone: true,
})
class MockBs2DSRowComponent {}

describe('Bs2DSRowDirective', () => {
  let fixture: ComponentFixture<MockBs2DSRowComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSRowDirective, MockBs2DSRowComponent],
    }).createComponent(MockBs2DSRowComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const row = fixture.debugElement.query(By.css('div[bs2-ds-row]'));
    const directive = new Bs2DSRowDirective(row);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_ds_row classes', () => {
    const row = fixture.debugElement.query(By.css('div[bs2-ds-row]'));
    const directive = new Bs2DSRowDirective(row);
    const classes = Object.values(row.nativeElement.classList);
    expect(!!classes.find((item) => item === 'bs2_ds_row')).toBe(true);
  });
});
