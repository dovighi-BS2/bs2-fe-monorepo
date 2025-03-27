import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSOutlinedButtonDirective } from './bs2-ds-outlined-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'button-mock',
  template: `<button bs2-ds-outlined-button aria-label="button" tabindex="0">outlined button</button>`,
  standalone: true,
})
class MockButtonComponent {}

describe('Bs2DSOutlinedButtonDirective', () => {
  let fixture: ComponentFixture<MockButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSOutlinedButtonDirective, MockButtonComponent],
    }).createComponent(MockButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const button = fixture.debugElement.query(By.css('button[bs2-ds-outlined-button]'));
    const directive = new Bs2DSOutlinedButtonDirective(button);
    expect(directive).toBeTruthy();
  });

  it('should have .button.outlined.primary classes', () => {
    const button = fixture.debugElement.query(By.css('button[bs2-ds-outlined-button]'));
    new Bs2DSOutlinedButtonDirective(button);
    const classes = Object.values(button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'bs2_ds_button')).toBe(true);
    expect(!!classes.find((item) => item === 'outlined')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const button = fixture.debugElement.query(By.css('button[bs2-ds-outlined-button]'));
    new Bs2DSOutlinedButtonDirective(button);
    expect(button.nativeElement.textContent).toContain('outlined button');
  });
});
