import { Bs2DSCardProductComponent } from './bs2-ds-card-product.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Bs2DSCardProductComponent', () => {
  let component: Bs2DSCardProductComponent;
  let fixture: ComponentFixture<Bs2DSCardProductComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`.bs2_ds_card_product ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSCardProductComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSCardProductComponent);
    component = fixture.componentInstance;

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
    component.title = 'titulo';
    component.label = 'label';
    component.value = 0;

    component.template = 'visible';
    fixture.detectChanges();
    expect(get(`.bs2_ds_card_product__value`)?.textContent.trim()).toBe('R$ 0,00');
    expect(!!get(`.bs2_ds_card_product__unavailable`)).toBe(false);

    component.template = 'hidden';
    fixture.detectChanges();
    expect(get(`.bs2_ds_card_product__value`)?.textContent.trim()).toBe('R$ ••••••');
    expect(!!get(`.bs2_ds_card_product__unavailable`)).toBe(false);

    component.template = 'unavailable';
    fixture.detectChanges();
    expect(!!get(`.bs2_ds_card_product__product`)).toBe(false);
    expect(!!get(`.bs2_ds_card_product__unavailable`)).toBe(true);
  });
});
