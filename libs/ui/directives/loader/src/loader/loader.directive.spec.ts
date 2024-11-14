import { TestBed, ComponentFixture } from '@angular/core/testing';
import { LoaderDirective } from './loader.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'loader-mock',
  template: `<div loader></div>`,
  standalone: true,
})
class MockLoaderComponent {}

describe('LoaderDirective', () => {
  let fixture: ComponentFixture<MockLoaderComponent>;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [LoaderDirective, MockLoaderComponent],
    }).createComponent(MockLoaderComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const loader = fixture.debugElement.query(By.css('[loader]'));
    const directive = new LoaderDirective(loader);
    expect(directive).toBeTruthy();
  });
});
