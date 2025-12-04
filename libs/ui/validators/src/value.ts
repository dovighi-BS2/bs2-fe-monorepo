import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';

function customValidationsMessages() {
  return TranslationsConstantsBase.instance.customValidatorMessages();
}

export const valueValidations = {
  maxValue: (maxValue: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (String(control.value).trim().length <= 0 || isNaN(control.value))
        return { required: customValidationsMessages().numeric };

      if (control.value > maxValue)
        return { maxValue: customValidationsMessages().maxValue.replace('@maxValue@', String(maxValue)) };

      return null;
    };
  },
  minValue: (minValue: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (String(control.value).trim().length <= 0 || isNaN(control.value))
        return { required: customValidationsMessages().numeric };

      if (control.value < minValue)
        return { minValue: customValidationsMessages().minValue.replace('@minValue@', String(minValue)) };

      return null;
    };
  },
  valueBetween: (min: number, max: number) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (String(control.value).trim().length <= 0 || isNaN(control.value))
        return { required: customValidationsMessages().numeric };

      if (control.value < min)
        return { value: customValidationsMessages().minValue.replace('@minValue@', String(min)) };

      if (control.value > max)
        return { value: customValidationsMessages().maxValue.replace('@maxValue@', String(max)) };

      return null;
    };
  },
};
