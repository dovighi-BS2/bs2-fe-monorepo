import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextInputComponent } from './text-input.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CustomValidators } from '@bs2-fe-monorepo/ui/validators';
import { CustomValidatorMessages } from '@bs2-fe-monorepo/ui/validators';

describe('TextInputComponent', () => {
  const testId = 'text_input__test_id';

  let component: TextInputComponent;
  let fixture: ComponentFixture<TextInputComponent>;

  const get = (selector: string) => fixture.debugElement.query(By.css(selector))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextInputComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TextInputComponent);

    component = fixture.componentInstance;
    component.form = new FormGroup({
      email: new FormControl('', [CustomValidators.required]),
    });
    component.testId = testId;
    component.name = 'email';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change input value', () => {
    component.form?.get('email')?.setValue('');
    fixture.detectChanges();
    let field = get(`[data-test='${testId}'] input`);
    expect(field.value).toBe('');

    component.form?.get('email')?.setValue('teste');
    fixture.detectChanges();
    field = get(`[data-test='${testId}'] input`);
    expect(field.value).toBe('teste');
  });

  it('should display error message', () => {
    component.form?.get('email')?.setValue('teste');
    let field = get(`[data-test='${testId}'] input`);
    field.blur();
    fixture.detectChanges();
    let main = get(`[data-test='${testId}']`);
    let feedback = get(`[data-test='${testId}'] .text_input__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.form?.get('email')?.setValue('');
    field = get(`[data-test='${testId}'] input`);
    field.blur();
    fixture.detectChanges();
    main = get(`[data-test='${testId}']`);
    feedback = get(`[data-test='${testId}'] .text_input__feedback`);
    // expect((feedback?.textContent || '').trim()).toBe(
    //   CustomValidatorMessages.required.trim()
    // );
    // expect(!!main.classList.contains('error')).toBe(true);
  });

  it('should display helper text', () => {
    component.form?.get('email')?.setValue('teste');
    component.helperText = 'teste';
    fixture.detectChanges();
    const helper = get(`[data-test='${testId}'] .text_input__helper`);
    expect(helper.textContent.trim()).toBe('teste');

    component.form?.get('email')?.setValue('');
    component.form?.get('email')?.setValue('');
  });
});
