import { TranslationsConstantsBase } from '../translations-constants-base';
import { CustomValidatorMessages } from '../types/custom-validator.messages';
import { PlaceHolderMessages } from '../types/placeholder.messages';

export class TranslationsConstantsPt extends TranslationsConstantsBase {
  public override placeholderMessages(): PlaceHolderMessages{
    return {
      selectOption: 'Selecione uma opção',
    };

  }
  public customValidatorMessages(): CustomValidatorMessages {
    return {
      required: 'Preenchimento obrigatório.',
      maxLength: 'Máximo de @maxLength@ caracteres permitido.',
      minLength: 'Mínimo de @minLength@ caracteres permitido.',
      fullName: 'Informe pelo menos nome e sobrenome.',
      onlyLetters: 'O nome deve conter apenas letras (sem números ou caracteres especiais).',
      length: 'É necessario exatamente @length@ caracteres.',
      maxValue: 'Valor máximo permitido de @maxValue@.',
      minValue: 'Valor mínimo permitido de @minValue@.',
      arrayMaxLength: 'Máximo de @arrayMaxLength@ itens selecionados.',
      arrayMinLength: 'Mínimo de @arrayMinLength@ itens selecionados.',
      arrayLength: 'É necessario @arrayLength@ itens selecionados.',
      numeric: 'Apenas números permitidos.',
      date: 'Data inválida.',
      dateRangeInvalid: 'Data fora do limite permitido.',
      cnpj: 'CNPJ inválido',
      cpf: 'CPF inválido',
      cellphone: 'Celular inválido',
      phone: 'Telefone inválido',
      email: 'E-mail inválido',
      username: 'Usuário inválido',
      passwordCompare: 'Senhas não conferem',
      hasLowercase: 'Caracter em minúsculo obrigatório',
      hasUppercase: 'Caracter em maiúsculo obrigatório',
      hasSpecialCharacters: 'Caracter em especial obrigatório',
      bs2DSInputPhone: 'Telefone inválido.',
    };
  }
}
