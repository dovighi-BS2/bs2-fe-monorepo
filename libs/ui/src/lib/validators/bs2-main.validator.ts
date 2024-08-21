import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Bs2ValidatorMessages } from './bs2-messages.validator';

export const bs2Validators = {
  required: (control: AbstractControl): ValidationErrors | null => {
    if (String(control.value).trim().length <= 0)
      return { required: Bs2ValidatorMessages.required };

    return null;
  },
};
