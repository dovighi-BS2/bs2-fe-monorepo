import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';

export const valueValidations = {
  maxValue: (maxValue: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (String(control.value).trim().length <= 0 || isNaN(control.value))
        return { required: CustomValidatorMessages.numeric };

      if (control.value > maxValue)
        return { maxValue: CustomValidatorMessages.maxValue.replace('@maxValue@', String(maxValue)) };

      return null;
    };
  },
  minValue: (minValue: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (String(control.value).trim().length <= 0 || isNaN(control.value))
        return { required: CustomValidatorMessages.numeric };

      if (control.value < minValue)
        return { minValue: CustomValidatorMessages.minValue.replace('@minValue@', String(minValue)) };

      return null;
    };
  },
  valueBetween: (min: number, max: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (String(control.value).trim().length <= 0 || isNaN(control.value))
        return { required: CustomValidatorMessages.numeric };

      if (control.value < min)
        return { value: CustomValidatorMessages.minValue.replace('@minValue@', String(min)) };

      if (control.value > max)
        return { value: CustomValidatorMessages.maxValue.replace('@maxValue@', String(max)) };

      return null;
    };
  },
};
