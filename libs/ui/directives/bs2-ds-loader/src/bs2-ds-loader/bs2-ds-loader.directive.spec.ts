import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSLoaderDirective } from './bs2-ds-loader.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-loader-mock',
  template: `<div loader></div>`,
  standalone: true,
})
class MockBs2DSLoaderComponent {}

describe('Bs2DSLoaderDirective', () => {
  let fixture: ComponentFixture<MockBs2DSLoaderComponent>;

  const get = (selector: string) => fixture.debugElement.query(By.css(`[bs2-ds-loader] ${selector}`)) || undefined;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSLoaderDirective, MockBs2DSLoaderComponent],
    }).createComponent(MockBs2DSLoaderComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const loader = get('');
    const directive = new Bs2DSLoaderDirective(loader);
    expect(directive).toBeTruthy();
  });

  it('should toggle loader HTML inside component', () => {
    const loader = get('');
    const directive = new Bs2DSLoaderDirective(loader);

    directive.loader = true;
    fixture.detectChanges();
    expect(get('.bs2_ds_loader__spinner')).toBeTruthy();

    directive.loader = false;
    fixture.detectChanges();
    expect(get('.bs2_ds_loader__spinner')).toBeFalsy();
  });

  it('should change loader background-color', () => {
    const loader = get('');
    const directive = new Bs2DSLoaderDirective(loader);
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
