import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2FilledButtonDirective } from './bs2-filled-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-button-mock',
  template: `<button bs2-filled-button aria-label="button" tabindex="0">
    filled button
  </button>`,
  standalone: true,
})
class MockBs2ButtonComponent {}

describe('Bs2FilledButtonDirective', () => {
  let fixture: ComponentFixture<MockBs2ButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2FilledButtonDirective, MockBs2ButtonComponent],
    }).createComponent(MockBs2ButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const bs2Button = fixture.debugElement.query(
      By.css('button[bs2-filled-button]')
    );
    const directive = new Bs2FilledButtonDirective(bs2Button);
    expect(directive).toBeTruthy();
  });

  it('should have .bs2_button.filled.primary classes', () => {
    const bs2Button = fixture.debugElement.query(
      By.css('button[bs2-filled-button]')
    );
    new Bs2FilledButtonDirective(bs2Button);
    const classes = Object.values(bs2Button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'bs2_button')).toBe(true);
    expect(!!classes.find((item) => item === 'filled')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const bs2Button = fixture.debugElement.query(
      By.css('button[bs2-filled-button]')
    );
    new Bs2FilledButtonDirective(bs2Button);
    expect(bs2Button.nativeElement.textContent).toContain('filled button');
  });
});
