import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Bs2DSInputTextComponent } from './bs2-ds-input-text.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidatorMessages, CustomValidators } from '@bs2/design-system/validators';

describe('Bs2DSInputTextComponent', () => {
  const testId = 'bs2_ds_input_text__test_id';

  let component: Bs2DSInputTextComponent;
  let fixture: ComponentFixture<Bs2DSInputTextComponent>;

  const get = (selector: string) => fixture.debugElement.query(By.css(selector))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputTextComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputTextComponent);

    component = fixture.componentInstance;
    const form = new FormGroup({
      email: new FormControl('', [CustomValidators.required]),
    });
    component.control = form.get('email') as FormControl;
    component.testId = testId;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change input value', fakeAsync(() => {
    component.control?.setValue('');
    fixture.detectChanges();
    let field = get(`[data-test='${testId}'] input`);
    expect(field.value).toBe('');

    component.control?.setValue('teste');
    fixture.detectChanges();
    tick(1);
    field = get(`[data-test='${testId}'] input`);
    expect(field.value).toBe('teste');
  }));

  it('should display error message', () => {
    component.control?.setValue('teste');
    component.control.markAllAsTouched();

    let field = get(`[data-test='${testId}'] input`);
    field.blur();
    fixture.detectChanges();
    let main = get(`[data-test='${testId}']`);
    let feedback = get(`[data-test='${testId}'] .bs2_ds_input_text__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.control?.setValue('');
    field = get(`[data-test='${testId}'] input`);
    field.blur();
    fixture.detectChanges();
    main = get(`[data-test='${testId}']`);
    feedback = get(`[data-test='${testId}'] .bs2_ds_input_text__feedback`);
    expect((feedback?.textContent || '').trim()).toBe(CustomValidatorMessages.required.trim());
    expect(!!main.classList.contains('error')).toBe(true);
  });

  it('should display helper text', () => {
    component.control?.setValue('teste');
    component.helperText = 'teste';
    fixture.detectChanges();
    const helper = get(`[data-test='${testId}'] .bs2_ds_input_text__helper`);
    expect(helper.textContent.trim()).toBe('teste');

    component.control?.setValue('');
    component.control?.setValue('');
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
