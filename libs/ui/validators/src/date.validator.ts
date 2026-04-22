import { AbstractControl, ValidationErrors } from '@angular/forms';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';

function customValidationsMessages() {
  return TranslationsConstantsBase.instance.customValidatorMessages();
}

export const dateValidators = {
  isValidDate: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !(control.value instanceof Date)) return { isValidDate: customValidationsMessages().date };
    return null;
  },
  isDateBetween: (getMin: () => Date | null | undefined, getMax: () => Date | null | undefined) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      const min = getMin();
      const max = getMax();
      if (!min && !max) return null;
      if (control.value.trim().length !== 10) return { isDateBetween: customValidationsMessages().date };

      const v = control.value.split('/');

      const _year = Number(v[2]);
      const _month = Number(v[1]) - 1;
      const _day = Number(v[0]);

      const utcDate = new Date(Date.UTC(_year, _month, _day));
      const normalizedDate = new Date(utcDate.getUTCFullYear(), utcDate.getUTCMonth(), utcDate.getUTCDate(), 0, 0, 0, 0);

      if (normalizedDate?.valueOf() < min?.valueOf() || normalizedDate?.valueOf() > max?.valueOf())
        return { isDateBetween: customValidationsMessages().dateRangeInvalid };
      return null;
    };
  },
  isValidDateToUser: (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    if (control.value.trim().length !== 10) return { isValidDateToUser: customValidationsMessages().date };
    const v = control.value.split('/');

    const _year = Number(v[2]);
    const _month = Number(v[1]) - 1;
    const _day = Number(v[0]);

    const utcDate = new Date(Date.UTC(_year, _month, _day));

    if (utcDate.getUTCFullYear() !== _year || utcDate.getUTCMonth() !== _month || utcDate.getUTCDate() !== _day) {
      return { isValidDateToUser: customValidationsMessages().date };
    }
    return null;
  },
  isBs2DSDatePickerValidator: (controlToUser: AbstractControl) => {
    return (): ValidationErrors | null => {
      if (controlToUser.invalid) return { isBs2DSDatePickerValidator: Object.values(controlToUser?.errors || {})[0] };
      return null;
    };
  },
};
