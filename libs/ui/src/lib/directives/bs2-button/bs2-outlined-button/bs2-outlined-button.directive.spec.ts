import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2OutlinedButtonDirective } from './bs2-outlined-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-button-mock',
  template: `<button bs2-outlined-button aria-label="button" tabindex="0">
    outlined button
  </button>`,
  standalone: true,
})
class MockBs2ButtonComponent {}

describe('Bs2OutlinedButtonDirective', () => {
  let fixture: ComponentFixture<MockBs2ButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2OutlinedButtonDirective, MockBs2ButtonComponent],
    }).createComponent(MockBs2ButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const bs2Button = fixture.debugElement.query(
      By.css('button[bs2-outlined-button]')
    );
    const directive = new Bs2OutlinedButtonDirective(bs2Button);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_button.outlined.primary classes', () => {
    const bs2Button = fixture.debugElement.query(
      By.css('button[bs2-outlined-button]')
    );
    new Bs2OutlinedButtonDirective(bs2Button);
    const classes = Object.values(bs2Button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'bs2_button')).toBe(true);
    expect(!!classes.find((item) => item === 'outlined')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const bs2Button = fixture.debugElement.query(
      By.css('button[bs2-outlined-button]')
    );
    new Bs2OutlinedButtonDirective(bs2Button);
    expect(bs2Button.nativeElement.textContent).toContain('outlined button');
  });
});
