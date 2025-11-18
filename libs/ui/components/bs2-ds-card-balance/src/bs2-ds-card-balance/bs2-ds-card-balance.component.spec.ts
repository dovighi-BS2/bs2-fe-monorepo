import { Bs2DSCardBalanceComponent } from './bs2-ds-card-balance.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Bs2DSCardBalanceComponent', () => {
  const testId = 'card_Balance__test_id';

  let component: Bs2DSCardBalanceComponent;
  let fixture: ComponentFixture<Bs2DSCardBalanceComponent>;

  const get = (selector: string) => fixture.debugElement.query(By.css(`${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSCardBalanceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSCardBalanceComponent);
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
    component.template = 'visible';
    fixture.detectChanges();
    expect(get(`.balance__balance`)?.textContent.trim()).toBe('R$ 0,00');
    expect(!!get(`.balance__unavailable`)).toBe(false);

    component.template = 'hidden';
    fixture.detectChanges();
    expect(get(`.balance__balance`)?.textContent.trim()).toBe('R$ ••••••');
    expect(!!get(`.balance__unavailable`)).toBe(false);

    component.template = 'unavailable';
    fixture.detectChanges();
    expect(!!get(`.balance__balance`)).toBe(false);
    expect(!!get(`.balance__unavailable`)).toBe(true);
  });
});
