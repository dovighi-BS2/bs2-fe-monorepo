import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2TextInputComponent } from './bs2-text-input.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { bs2Validators } from './../../validators/bs2-main.validator';
import { Bs2ValidatorMessages } from '../../validators/bs2-messages.validator';

describe('Bs2TextInputComponent', () => {
  const testId = 'bs2_text_input__test_id';

  let component: Bs2TextInputComponent;
  let fixture: ComponentFixture<Bs2TextInputComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(selector))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2TextInputComponent, ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2TextInputComponent);

    component = fixture.componentInstance;
    component.form = new FormGroup({
      email: new FormControl('', [bs2Validators.required]),
    });
    component.testId = testId;
    component.name = 'email';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change input value', () => {
    component.form.get('email').setValue('');
    fixture.detectChanges();
    let field = get(`[data-test='${testId}'] input`);
    expect(field.value).toBe('');

    component.form.get('email').setValue('teste');
    fixture.detectChanges();
    field = get(`[data-test='${testId}'] input`);
    expect(field.value).toBe('teste');
  });

  it('should display error message', () => {
    component.form.get('email').setValue('teste');
    let field = get(`[data-test='${testId}'] input`);
    field.blur();
    fixture.detectChanges();
    let main = get(`[data-test='${testId}']`);
    let feedback = get(`[data-test='${testId}'] .bs2_text_input__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.form.get('email').setValue('');
    field = get(`[data-test='${testId}'] input`);
    field.blur();
    fixture.detectChanges();
    main = get(`[data-test='${testId}']`);
    feedback = get(`[data-test='${testId}'] .bs2_text_input__feedback`);
    expect(feedback.textContent.trim()).toBe(
      Bs2ValidatorMessages.required.trim()
    );
    expect(!!main.classList.contains('error')).toBe(true);
  });

  it('should display helper text', () => {
    component.form.get('email').setValue('teste');
    component.helperText = 'teste';
    fixture.detectChanges();
    let helper = get(`[data-test='${testId}'] .bs2_text_input__helper`);
    expect(helper.textContent.trim()).toBe('teste');

    component.form.get('email').setValue('');
    component.helperText = '';
    fixture.detectChanges();
    helper = get(`[data-test='${testId}'] .bs2_text_input__helper`);
    expect(helper).toBeFalsy();
  });
});
