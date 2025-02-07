import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSInputSelectComponent } from './bs2-ds-input-select.component';
import { By } from '@angular/platform-browser';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { Bs2DSInputSelectOption } from './bs2-ds-input-select.interface';
import { CustomValidatorMessages, CustomValidators } from '@bs2-fe-monorepo/ui/validators';

describe('Bs2DSInputSelectComponent', () => {
  const testId = 'bs2_ds_input_select__test_id';
  const options: Bs2DSInputSelectOption[] = [
    { value: 'Categoria 1', text: 'Categoria 1' },
    { value: 'Categoria 2', text: 'Categoria 2' },
    { value: 'Categoria 3', text: 'Categoria 3' },
    { value: 'Categoria 4', text: 'Categoria 4' },
    { value: 'Categoria 5', text: 'Categoria 5' },
  ];

  let component: Bs2DSInputSelectComponent;
  let fixture: ComponentFixture<Bs2DSInputSelectComponent>;

  const get = (selector: string) => fixture.debugElement.query(By.css(selector))?.nativeElement || undefined;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputSelectComponent, ReactiveFormsModule, CdkListboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputSelectComponent);

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

    let selected = get(`[data-test='${testId}'] .bs2_ds_input_select__selected p`);
    const selectedContent = options[0].text;
    expect(selected.textContent.trim()).toBe(selectedContent);

    component.selecteds = [];
    fixture.detectChanges();

    selected = get(`[data-test='${testId}'] .bs2_ds_input_select__selected p`);
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

    const selected = get(`[data-test='${testId}'] .bs2_ds_input_select__selected p`);
    const selectedContent = options[1].text;
    expect(selected.textContent.trim()).toBe(selectedContent);
  });

  it('should display correct value when [multiple="true"]', () => {
    component.multiple = true;
    component.selectOption(options[0]);
    component.selectOption(options[1]);
    expect(component.selecteds.length).toBe(2);

    fixture.detectChanges();

    const selected = get(`[data-test='${testId}'] .bs2_ds_input_select__selected p`);
    expect(selected.textContent.trim()).toBe(`${options[1].text} (+1)`);
  });

  it('should not be able to select when [disable="true"]', () => {
    component.readOnly = true;
    component.selecteds = [];
    component.selectOption(options[0]);
    expect(component.selecteds.length).toBe(0);
    const selected = get(`[data-test='${testId}'] .bs2_ds_input_select__selected`);
    expect(selected.textContent.trim()).toBe('Selecione uma opção');
  });

  it('should display error message', () => {
    component.selectOption(options[0]);
    fixture.detectChanges();
    let main = get(`[data-test='${testId}']`);
    let feedback = get(`[data-test='${testId}'] .bs2_ds_input_select__feedback`);
    expect(feedback).toBeFalsy();
    expect(main.classList.contains('error')).toBe(false);

    component.form.get('categories').setValue([]);
    component.selecteds = [];
    component.form.get('categories').markAsTouched();
    fixture.detectChanges();
    main = get(`[data-test='${testId}']`);
    feedback = get(`[data-test='${testId}'] .bs2_ds_input_select__feedback`);
    expect(feedback.textContent.trim()).toBe(CustomValidatorMessages.required.trim());
    expect(!!main.classList.contains('error')).toBe(true);
  });

  it('[isSelected] should execute right', () => {
    component.selectOption(options[0]);
    expect(!!component.isSelected(options[1])).toBe(false);
    expect(!!component.isSelected(options[0])).toBe(true);
    component.selectOption(options[1]);
    expect(!!component.isSelected(options[1])).toBe(true);
  });

  it('[selectByClick] should execute right', () => {
    component.selectByClick(options[0]);
    expect(!!component.isSelected(options[1])).toBe(false);
    expect(!!component.isSelected(options[0])).toBe(true);
    component.selectByClick(options[1]);
    expect(!!component.isSelected(options[1])).toBe(true);
  });

  it('[removeSelected] should execute right', () => {
    component.multiple = true;

    component.selectOption(options[0]);
    component.selectOption(options[1]);
    component.selectOption(options[2]);

    expect(component.selecteds.length).toBe(3);

    component.removeSelected(options[1]);
    expect(component.selecteds.length).toBe(2);
    expect(!!component.isSelected(options[1])).toBe(false);
  });

  it('[ngOnInit] should execute right', () => {
    component.options = options;
    component.control?.setValue([options[1]].map((item) => item.value));
    expect(component.selecteds.length).toBe(0);
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.selecteds.length).toBe(1);
  });
});
