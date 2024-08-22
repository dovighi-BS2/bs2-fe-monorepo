import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';

export const CustomValidators = {
  required: (control: AbstractControl): ValidationErrors | null => {
    if (String(control.value).trim().length <= 0)
      return { required: CustomValidatorMessages.required };

    return null;
  },
};
