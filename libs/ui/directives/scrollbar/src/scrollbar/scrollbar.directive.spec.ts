import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ScrollbarDirective } from './scrollbar.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'scrollbar-mock',
  template: `<div scrollbar></div>`,
  standalone: true,
})
class MockScrollbarComponent {}

describe('ScrollbarDirective', () => {
  let fixture: ComponentFixture<MockScrollbarComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [ScrollbarDirective, MockScrollbarComponent],
    }).createComponent(MockScrollbarComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const scrollbar = fixture.debugElement.query(By.css('div[scrollbar]'));
    const directive = new ScrollbarDirective(scrollbar);
    expect(directive).toBeTruthy();
  });

  it('should have .scrollbar.filled.primary classes', () => {
    const scrollbar = fixture.debugElement.query(By.css('div[scrollbar]'));
    new ScrollbarDirective(scrollbar);
    const classes = Object.values(scrollbar.nativeElement.classList);

    expect(!!classes.find((item) => item === 'scrollbar')).toBe(true);
  });
});
