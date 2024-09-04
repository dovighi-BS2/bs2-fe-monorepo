import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';

export const CustomValidators = {
  required: (control: AbstractControl): ValidationErrors | null => {
    if (typeof control.value === 'object' && (control.value || []).length <= 0)
      return { required: CustomValidatorMessages.required };

    if (String(control.value).trim().length <= 0)
      return { required: CustomValidatorMessages.required };

    return null;
  },
};
