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

  const get = (selector: string) => fixture.debugElement.query(By.css(`[loader] ${selector}`)) || undefined;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [LoaderDirective, MockLoaderComponent],
    }).createComponent(MockLoaderComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const loader = get('');
    const directive = new LoaderDirective(loader);
    expect(directive).toBeTruthy();
  });

  it('should toggle loader HTML inside component', () => {
    const loader = get('');
    const directive = new LoaderDirective(loader);

    directive.loader = true;
    fixture.detectChanges();
    expect(get('.loader__spinner')).toBeTruthy();

    directive.loader = false;
    fixture.detectChanges();
    expect(get('.loader__spinner')).toBeFalsy();
  });

  it('should change loader background-color', () => {
    const loader = get('');
    const directive = new LoaderDirective(loader);
    directive.loader = true;

    directive.loaderBG = 'red';
    fixture.detectChanges();
    expect(get('.loader')?.nativeElement.style.backgroundColor).toBe('red');
    expect(directive.loaderRef.style.backgroundColor).toBe('red');

    // Browser converte hexadecimal em RGB
    directive.loaderBG = '#000000';
    fixture.detectChanges();
    expect(get('.loader')?.nativeElement.style.backgroundColor).toBe('rgb(0, 0, 0)');
    expect(directive.loaderRef.style.backgroundColor).toBe('rgb(0, 0, 0)');
  });
});
