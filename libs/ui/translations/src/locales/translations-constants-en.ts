import { TranslationsConstantsBase } from '../translations-constants-base';
import { CustomValidatorMessages } from '../types/custom-validator.messages';
import { PlaceHolderMessages } from '../types/placeholder.messages';

export class TranslationsConstantsEn extends TranslationsConstantsBase {
  public override placeholderMessages(): PlaceHolderMessages{
    return {
      selectOption: 'Select an option',
    };

  }

  public customValidatorMessages(): CustomValidatorMessages {
    return {
      required: 'Required field.',
      maxLength: 'Maximum of @maxLength@ characters allowed.',
      minLength: 'Minimum of @minLength@ characters allowed.',
      fullName: 'Please provide at least a first name and a last name.',
      onlyLetters: 'The name must contain only letters (no numbers or special characters).',
      length: 'Exactly @length@ characters required.',
      maxValue: 'Maximum allowed value is @maxValue@.',
      minValue: 'Minimum allowed value is @minValue@.',
      arrayMaxLength: 'Maximum of @arrayMaxLength@ selected items.',
      arrayMinLength: 'Minimum of @arrayMinLength@ selected items.',
      arrayLength: '@arrayLength@ selected items required.',
      numeric: 'Numbers only.',
      date: 'Invalid date.',
      dateRangeInvalid: 'Date out of allowed range.',
      cnpj: 'Invalid CNPJ',
      cpf: 'Invalid CPF',
      cellphone: 'Invalid mobile phone number',
      phone: 'Invalid phone number',
      email: 'Invalid email',
      username: 'Invalid username',
      passwordCompare: 'Passwords do not match',
      hasLowercase: 'Lowercase character required',
      hasUppercase: 'Uppercase character required',
      hasSpecialCharacters: 'Special character required',
      bs2DSInputPhone: 'Invalid phone number.',
    };
  }
}
