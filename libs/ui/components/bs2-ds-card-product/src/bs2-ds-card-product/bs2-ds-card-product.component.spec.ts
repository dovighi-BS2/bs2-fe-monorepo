import { Bs2DSCardProductComponent } from './bs2-ds-card-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Bs2DSCardProductComponent', () => {
  const testId = 'card_product__test_id';

  let component: Bs2DSCardProductComponent;
  let fixture: ComponentFixture<Bs2DSCardProductComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSCardProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSCardProductComponent);
    component = fixture.componentInstance;

    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute setTemplate right', () => {
    component.setTemplate('visible');
    expect(component.template).toBe('visible');

    component.setTemplate('hidden');
    expect(component.template).toBe('hidden');

    component.setTemplate('unavailable');
    expect(component.template).toBe('unavailable');
  });

  it('should execute transform right', () => {
    expect(component.transform(1)).toBe('1,00');
    expect(component.transform(12)).toBe('12,00');
    expect(component.transform(12.3)).toBe('12,30');
    expect(component.transform(12.34)).toBe('12,34');
    expect(component.transform(123456789.12)).toBe('123.456.789,12');
  });

  it('should show visible/hidden/unavailable contents', () => {
    component.value = 0;

    component.template = 'visible';
    fixture.detectChanges();
    expect(get(`.product__value`)?.textContent.trim()).toBe('R$ 0,00');
    expect(!!get(`.product__unavailable`)).toBe(false);

    component.template = 'hidden';
    fixture.detectChanges();
    expect(get(`.product__value`)?.textContent.trim()).toBe('R$ ••••••');
    expect(!!get(`.product__unavailable`)).toBe(false);

    component.template = 'unavailable';
    fixture.detectChanges();
    expect(!!get(`.product__product`)).toBe(false);
    expect(!!get(`.product__unavailable`)).toBe(true);
  });
});
