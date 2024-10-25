import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FilledButtonDirective } from './filled-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'button-mock',
  template: `<button filled-button aria-label="button" tabindex="0">filled button</button>`,
  standalone: true,
})
class MockButtonComponent {}

describe('FilledButtonDirective', () => {
  let fixture: ComponentFixture<MockButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [FilledButtonDirective, MockButtonComponent],
    }).createComponent(MockButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const button = fixture.debugElement.query(By.css('button[filled-button]'));
    const directive = new FilledButtonDirective(button);
    expect(directive).toBeTruthy();
  });

  it('should have .button.filled.primary classes', () => {
    const button = fixture.debugElement.query(By.css('button[filled-button]'));
    new FilledButtonDirective(button);
    const classes = Object.values(button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'button')).toBe(true);
    expect(!!classes.find((item) => item === 'filled')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const button = fixture.debugElement.query(By.css('button[filled-button]'));
    new FilledButtonDirective(button);
    expect(button.nativeElement.textContent).toContain('filled button');
  });
});
