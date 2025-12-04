import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';

function customValidationsMessages() {
  return TranslationsConstantsBase.instance.customValidatorMessages();
}

export const lengthValidations = {
  length: (length: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && typeof control.value === 'string') {
        if (control.value.trim().length <= 0) return { length: customValidationsMessages().required };

        if (control.value.trim().length !== length)
          return { length: customValidationsMessages().length.replace('@length@', String(length)) };
      }

      if (control.value && typeof Array.isArray(control.value)) {
        if ((control.value || []).length <= 0) return { length: customValidationsMessages().required };

        if ((control.value || []).length > length)
          return {
            length: customValidationsMessages().arrayLength.replace('@length@', String(length)),
          };
      }

      return null;
    };
  },
  maxLength: (maxLength: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && typeof control.value === 'string') {
        if (control.value.trim().length <= 0) return { maxLength: customValidationsMessages().required };

        if (control.value.trim().length > maxLength)
          return { maxLength: customValidationsMessages().maxLength.replace('@maxLength@', String(maxLength)) };
      }

      if (control.value && typeof Array.isArray(control.value)) {
        if ((control.value || []).length <= 0) return { maxLength: customValidationsMessages().required };

        if ((control.value || []).length > maxLength)
          return {
            maxLength: customValidationsMessages().arrayMaxLength.replace('@maxLength@', String(maxLength)),
          };
      }

      return null;
    };
  },
  minLength: (minLength: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value && typeof control.value === 'string') {
        if (control.value.trim().length <= 0) return { minLength: customValidationsMessages().required };

        if (control.value.trim().length < minLength)
          return { minLength: customValidationsMessages().minLength.replace('@minLength@', String(minLength)) };
      }

      if (control.value && typeof Array.isArray(control.value)) {
        if ((control.value || []).length <= 0) return { minLength: customValidationsMessages().required };

        if ((control.value || []).length < minLength)
          return {
            minLength: customValidationsMessages().arrayMaxLength.replace('@minLength@', String(minLength)),
          };
      }

      return null;
    };
  },
};
