import { TestBed, ComponentFixture } from '@angular/core/testing';
import { FlatButtonDirective } from './flat-button.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'button-mock',
  template: `<button flat-button aria-label="button" tabindex="0">
    flat button
  </button>`,
  standalone: true,
})
class MockButtonComponent {}

describe('FlatButtonDirective', () => {
  let fixture: ComponentFixture<MockButtonComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [FlatButtonDirective, MockButtonComponent],
    }).createComponent(MockButtonComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const button = fixture.debugElement.query(By.css('button[flat-button]'));
    const directive = new FlatButtonDirective(button);
    expect(directive).toBeTruthy();
  });

  it('should have .button.flat.primary classes', () => {
    const button = fixture.debugElement.query(By.css('button[flat-button]'));
    new FlatButtonDirective(button);
    const classes = Object.values(button.nativeElement.classList);

    expect(!!classes.find((item) => item === 'button')).toBe(true);
    expect(!!classes.find((item) => item === 'flat')).toBe(true);
    expect(!!classes.find((item) => item === 'primary')).toBe(true);
  });

  it('should change inner text', () => {
    const button = fixture.debugElement.query(By.css('button[flat-button]'));
    new FlatButtonDirective(button);
    expect(button.nativeElement.textContent).toContain('flat button');
  });
});
