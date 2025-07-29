import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';

export const lengthValidations = {
  maxLength: (maxLength: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && typeof control.value === 'string') {
        if (control.value.trim().length <= 0) return { maxLength: CustomValidatorMessages.required };

        if (control.value.trim().length > maxLength)
          return { maxLength: CustomValidatorMessages.maxLength.replace('@maxLength@', String(maxLength)) };
      }

      if (control.value && typeof Array.isArray(control.value)) {
        if ((control.value || []).length <= 0) return { maxLength: CustomValidatorMessages.required };

        if ((control.value || []).length > maxLength)
          return {
            maxLength: CustomValidatorMessages.arrayMaxLength.replace('@maxLength@', String(maxLength)),
          };
      }

      return null;
    };
  },
  minLength: (minLength: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && typeof control.value === 'string') {
        if (control.value.trim().length <= 0) return { minLength: CustomValidatorMessages.required };

        if (control.value.trim().length < minLength)
          return { minLength: CustomValidatorMessages.minLength.replace('@minLength@', String(minLength)) };
      }

      if (control.value && typeof Array.isArray(control.value)) {
        if ((control.value || []).length <= 0) return { minLength: CustomValidatorMessages.required };

        if ((control.value || []).length < minLength)
          return {
            minLength: CustomValidatorMessages.arrayMaxLength.replace('@minLength@', String(minLength)),
          };
      }

      return null;
    };
  },
};
