import { TestBed, ComponentFixture } from '@angular/core/testing';
import { OutlinedButtonDirective } from './outlined-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'button-mock',
  template: `<button outlined-button aria-label="button" tabindex="0">
    outlined button
  </button>`,
  standalone: true,
})
class MockButtonComponent {}

describe('OutlinedButtonDirective', () => {
  let fixture: ComponentFixture<MockButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [OutlinedButtonDirective, MockButtonComponent],
    }).createComponent(MockButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const button = fixture.debugElement.query(
      By.css('button[outlined-button]')
    );
    const directive = new OutlinedButtonDirective(button);
    expect(directive).toBeTruthy();
  });

  it('should have .button.outlined.primary classes', () => {
    const button = fixture.debugElement.query(
      By.css('button[outlined-button]')
    );
    new OutlinedButtonDirective(button);
    const classes = Object.values(button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'button')).toBe(true);
    expect(!!classes.find((item) => item === 'outlined')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const button = fixture.debugElement.query(
      By.css('button[outlined-button]')
    );
    new OutlinedButtonDirective(button);
    expect(button.nativeElement.textContent).toContain('outlined button');
  });
});
