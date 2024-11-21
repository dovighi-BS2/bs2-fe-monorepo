import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { TextareaInputComponent } from './textarea-input.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidatorMessages, CustomValidators } from '@bs2-fe-monorepo/ui/validators';

describe('TextareaInputComponent', () => {
  const testId = 'textarea_input__test_id';

  let component: TextareaInputComponent;
  let fixture: ComponentFixture<TextareaInputComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextareaInputComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TextareaInputComponent);

    component = fixture.componentInstance;
    component.form = new FormGroup({
      description: new FormControl('', [CustomValidators.required, CustomValidators.maxLength(10)]),
    });
    component.testId = testId;
    component.name = 'description';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change input value', () => {
    component.form?.get('description')?.setValue('');
    fixture.detectChanges();
    let field = get(`textarea`);
    expect(field.value).toBe('');

    component.form?.get('description')?.setValue('teste');
    fixture.detectChanges();
    field = get(`textarea`);
    expect(field.value).toBe('teste');
  });

  it('should display error message', () => {
    component.form?.get('description')?.setValue('teste');
    component.form?.get('description').markAllAsTouched();
    let field = get(`textarea`);
    field.blur();
    fixture.detectChanges();
    let main = get(``);
    let feedback = get(`.textarea_input__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.form?.get('description')?.setValue('');
    component.form?.get('description').markAllAsTouched();
    field = get(`textarea`);
    field.blur();
    fixture.detectChanges();
    main = get(``);
    feedback = get(`.textarea_input__feedback`);
    expect((feedback?.textContent || '').trim()).toBe(CustomValidatorMessages.required.trim());
    expect(!!main.classList.contains('error')).toBe(true);
  });

  it('should display helper text', () => {
    component.form?.get('description')?.setValue('teste');
    component.helperText = 'teste';
    fixture.detectChanges();
    const helper = get(`.textarea_input__helper`);
    expect(helper.textContent.trim()).toBe('teste');

    component.form?.get('description')?.setValue('');
    component.form?.get('description')?.setValue('');
  });

  it('should display max length counter', () => {
    component.maxLength = 10;
    component.form?.get('description')?.setValue('12345');
    fixture.detectChanges();
    let maxLength = get(`.textarea_input__feedback_max_length`);
    expect(maxLength.textContent.trim()).toBe('5 / 10');

    component.maxLength = 0;
    component.form?.get('description')?.setValue('');
    fixture.detectChanges();
    maxLength = get(`.textarea_input__feedback_max_length`);
    expect(maxLength).toBeFalsy();
  });
});
