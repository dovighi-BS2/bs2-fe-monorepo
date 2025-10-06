import { Bs2DSCardRatingComponent } from './bs2-ds-card-rating.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '@bs2/design-system/validators';
import { ChangeDetectorRef } from '@angular/core';

describe('Bs2DSCardRatingComponent', () => {
  const testId = 'bs2_ds_card_rating__test_id';

  let component: Bs2DSCardRatingComponent;
  let fixture: ComponentFixture<Bs2DSCardRatingComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSCardRatingComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSCardRatingComponent);
    component = fixture.componentInstance;
    const form = new FormGroup({
      rate: new FormControl(null, [CustomValidators.required]),
    });
    component.control = form.get('rate');
    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute setRate right', () => {
    component.setRate(1);
    expect(component.control?.value).toBe(1);

    component.setRate(3);
    expect(component.control?.value).toBe(3);
  });

  it('should add active class to star icon', () => {
    component.from = 1;
    component.to = 5;

    component.control.setValue(3);
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();

    expect(get(`.review__rate_item:nth-of-type(5)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(4)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(3)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(2)`)?.classList.contains('active')).toBe(false);
    expect(get(`.review__rate_item:nth-of-type(1)`)?.classList.contains('active')).toBe(false);

    component.control.setValue(5);
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();
    expect(get(`.review__rate_item:nth-of-type(5)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(4)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(3)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(2)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(1)`)?.classList.contains('active')).toBe(true);
  });

  it('should execute get rates right', () => {
    component.from = 1;
    component.to = 5;
    expect(component.rates.length).toBe(5);

    component.from = 1;
    component.to = 1;
    expect(component.rates.length).toBe(1);

    component.from = 1;
    component.to = 10;
    expect(component.rates.length).toBe(10);
  });
});
