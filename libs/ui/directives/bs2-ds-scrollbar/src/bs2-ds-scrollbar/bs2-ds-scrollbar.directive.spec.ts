import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSScrollbarDirective } from './bs2-ds-scrollbar.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-scrollbar-mock',
  template: `<div bs2-ds-scrollbar></div>`,
  standalone: true,
})
class MockBs2DSScrollbarComponent {}

describe('Bs2DSScrollbarDirective', () => {
  let fixture: ComponentFixture<MockBs2DSScrollbarComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSScrollbarDirective, MockBs2DSScrollbarComponent],
    }).createComponent(MockBs2DSScrollbarComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const scrollbar = fixture.debugElement.query(By.css('div[bs2-ds-scrollbar]'));
    const directive = new Bs2DSScrollbarDirective();
    expect(directive).toBeTruthy();
  });
});
