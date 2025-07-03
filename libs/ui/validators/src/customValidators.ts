import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomValidatorMessages } from './messages.validator';
import { dateValidators } from './date.validator';
import { lengthValidations } from './length.validator';
import { isValidCnpj } from './is-valid-cnpj.utils';
import { isValidCpf } from './is-valid-cpf.utils';
import { valueValidations } from './value';

export const CustomValidators = {
  required: (control: AbstractControl): ValidationErrors | null => {
    if (typeof control.value === 'object' && (control.value || []).length <= 0)
      return { required: CustomValidatorMessages.required };

    if (String(control.value).trim().length <= 0) return { required: CustomValidatorMessages.required };

    return null;
  },
  numeric: (control: AbstractControl): ValidationErrors | null => {
    if (String(control.value).trim().length <= 0 || isNaN(control.value))
      return { required: CustomValidatorMessages.numeric };

    return null;
  },
  cnpj: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      if (!isValidCnpj(control.value)) {
        return { cnpj: CustomValidatorMessages.cnpj };
      }
    }
    return null;
  },
  cpf: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      if (!isValidCpf(control.value)) {
        return { cpfInvalid: CustomValidatorMessages.cpf };
      }
    }
    return null;
  },
  cellphone: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      const cellphone = control.value.replace(/\D/g, '');
      const regex = /^[1-9]{2}(9[1-9])[0-9]{3}[0-9]{4}$/;

      if (!regex.test(cellphone)) {
        return { cellphone: CustomValidatorMessages.cellphone };
      }
    }
    return null;
  },
  phone: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      const phone = control.value.replace(/\D/g, '');

      const regexCell = /^[1-9]{2}(9[1-9])[0-9]{3}[0-9]{4}$/;
      const regexFix = /^[1-9]{2}[0-9]{4}[0-9]{4}$/;

      if (!regexCell.test(phone) && !regexFix.test(phone)) {
        return { phone: CustomValidatorMessages.phone };
      }
    }
    return null;
  },
  email: (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!regex.test(value)) {
        return { email: CustomValidatorMessages.email };
      }
    }
    return null;
  },
  ...dateValidators,
  ...lengthValidations,
  ...valueValidations
};
