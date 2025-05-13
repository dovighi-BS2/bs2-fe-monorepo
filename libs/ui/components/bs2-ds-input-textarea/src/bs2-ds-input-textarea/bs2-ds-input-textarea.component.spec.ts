import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Bs2DSInputTextareaComponent } from './bs2-ds-input-textarea.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidatorMessages, CustomValidators } from '@bs2/design-system/validators';

describe('Bs2DSInputTextareaComponent', () => {
  const testId = 'bs2_ds_input_textarea__test_id';

  let component: Bs2DSInputTextareaComponent;
  let fixture: ComponentFixture<Bs2DSInputTextareaComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(`[data-test='${testId}'] ${selector}`))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputTextareaComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputTextareaComponent);

    component = fixture.componentInstance;
    const form = new FormGroup({
      description: new FormControl('', [CustomValidators.required, CustomValidators.maxLength(10)]),
    });
    component.control = form.get('description') as FormControl;
    component.testId = testId;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change input value', () => {
    component.control?.setValue('');
    fixture.detectChanges();
    let field = get(`textarea`);
    expect(field.value).toBe('');

    component.control?.setValue('teste');
    fixture.detectChanges();
    field = get(`textarea`);
    expect(field.value).toBe('teste');
  });

  it('should display error message', () => {
    component.control?.setValue('teste');
    component.control.markAllAsTouched();
    let field = get(`textarea`);
    field.blur();
    fixture.detectChanges();
    let main = get(``);
    let feedback = get(`.bs2_ds_input_textarea__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.control?.setValue('');
    component.control.markAllAsTouched();
    field = get(`textarea`);
    field.blur();
    fixture.detectChanges();
    main = get(``);
    feedback = get(`.bs2_ds_input_textarea__feedback`);
    expect((feedback?.textContent || '').trim()).toBe(CustomValidatorMessages.required.trim());
    expect(!!main.classList.contains('error')).toBe(true);
  });

  it('should display helper text', () => {
    component.control?.setValue('teste');
    component.helperText = 'teste';
    fixture.detectChanges();
    const helper = get(`.bs2_ds_input_textarea__helper`);
    expect(helper.textContent.trim()).toBe('teste');

    component.control?.setValue('');
    component.control?.setValue('');
  });

  it('should display max length counter', () => {
    component.maxLength = 10;
    component.control?.setValue('12345');
    fixture.detectChanges();
    let maxLength = get(`.bs2_ds_input_textarea__feedback_max_length`);
    expect(maxLength.textContent.trim()).toBe('5 / 10');

    component.maxLength = 0;
    component.control?.setValue('');
    fixture.detectChanges();
    maxLength = get(`.bs2_ds_input_textarea__feedback_max_length`);
    expect(maxLength).toBeFalsy();
  });

  it('[getErrors] should execute right', () => {
    component.control?.setValue('teste');
    fixture.detectChanges();
    expect(component.getErrors).toBe('');

    component.control?.setValue('');
    component.control.markAllAsTouched();
    fixture.detectChanges();
    expect(component.getErrors).toBe(CustomValidatorMessages.required);
  });
});
