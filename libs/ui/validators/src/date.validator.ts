import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';

function customValidationsMessages() {
  return TranslationsConstantsBase.instance.customValidatorMessages();
}

export const dateValidators = {
  isValidDate: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && !(control.value instanceof Date)) return { isValidDate: customValidationsMessages().date };
    return null;
  },
  isDateBetween: (min: Date, max: Date) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) return null;
      if (control.value.trim().length !== 10) return { isDateBetween: customValidationsMessages().date };

      const v = control.value.split('/');
      const value = new Date(`${v[2]}-${v[1]}-${v[0]}T03:00:00.000Z`);

      if (value?.valueOf() < min.valueOf() || value?.valueOf() > max.valueOf())
        return { isDateBetween: customValidationsMessages().dateRangeInvalid };
      return null;
    };
  },
  isValidDateToUser: (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) return null;
    if (control.value.trim().length !== 10) return { isValidDateToUser: customValidationsMessages().date };
    const v = control.value.split('/');

    // Para funcionar 100%, altera para [*T03:07:00.000Z]
    // [T03:00:00.000Z] especifico pois brasilia usava LMT (Local Mean Time) até 1913
    // se buscar por [1914-01-01T03:00:00.000Z] ele retorna 1913-12-31
    const d = new Date(`${v[2]}-${v[1]}-${v[0]}T03:00:00.000Z`);
    const _year = Number(v[2]);
    const _month = Number(v[1] - 1);
    const _day = Number(v[0]);

    // Caso o usuário digite 31/02/2024 por exemplo, o new Date entende como 02/03/2024
    // Por isso é necessário comparar a veracidade das informações passadas
    if (d.getFullYear() !== _year || d.getMonth() !== _month || d.getDate() !== _day)
      return { isValidDateToUser: customValidationsMessages().date };
    return null;
  },
  isBs2DSDatePickerValidator: (controlToUser: AbstractControl) => {
    return (): ValidationErrors | null => {
      if (controlToUser.invalid) return { isBs2DSDatePickerValidator: customValidationsMessages().date };
      return null;
    };
  },
};
