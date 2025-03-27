import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Bs2DSLoadingSpinningDirective } from './bs2-ds-loading-spinning.directive';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'bs2-ds-loading-spinning-mock',
  template: `<div bs2-ds-loading-spinning></div>`,
  standalone: true,
})
class MockBs2DSLoadingSpinningComponent {}

describe('Bs2DSLoadingSpinningDirective', () => {
  let fixture: ComponentFixture<MockBs2DSLoadingSpinningComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[bs2-ds-loading-spinning] ${selector}`)) || undefined;

  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      imports: [Bs2DSLoadingSpinningDirective, MockBs2DSLoadingSpinningComponent],
    }).createComponent(MockBs2DSLoadingSpinningComponent);
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const loader = get('');
    const directive = new Bs2DSLoadingSpinningDirective(loader);
    expect(directive).toBeTruthy();
  });

  it('should toggle loader HTML inside component', () => {
    const loader = get('');
    const directive = new Bs2DSLoadingSpinningDirective(loader);

    directive.loader = true;
    fixture.detectChanges();
    expect(get('.bs2_ds_loading_spinning__spinner')).toBeTruthy();

    directive.loader = false;
    fixture.detectChanges();
    expect(get('.bs2_ds_loading_spinning__spinner')).toBeFalsy();
  });

  it('should change loader background-color', () => {
    const loader = get('');
    const directive = new Bs2DSLoadingSpinningDirective(loader);
    directive.loader = true;

    directive.loaderBG = 'red';
    fixture.detectChanges();
    expect(get('.bs2_ds_loading_spinning')?.nativeElement.style.backgroundColor).toBe('red');
    expect(directive.loaderRef.style.backgroundColor).toBe('red');

    // Browser converte hexadecimal em RGB
    directive.loaderBG = '#000000';
    fixture.detectChanges();
    expect(get('.bs2_ds_loading_spinning')?.nativeElement.style.backgroundColor).toBe('rgb(0, 0, 0)');
    expect(directive.loaderRef.style.backgroundColor).toBe('rgb(0, 0, 0)');
  });
});
