import { CardAssessmentComponent } from './card-assessment.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';

describe('CardAssessmentComponent', () => {
  const testId = 'textarea_input__test_id';

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
    // component.form = new FormGroup({
    //   description: new FormControl('', [CustomValidators.required, CustomValidators.maxLength(10)]),
    // });
    // component.testId = testId;
    // component.name = 'description';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
