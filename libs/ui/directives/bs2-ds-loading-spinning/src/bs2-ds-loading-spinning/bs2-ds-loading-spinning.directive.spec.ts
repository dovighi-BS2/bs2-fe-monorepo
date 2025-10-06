import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSLoadingSpinningDirective } from './bs2-ds-loading-spinning.directive';
import { By } from '@angular/platform-browser';

@Component({
  template: `
    <div id="test-element" [bs2-ds-loading-spinning]="loader" [dynamic]="dynamic" [loaderBG]="loaderBG">
      Test Content
    </div>
  `,
  standalone: true,
  imports: [Bs2DSLoadingSpinningDirective],
})
class TestComponent {
  loader = false;
  dynamic = false;
  loaderBG = '';
}

describe('Bs2DSLoadingSpinningDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let debugEl: DebugElement;
  let directiveInstance: Bs2DSLoadingSpinningDirective;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement.query(By.directive(Bs2DSLoadingSpinningDirective));
    directiveInstance = debugEl.injector.get(Bs2DSLoadingSpinningDirective);
    fixture.detectChanges();
  });

  it('should create the directive instance', () => {
    expect(directiveInstance).toBeTruthy();
  });

  it('should not append loader initially when loader is false', () => {
    const span = debugEl.nativeElement.querySelector('span.bs2_ds_loading_spinning');
    expect(span).toBeNull();
  });

  it('should append loader when loader is true', () => {
    component.loader = true;
    fixture.detectChanges();

    const span = debugEl.nativeElement.querySelector('span.bs2_ds_loading_spinning');
    expect(span).not.toBeNull();
    expect(span.innerHTML).toContain('svg');
  });

  it('should remove loader when loader changes from true to false', () => {
    component.loader = true;
    fixture.detectChanges();

    let span = debugEl.nativeElement.querySelector('span.bs2_ds_loading_spinning');
    expect(span).not.toBeNull();

    component.loader = false;
    fixture.detectChanges();

    span = debugEl.nativeElement.querySelector('span.bs2_ds_loading_spinning');
    expect(span).toBeNull();
  });

  it('should set backgroundColor from CSS variable if it exists', () => {
    const mockGetComputedStyle = jest.spyOn(window, 'getComputedStyle');
    mockGetComputedStyle.mockReturnValue({
      getPropertyValue: () => 'rgb(255, 255, 255)', // Simula valor da variável
    } as any);

    component.loader = true;
    component.loaderBG = 'primary_white';
    fixture.detectChanges();

    const span = debugEl.nativeElement.querySelector('span.bs2_ds_loading_spinning');
    expect(span.style.backgroundColor).toBe('rgb(255, 255, 255)');
  });

  it('should apply dynamic class if dynamic is true', () => {
    component.loader = true;
    component.dynamic = true;
    fixture.detectChanges();

    const svg = debugEl.nativeElement.querySelector('svg');
    expect(svg.classList.contains('dynamic')).toBe(true);
  });

  it('should not apply dynamic class if dynamic is false', () => {
    component.loader = true;
    component.dynamic = false;
    fixture.detectChanges();

    const svg = debugEl.nativeElement.querySelector('svg');
    expect(svg.classList.contains('dynamic')).toBe(false);
  });
});
