import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';

export const lengthValidations = {
  maxLength: (maxLength: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value || control.value.trim().length <= 0) return { maxLength: CustomValidatorMessages.required };

      if (control.value.trim().length > maxLength)
        return { maxLength: CustomValidatorMessages.maxLength.replace('@maxLength@', String(maxLength)) };

      return null;
    };
  },
};

// export const lenthValidators = {

// 	static customMinLength(value: any, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let controlValue = control.value;
// 			return value <= controlValue.length ? null : { 'minLength': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	static customMaxLength(value: any, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let controlValue = control.value;
// 			return value >= controlValue.length ? null : { 'minLength': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	// NUMBER VALIDATORS
// 	static minValue(value: any, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {
// 			let controlValue = control.value;
// 			if (typeof control.value === 'string') {
// 				controlValue = parseFloat(control.value.replace(/[^0-9\.]+/g, ''));
// 			}
// 			return value <= controlValue ? null : { 'minValue': { 'message': message } };
// 		};

// 		return v;
// 	}

// 	static maxValue(value: number, message?: string) {
// 		const v = (control: AbstractControl): ValidationErrors => {

// 			return value >= control.value ? null : { 'maxValue': { 'message': message } };
// 		};

// 		return v;
// 	}
// }
