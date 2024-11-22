import { CardAssessmentComponent } from './card-assessment.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { ChangeDetectorRef } from '@angular/core';

describe('CardAssessmentComponent', () => {
  const testId = 'card_assessment__test_id';

  let component: CardAssessmentComponent;
  let fixture: ComponentFixture<CardAssessmentComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAssessmentComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CardAssessmentComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      rate: new FormControl(null, [CustomValidators.required]),
    });
    component.name = 'rate';
    component.testId = testId;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should execute setRate right', () => {
    component.setRate(1);
    expect(component.form.get('rate')?.value).toBe(1);

    component.setRate(3);
    expect(component.form.get('rate')?.value).toBe(3);
  });

  it('should add active class to star icon', () => {
    component.from = 1;
    component.to = 5;

    component.form.get('rate').setValue(3);
    fixture.componentRef.injector.get(ChangeDetectorRef).detectChanges();

    expect(get(`.review__rate_item:nth-of-type(5)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(4)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(3)`)?.classList.contains('active')).toBe(true);
    expect(get(`.review__rate_item:nth-of-type(2)`)?.classList.contains('active')).toBe(false);
    expect(get(`.review__rate_item:nth-of-type(1)`)?.classList.contains('active')).toBe(false);

    component.form.get('rate').setValue(5);
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
