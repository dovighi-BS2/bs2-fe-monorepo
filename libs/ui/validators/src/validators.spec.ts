import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidators } from './customValidators';
import { CustomValidatorMessages } from './messages.validator';

describe('CustomValidators', () => {
  it('required', () => {
    const control = new FormControl<any>(null);
    control.markAllAsTouched();
    expect(CustomValidators.required(control)).toEqual({ required: CustomValidatorMessages.required });

    control.setValue(undefined);
    expect(CustomValidators.required(control)).toEqual({ required: CustomValidatorMessages.required });

    control.setValue([]);
    expect(CustomValidators.required(control)).toEqual({ required: CustomValidatorMessages.required });

    control.setValue('');
    expect(CustomValidators.required(control)).toEqual({ required: CustomValidatorMessages.required });

    control.setValue('  ');
    expect(CustomValidators.required(control)).toEqual({ required: CustomValidatorMessages.required });

    control.setValue('valid');
    expect(CustomValidators.required(control)).toBeNull();
  });

  it('numeric', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();
    expect(CustomValidators.numeric(control)).toEqual({ required: CustomValidatorMessages.numeric });

    control.setValue('abc');
    expect(CustomValidators.numeric(control)).toEqual({ required: CustomValidatorMessages.numeric });

    control.setValue(123);
    expect(CustomValidators.numeric(control)).toBeNull();
  });

  it('cellphone', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();
    expect(CustomValidators.cellphone(control)).toBeNull();

    control.setValue('abc');
    expect(CustomValidators.cellphone(control)).toEqual({ cellphone: CustomValidatorMessages.cellphone });

    control.setValue('11999999999');
    expect(CustomValidators.cellphone(control)).toBeNull();

    control.setValue(null);
    expect(CustomValidators.cellphone(control)).toBeNull();
  });

  it('phone', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();
    expect(CustomValidators.phone(control)).toBeNull();

    control.setValue('abc');
    expect(CustomValidators.phone(control)).toEqual({ phone: CustomValidatorMessages.phone });

    control.setValue('11999999999');
    expect(CustomValidators.phone(control)).toBeNull();

    control.setValue('1133334444');
    expect(CustomValidators.phone(control)).toBeNull();
  });

  it('email', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();
    expect(CustomValidators.email(control)).toBeNull();

    control.setValue('invalid-email');
    expect(CustomValidators.email(control)).toEqual({ email: CustomValidatorMessages.email });

    control.setValue('valid@email.com');
    expect(CustomValidators.email(control)).toBeNull();
  });

  it('username', () => {
    const control = new FormControl<any>('valid_user_name123');
    control.markAllAsTouched();
    expect(CustomValidators.username(control)).toBeNull();

    control.setValue('invalid.user');
    expect(CustomValidators.username(control)).toEqual({ username: CustomValidatorMessages.username });

    control.setValue('invalid user!');
    expect(CustomValidators.username(control)).toEqual({ username: CustomValidatorMessages.username });
  });

  it('passwordCompare', () => {
    const group = new FormGroup({
      password: new FormControl('123456'),
      confirmPassword: new FormControl('654321'),
    });
    const control = group.get('confirmPassword')!;
    control.markAllAsTouched();
    expect(CustomValidators.passwordCompare('password')(control)).toEqual({
      passwordCompare: CustomValidatorMessages.passwordCompare,
    });

    control.setValue('123456');
    expect(CustomValidators.passwordCompare('password')(control)).toBeNull();
  });

  it('hasLowerCase', () => {
    const control = new FormControl<any>('ABC');
    control.markAllAsTouched();
    expect(CustomValidators.hasLowerCase(control)).toEqual({ hasLowerCase: CustomValidatorMessages.hasLowercase });

    control.setValue('aBC');
    expect(CustomValidators.hasLowerCase(control)).toBeNull();
  });

  it('hasUpperCase', () => {
    const control = new FormControl<any>('abc');
    control.markAllAsTouched();
    expect(CustomValidators.hasUpperCase(control)).toEqual({ hasUpperCase: CustomValidatorMessages.hasUppercase });

    control.setValue('Abc');
    expect(CustomValidators.hasUpperCase(control)).toBeNull();
  });

  it('hasSpecialCharacters', () => {
    const control = new FormControl<any>('abc');
    control.markAllAsTouched();
    expect(CustomValidators.hasSpecialCharacters(control)).toEqual({
      hasSpecialCharacters: CustomValidatorMessages.hasSpecialCharacters,
    });

    control.setValue('abc!');
    expect(CustomValidators.hasSpecialCharacters(control)).toBeNull();
  });

  it('isValidDate', () => {
    const control = new FormControl<any>('2020-01-01');
    control.markAllAsTouched();
    expect(CustomValidators.isValidDate(control)).toEqual({ isValidDate: CustomValidatorMessages.date });

    control.setValue(new Date());
    expect(CustomValidators.isValidDate(control)).toBeNull();
  });

  it('isDateBetween', () => {
    const min = new Date('2020-01-01T03:00:00.000Z');
    const max = new Date('2022-01-01T03:00:00.000Z');
    const control = new FormControl<any>('01/01/2019');
    control.markAllAsTouched();

    const validator = CustomValidators.isDateBetween(min, max);
    expect(validator(control)).toEqual({ isDateBetween: CustomValidatorMessages.dateRangeInvalid });

    control.setValue('01/01/2021');
    expect(validator(control)).toBeNull();

    control.setValue('1');
    expect(validator(control)).toEqual({ isDateBetween: CustomValidatorMessages.date });
  });

  it('isValidDateToUser', () => {
    const control = new FormControl<any>('31/02/2024');
    control.markAllAsTouched();
    expect(CustomValidators.isValidDateToUser(control)).toEqual({ isValidDateToUser: CustomValidatorMessages.date });

    control.setValue('10/10/2024');
    expect(CustomValidators.isValidDateToUser(control)).toBeNull();

    control.setValue('1');
    expect(CustomValidators.isValidDateToUser(control)).toEqual({ isValidDateToUser: CustomValidatorMessages.date });
  });

  it('isBs2DSDatePickerValidator', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();
    control.setErrors({ invalid: true });

    const validator = CustomValidators.isBs2DSDatePickerValidator(control);
    expect(validator()).toEqual({ isBs2DSDatePickerValidator: CustomValidatorMessages.date });

    control.setErrors(null);
    expect(validator()).toBeNull();
  });

  it('length', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();

    const validator = CustomValidators.length(5);

    control.setValue('abc');
    expect(validator(control)).toEqual({ length: CustomValidatorMessages.length.replace('@length@', '5') });

    control.setValue('abcde');
    expect(validator(control)).toBeNull();

    control.setValue([]);
    expect(validator(control)).toEqual({ length: CustomValidatorMessages.required });

    control.setValue([1, 2, 3, 4, 5, 6]);
    expect(validator(control)).toEqual({
      length: CustomValidatorMessages.arrayLength.replace('@length@', '5'),
    });
  });

  it('maxLength', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();

    const validator = CustomValidators.maxLength(5);

    control.setValue('abcdef');
    expect(validator(control)).toEqual({ maxLength: CustomValidatorMessages.maxLength.replace('@maxLength@', '5') });

    control.setValue('abc');
    expect(validator(control)).toBeNull();

    control.setValue([]);
    expect(validator(control)).toEqual({ maxLength: CustomValidatorMessages.required });

    control.setValue([1, 2, 3, 4, 5, 6]);
    expect(validator(control)).toEqual({
      maxLength: CustomValidatorMessages.arrayMaxLength.replace('@maxLength@', '5'),
    });
  });

  it('minLength', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();

    const validator = CustomValidators.minLength(3);

    control.setValue('ab');
    expect(validator(control)).toEqual({ minLength: CustomValidatorMessages.minLength.replace('@minLength@', '3') });

    control.setValue('abcd');
    expect(validator(control)).toBeNull();

    control.setValue([]);
    expect(validator(control)).toEqual({ minLength: CustomValidatorMessages.required });

    control.setValue([1]);
    expect(validator(control)).toEqual({
      minLength: CustomValidatorMessages.arrayMaxLength.replace('@minLength@', '3'),
    });
  });

  it('maxValue', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();

    const validator = CustomValidators.maxValue(10);
    expect(validator(control)).toEqual({ required: CustomValidatorMessages.numeric });

    control.setValue(11);
    expect(validator(control)).toEqual({ maxValue: CustomValidatorMessages.maxValue.replace('@maxValue@', '10') });

    control.setValue(5);
    expect(validator(control)).toBeNull();
  });

  it('minValue', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();

    const validator = CustomValidators.minValue(5);
    expect(validator(control)).toEqual({ required: CustomValidatorMessages.numeric });

    control.setValue(3);
    expect(validator(control)).toEqual({ minValue: CustomValidatorMessages.minValue.replace('@minValue@', '5') });

    control.setValue(6);
    expect(validator(control)).toBeNull();
  });

  it('valueBetween', () => {
    const control = new FormControl<any>('');
    control.markAllAsTouched();

    const validator = CustomValidators.valueBetween(5, 10);
    expect(validator(control)).toEqual({ required: CustomValidatorMessages.numeric });

    control.setValue(4);
    expect(validator(control)).toEqual({ value: CustomValidatorMessages.minValue.replace('@minValue@', '5') });

    control.setValue(11);
    expect(validator(control)).toEqual({ value: CustomValidatorMessages.maxValue.replace('@maxValue@', '10') });

    control.setValue(7);
    expect(validator(control)).toBeNull();
  });
});
