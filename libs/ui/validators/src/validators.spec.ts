import { FormControl } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';
import { CustomValidators } from './customValidators';

describe('CustomValidators', () => {
  describe('required validator', () => {
    it('should return error if string is empty or whitespace', () => {
      expect(CustomValidators.required(new FormControl(''))).toEqual({ required: CustomValidatorMessages.required });
      expect(CustomValidators.required(new FormControl('   '))).toEqual({ required: CustomValidatorMessages.required });
    });

    it('should return error if array is empty', () => {
      expect(CustomValidators.required(new FormControl([]))).toEqual({ required: CustomValidatorMessages.required });
    });

    it('should return null if value is present', () => {
      expect(CustomValidators.required(new FormControl('test'))).toBeNull();
      expect(CustomValidators.required(new FormControl(['item']))).toBeNull();
    });
  });

  describe('numeric validator', () => {
    it('should return error if empty or not a number', () => {
      expect(CustomValidators.numeric(new FormControl(''))).toEqual({ required: CustomValidatorMessages.numeric });
      expect(CustomValidators.numeric(new FormControl('abc'))).toEqual({ required: CustomValidatorMessages.numeric });
      expect(CustomValidators.numeric(new FormControl('12a'))).toEqual({ required: CustomValidatorMessages.numeric });
    });

    it('should return null for valid numeric string or number', () => {
      expect(CustomValidators.numeric(new FormControl('123'))).toBeNull();
      expect(CustomValidators.numeric(new FormControl(456))).toBeNull();
    });
  });

  describe('cellphone validator', () => {
    it('should return null if empty', () => {
      expect(CustomValidators.cellphone(new FormControl(''))).toBeNull();
      expect(CustomValidators.cellphone(new FormControl(null))).toBeNull();
      expect(CustomValidators.cellphone(new FormControl(undefined))).toBeNull();
    });

    it('should return error if invalid cellphone format', () => {
      expect(CustomValidators.cellphone(new FormControl('1234567890'))).toEqual({ cellphone: CustomValidatorMessages.cellphone });
      expect(CustomValidators.cellphone(new FormControl('11999999999'))).toBeNull(); // valid pattern example
    });

    it('should accept valid cellphone format', () => {
      // Example valid: two digits DDD, 9, second digit 1-9, 3 digits, 4 digits
      expect(CustomValidators.cellphone(new FormControl('11991234567'))).toBeNull();
      expect(CustomValidators.cellphone(new FormControl('(11) 99123-4567'))).toBeNull();
    });
  });

  describe('phone validator', () => {
    it('should return null if empty', () => {
      expect(CustomValidators.phone(new FormControl(''))).toBeNull();
    });

    it('should return error if invalid phone', () => {
      expect(CustomValidators.phone(new FormControl('123456'))).toEqual({ phone: CustomValidatorMessages.phone });
      expect(CustomValidators.phone(new FormControl('1199123456'))).toEqual({ phone: CustomValidatorMessages.phone });
    });

    it('should accept valid cellphone format', () => {
      expect(CustomValidators.phone(new FormControl('11991234567'))).toBeNull();
      expect(CustomValidators.phone(new FormControl('(11) 99123-4567'))).toBeNull();
    });

    it('should accept valid fixed phone format', () => {
      expect(CustomValidators.phone(new FormControl('1133334444'))).toBeNull();
      expect(CustomValidators.phone(new FormControl('(11) 3333-4444'))).toBeNull();
    });
  });

  describe('email validator', () => {
    it('should return null if empty', () => {
      expect(CustomValidators.email(new FormControl(''))).toBeNull();
      expect(CustomValidators.email(new FormControl(null))).toBeNull();
    });

    it('should return error if invalid email', () => {
      expect(CustomValidators.email(new FormControl('not-an-email'))).toEqual({ email: CustomValidatorMessages.email });
      expect(CustomValidators.email(new FormControl('email@domain'))).toEqual({ email: CustomValidatorMessages.email });
      expect(CustomValidators.email(new FormControl('email@domain.'))).toEqual({ email: CustomValidatorMessages.email });
    });

    it('should return null if valid email', () => {
      expect(CustomValidators.email(new FormControl('test@example.com'))).toBeNull();
      expect(CustomValidators.email(new FormControl('user.name+tag+sorting@example.co.uk'))).toBeNull();
    });
  });

  describe('dateValidators.isValidDate', () => {
    it('should return error if value is not a Date instance', () => {
      expect(CustomValidators.isValidDate(new FormControl('2024-01-01'))).toEqual({ isValidDate: CustomValidatorMessages.date });
      expect(CustomValidators.isValidDate(new FormControl(null))).toEqual({ isValidDate: CustomValidatorMessages.date });
    });

    it('should return null if value is Date instance', () => {
      expect(CustomValidators.isValidDate(new FormControl(new Date()))).toBeNull();
    });
  });

  describe('dateValidators.isDateBetween', () => {
    const min = new Date('2023-01-01T00:00:00.000Z');
    const max = new Date('2023-12-31T23:59:59.999Z');
    const validator = CustomValidators.isDateBetween(min, max);

    it('should return error if date string length is not 10', () => {
      expect(validator(new FormControl('2023-01-01T'))).toEqual({ isDateBetween: CustomValidatorMessages.date });
    });

    it('should return error if date is outside range', () => {
      expect(validator(new FormControl('31/12/2022'))).toEqual({ isDateBetween: CustomValidatorMessages.dateRangeInvalid });
      expect(validator(new FormControl('01/01/2024'))).toEqual({ isDateBetween: CustomValidatorMessages.dateRangeInvalid });
    });

    it('should return null if date is inside range', () => {
      expect(validator(new FormControl('15/06/2023'))).toBeNull();
    });
  });

  describe('dateValidators.isValidDateToUser', () => {
    it('should return error if string length is not 10', () => {
      expect(CustomValidators.isValidDateToUser(new FormControl('2023-01-01T'))).toEqual({ isValidDateToUser: CustomValidatorMessages.date });
    });

    it('should return error if date parts do not match (ex: 31/02/2023)', () => {
      expect(CustomValidators.isValidDateToUser(new FormControl('31/02/2023'))).toEqual({ isValidDateToUser: CustomValidatorMessages.date });
    });

    it('should return null if date is valid', () => {
      expect(CustomValidators.isValidDateToUser(new FormControl('15/06/2023'))).toBeNull();
    });
  });

  describe('dateValidators.isBs2DSDatePickerValidator', () => {
    it('should return error if controlToUser is invalid', () => {
      const control = new FormControl('');
      control.setErrors({ invalid: true });
      const validatorFn = CustomValidators.isBs2DSDatePickerValidator(control);
      expect(validatorFn()).toEqual({ isBs2DSDatePickerValidator: CustomValidatorMessages.date });
    });

    it('should return null if controlToUser is valid', () => {
      const control = new FormControl('');
      control.setErrors(null);
      const validatorFn = CustomValidators.isBs2DSDatePickerValidator(control);
      expect(validatorFn()).toBeNull();
    });
  });

  describe('lengthValidations.maxLength', () => {
    const maxLengthValidator = CustomValidators.maxLength(5);

    it('should return error if string length is 0', () => {
      expect(maxLengthValidator(new FormControl(''))).toEqual({ maxLength: CustomValidatorMessages.required });
    });

    it('should return error if string length > maxLength', () => {
      expect(maxLengthValidator(new FormControl('123456'))).toEqual({
        maxLength: CustomValidatorMessages.maxLength.replace('@maxLength@', '5'),
      });
    });

    it('should return null if string length <= maxLength', () => {
      expect(maxLengthValidator(new FormControl('12345'))).toBeNull();
    });

    it('should return error if array length is 0', () => {
      expect(maxLengthValidator(new FormControl([]))).toEqual({ maxLength: CustomValidatorMessages.required });
    });

    it('should return error if array length > maxLength', () => {
      expect(maxLengthValidator(new FormControl([1, 2, 3, 4, 5, 6]))).toEqual({
        maxLength: CustomValidatorMessages.arrayMaxLength.replace('@maxLength@', '5'),
      });
    });

    it('should return null if array length <= maxLength', () => {
      expect(maxLengthValidator(new FormControl([1, 2, 3]))).toBeNull();
    });
  });

  describe('lengthValidations.minLength', () => {
    const minLengthValidator = CustomValidators.minLength(3);

    it('should return error if string length is 0', () => {
      expect(minLengthValidator(new FormControl(''))).toEqual({ minLength: CustomValidatorMessages.required });
    });

    it('should return error if string length < minLength', () => {
      expect(minLengthValidator(new FormControl('12'))).toEqual({
        minLength: CustomValidatorMessages.minLength.replace('@minLength@', '3'),
      });
    });

    it('should return null if string length >= minLength', () => {
      expect(minLengthValidator(new FormControl('123'))).toBeNull();
    });

    it('should return error if array length is 0', () => {
      expect(minLengthValidator(new FormControl([]))).toEqual({ minLength: CustomValidatorMessages.required });
    });

    it('should return error if array length < minLength', () => {
      expect(minLengthValidator(new FormControl([1]))).toEqual({
        minLength: CustomValidatorMessages.arrayMaxLength.replace('@minLength@', '3'),
      });
    });

    it('should return null if array length >= minLength', () => {
      expect(minLengthValidator(new FormControl([1, 2, 3]))).toBeNull();
    });
  });
});
