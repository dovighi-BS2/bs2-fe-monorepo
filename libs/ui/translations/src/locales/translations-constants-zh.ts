import { TranslationsConstantsBase } from '../translations-constants-base';
import { CustomValidatorMessages } from '../types/custom-validator.messages';

export class TranslationsConstantsZh extends TranslationsConstantsBase {
  public customValidatorMessages(): CustomValidatorMessages {
    return {
      required: '必填字段。',
      maxLength: '最多允许 @maxLength@ 个字符。',
      minLength: '最少需要 @minLength@ 个字符。',
      fullName: '请至少填写名字和姓氏。',
      onlyLetters: '姓名必须仅包含字母（不能有数字或特殊字符。',
      length: '必须正好 @length@ 个字符。',
      maxValue: '最大允许值为 @maxValue@。',
      minValue: '最小允许值为 @minValue@。',
      arrayMaxLength: '最多可选择 @arrayMaxLength@ 个项目。',
      arrayMinLength: '最少需要选择 @arrayMinLength@ 个项目。',
      arrayLength: '必须选择 @arrayLength@ 个项目。',
      numeric: '仅允许输入数字。',
      date: '日期无效。',
      dateRangeInvalid: '日期超出允许范围。',
      cnpj: 'CNPJ 无效',
      cpf: 'CPF 无效',
      cellphone: '手机号无效',
      phone: '电话号码无效',
      email: '邮箱无效',
      username: '用户名无效',
      passwordCompare: '两次密码不一致',
      hasLowercase: '必须包含小写字母',
      hasUppercase: '必须包含大写字母',
      hasSpecialCharacters: '必须包含特殊字符',
      bs2DSInputPhone: '电话号码无效。',
    };
  }
}
