import { AbstractControl, ValidationErrors } from '@angular/forms';
import { dateValidators } from './date.validator';
import { lengthValidations } from './length.validator';
import { isValidCnpj } from './is-valid-cnpj.utils';
import { isValidCpf } from './is-valid-cpf.utils';
import { valueValidations } from './value';
import { TranslationsConstantsBase } from '@bs2/design-system/translations';

function customValidationsMessages() {
  return TranslationsConstantsBase.instance.customValidatorMessages();
}

export const CustomValidators = {
  required: (control: AbstractControl): ValidationErrors | null => {
    if ([undefined, null].includes(control.value)) return { required: customValidationsMessages().required };
    if (Array.isArray(control.value) && (control.value || []).length <= 0)
      return { required: customValidationsMessages().required };

    if (String(control.value).trim().length <= 0) return { required: customValidationsMessages().required };

    return null;
  },
  fullName: (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value?.trim() || '';

    const words = value.split(/\s+/);
    if (words.length < 2) {
      return { fullName: customValidationsMessages().fullName };
    }
    const nameIsValid = words.every((word) => /^[A-Za-zÀ-ÖØ-öø-ÿ]+(-[A-Za-zÀ-ÖØ-öø-ÿ]+)?$/.test(word));
    if (!nameIsValid) {
      return { fullName: customValidationsMessages().onlyLetters };
    }

    return null;

  },
  numeric: (control: AbstractControl): ValidationErrors | null => {
    if (String(control.value).trim().length <= 0 || isNaN(control.value))
      return { required: customValidationsMessages().numeric };

    return null;
  },
  cnpj: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      if (!isValidCnpj(control.value)) {
        return { cnpj: customValidationsMessages().cnpj };
      }
    }
    return null;
  },
  cpf: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      if (!isValidCpf(control.value)) {
        return { cpf: customValidationsMessages().cpf };
      }
    }
    return null;
  },
  cpfOrCnpj: (control: AbstractControl): ValidationErrors | null => {
    const value = String(control.value ?? '').trim().toUpperCase();

    if (!value) return null;

    const normalizedValue = value.replace(/[\s.\-/]/g, '');
    const isCpf = /^\d{11}$/.test(normalizedValue);
    const isCnpj = /^[A-Z0-9]{14}$/.test(normalizedValue);

    if ((isCpf && isValidCpf(normalizedValue)) || (isCnpj && isValidCnpj(normalizedValue))) {
      return null;
    }

    return { cpfOrCnpj: customValidationsMessages().cpfOrCnpj };
  },
  cellphone: (control: AbstractControl): ValidationErrors | null => {
    if (control.value && control.value != '') {
      const cellphone = control.value.replace(/\D/g, '');
      const regex = /^[1-9]{2}(9[1-9])[0-9]{3}[0-9]{4}$/;

      if (!regex.test(cellphone)) {
        return { cellphone: customValidationsMessages().cellphone };
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
        return { phone: customValidationsMessages().phone };
      }
    }
    return null;
  },
  email: (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (value) {
      const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (!regex.test(value)) {
        return { email: customValidationsMessages().email };
      }
    }
    return null;
  },
  username(control: AbstractControl): ValidationErrors {
    const name = control.value;
    const reg = /^[a-zA-Z0-9._]+$/g;

    if (!reg.test(name)) {
      return { username: customValidationsMessages().username };
    }
    return null;
  },
  passwordCompare: (controlKey: string) => {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.parent && control.parent.get(controlKey)) {
        if (control?.value !== control.parent.get(controlKey)?.value) {
          return { passwordCompare: customValidationsMessages().passwordCompare };
        }
        return null;
      }

      return null;
    };
  },
  hasLowerCase: (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    const reg = /[a-z]/;

    if (!reg.test(value)) {
      return { hasLowerCase: customValidationsMessages().hasLowercase };
    }

    return null;
  },
  hasUpperCase: (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    const reg = /[A-Z]/;

    if (!reg.test(value)) {
      return { hasUpperCase: customValidationsMessages().hasUppercase };
    }

    return null;
  },
  hasSpecialCharacters: (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value;
    // const reg = /[=^""><!#$%&'()*+,-.\/:;?@[\\\]_`{|}~]/;
    const reg = /[=^""><!#$%&'()*+,\-./:;?@[\\\]_`{|}~]/;

    if (!reg.test(value)) {
      return { hasSpecialCharacters: customValidationsMessages().hasSpecialCharacters };
    }

    return null;
  },
  bs2DSInputPhone(mask: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      if (`+${mask.replace(/\D/g, '')}`.length !== control.value.length)
        return { bs2DSInputPhone: customValidationsMessages().bs2DSInputPhone };
      return null;
    };
  },
  ...dateValidators,
  ...lengthValidations,
  ...valueValidations,
};
