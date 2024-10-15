import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectInputComponent } from './select-input.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { SelectInputOption } from './select-input.interface';
import {
  CustomValidatorMessages,
  CustomValidators,
} from '@bs2-fe-monorepo/ui/validators';

describe('SelectInputComponent', () => {
  const testId = 'select_input__test_id';
  const options: SelectInputOption[] = [
    { value: 'Categoria 1', text: 'Categoria 1', image: '123' },
    { value: 'Categoria 2', text: 'Categoria 2', image: '123' },
    { value: 'Categoria 3', text: 'Categoria 3' },
    { value: 'Categoria 4', text: 'Categoria 4', image: '123' },
    { value: 'Categoria 5', text: 'Categoria 5' },
  ];

  let component: SelectInputComponent;
  let fixture: ComponentFixture<SelectInputComponent>;

  const get = (selector: string) =>
    fixture.debugElement.query(By.css(selector))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInputComponent, ReactiveFormsModule, CdkListboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectInputComponent);

    component = fixture.componentInstance;
    component.form = new FormGroup({
      categories: new FormControl('', [CustomValidators.required]),
    });
    component.testId = testId;
    component.name = 'categories';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display placeholder when nothing selected', () => {
    component.placeholder = 'Selecione uma opção';

    component.selecteds = [options[0]];
    fixture.detectChanges();

    let selected = get(`[data-test='${testId}'] .select_input__selected`);
    const selectedContent = options[0].image
      ? `${options[0]?.image} ${options[0].text}`
      : options[0].text;
    expect(selected.textContent.trim()).toBe(selectedContent);

    component.selecteds = [];
    fixture.detectChanges();

    selected = get(`[data-test='${testId}'] .select_input__selected`);
    expect(selected.textContent.trim()).toBe('Selecione uma opção');
  });

  it('should select only one option when [multiple="false"]', () => {
    component.multiple = false;
    component.selectOption(options[0]);
    component.selectOption(options[1]);
    expect(component.selecteds.length).toBe(1);
  });

  it('should select multiple options when [multiple="true"]', () => {
    component.multiple = true;
    component.selectOption(options[0]);
    component.selectOption(options[1]);
    expect(component.selecteds.length).toBe(2);
  });

  it('should display correct value when [multiple="false"]', () => {
    component.multiple = false;
    component.selectOption(options[0]);
    component.selectOption(options[1]);

    fixture.detectChanges();

    const selected = get(`[data-test='${testId}'] .select_input__selected`);
    const selectedContent = options[1].image
      ? `${options[1]?.image} ${options[1].text}`
      : options[1].text;
    expect(selected.textContent.trim()).toBe(selectedContent);
  });

  it('should display correct value when [multiple="true"]', () => {
    component.multiple = true;
    component.selectOption(options[0]);
    component.selectOption(options[1]);
    expect(component.selecteds.length).toBe(2);

    fixture.detectChanges();

    const selected = get(`[data-test='${testId}'] .select_input__selected`);
    expect(selected.textContent.trim()).toBe(`${options[1].text} (+1)`);
  });

  it('should not be able to select when [disable="true"]', () => {
    component.readOnly = true;
    component.selecteds = [];
    component.selectOption(options[0]);
    expect(component.selecteds.length).toBe(0);
    const selected = get(`[data-test='${testId}'] .select_input__selected`);
    expect(selected.textContent.trim()).toBe('Selecione uma opção');
  });

  it('should display error message', () => {
    component.selectOption(options[0]);
    fixture.detectChanges();
    let main = get(`[data-test='${testId}']`);
    let feedback = get(`[data-test='${testId}'] .select_input__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.selectOption(options[0]);
    fixture.detectChanges();
    main = get(`[data-test='${testId}']`);
    feedback = get(`[data-test='${testId}'] .select_input__feedback`);
    expect(feedback.textContent.trim()).toBe(
      CustomValidatorMessages.required.trim()
    );
    expect(!!main.classList.contains('error')).toBe(true);
  });
});
