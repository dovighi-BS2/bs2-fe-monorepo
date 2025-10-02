import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bs2DSInputSelectComponent } from './bs2-ds-input-select.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CdkListboxModule } from '@angular/cdk/listbox';
import { Bs2DSInputSelectOption } from './bs2-ds-input-select.interface';
import { CustomValidatorMessages, CustomValidators } from '@bs2/design-system/validators';

describe('Bs2DSInputSelectComponent', () => {
  const testId = 'bs2_ds_input_select__test_id';
  const options: Bs2DSInputSelectOption[] = [
    { value: 'Categoria 1', text: 'Categoria 1', image: 'img1.png' },
    { value: 'Categoria 2', text: 'Categoria 2', image: 'img2.png' },
    { value: 'Categoria 3', text: 'Categoria 3' },
  ];

  let component: Bs2DSInputSelectComponent;
  let fixture: ComponentFixture<Bs2DSInputSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bs2DSInputSelectComponent, ReactiveFormsModule, CdkListboxModule],
    }).compileComponents();

    fixture = TestBed.createComponent(Bs2DSInputSelectComponent);
    component = fixture.componentInstance;

    const form = new FormGroup({
      categories: new FormControl('', [CustomValidators.required]),
    });
    component.control = form.get('categories') as FormControl;
    component.testId = testId;
    component.options = options;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('[selectOption] should add selected if control is array', () => {
    component.control.setValue([]);
    const option = options[0];
    component.selectOption(option);
    expect(component.control.value).toContain(option.value);
  });

  it('[selectOption] should remove selected if already selected in array', () => {
    const option = options[0];
    component.control.setValue([option.value]);
    component.selectOption(option);
    expect(component.control.value).not.toContain(option.value);
  });

  it('[selectOption] should do nothing if readOnly', () => {
    component.readOnly = true;
    const option = options[0];
    component.control.setValue('');
    component.selectOption(option);
    expect(component.control.value).toBe('');
  });

  it('[addSelected] should append to array', () => {
    component.control.setValue(['a']);
    component.addSelected({ value: 'b', text: 'B' });
    expect(component.control.value).toEqual(['a', 'b']);
  });

  it('[removeSelected] should filter from array', () => {
    component.control.setValue(['a', 'b']);
    component.removeSelected({ value: 'a', text: 'A' });
    expect(component.control.value).toEqual(['b']);
  });

  it('[isSelected] should return true for array value', () => {
    component.control.setValue(['Categoria 1']);
    expect(component.isSelected(options[0])).toBe(true);
  });

  it('[isSelected] should return true for scalar value', () => {
    component.control.setValue('Categoria 2');
    expect(component.isSelected(options[1])).toBe(true);
  });

  it('[getSelectedTexts] should return text for single select', () => {
    component.control.setValue('Categoria 1');
    const result = component.getSelectedTexts();
    expect(result).toBe('Categoria 1');
  });

  it('[getSelectedTexts] should return placeholder when nothing selected (single)', () => {
    component.control.setValue('');
    const result = component.getSelectedTexts();
    expect(result).toBe(component.placeholder);
  });

  it('[getSelectedTexts] should return last selected + count (multi)', () => {
    component.control.setValue(['Categoria 1', 'Categoria 2']);
    const result = component.getSelectedTexts();
    expect(result).toContain('Categoria 2');
    expect(result).toContain('(+1)');
  });

  it('[getSelectedTexts] should return placeholder when nothing selected (multi)', () => {
    component.control.setValue([]);
    const result = component.getSelectedTexts();
    expect(result).toBe(component.placeholder);
  });

  it('[getSelectedImage] should return image (single)', () => {
    component.control.setValue('Categoria 1');
    const result = component.getSelectedImage();
    expect(result).toBe('img1.png');
  });

  it('[getSelectedImage] should return image (multi)', () => {
    component.control.setValue(['Categoria 1', 'Categoria 2']);
    const result = component.getSelectedImage();
    expect(result).toBe('img2.png');
  });

  it('[getSelectedImage] should return empty string when not found', () => {
    component.control.setValue('unknown');
    const result = component.getSelectedImage();
    expect(result).toBe('');
  });

  it('[getErrors] should return first error message', () => {
    component.control.markAsTouched();
    component.control.setErrors({ required: CustomValidatorMessages.required });
    const error = component.getErrors;
    expect(error).toBe(CustomValidatorMessages.required);
  });

  it('[getErrors] should return empty when untouched', () => {
    component.control.setErrors({ required: CustomValidatorMessages.required });
    const error = component.getErrors;
    expect(error).toBe('');
  });

  it('[controlIsArray] should return true when array', () => {
    component.control.setValue(['Categoria 1']);
    expect(component.controlIsArray).toBe(true);
  });

  it('[controlIsArray] should return false when not array', () => {
    component.control.setValue('Categoria 1');
    expect(component.controlIsArray).toBe(false);
  });
});
