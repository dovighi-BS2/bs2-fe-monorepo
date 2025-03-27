import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSFilledButtonDirective } from './bs2-ds-filled-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'button-mock',
  template: `<button bs2-ds-filled-button aria-label="button" tabindex="0">filled button</button>`,
  standalone: true,
})
class MockButtonComponent {}

describe('Bs2DSFilledButtonDirective', () => {
  let fixture: ComponentFixture<MockButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSFilledButtonDirective, MockButtonComponent],
    }).createComponent(MockButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const button = fixture.debugElement.query(By.css('button[bs2-ds-filled-button]'));
    const directive = new Bs2DSFilledButtonDirective(button);
    expect(directive).toBeTruthy();
  });

  it('should have .button.filled.primary classes', () => {
    const button = fixture.debugElement.query(By.css('button[bs2-ds-filled-button]'));
    new Bs2DSFilledButtonDirective(button);
    const classes = Object.values(button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'bs2_ds_button')).toBe(true);
    expect(!!classes.find((item) => item === 'filled')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const button = fixture.debugElement.query(By.css('button[bs2-ds-filled-button]'));
    new Bs2DSFilledButtonDirective(button);
    expect(button.nativeElement.textContent).toContain('filled button');
  });
});
