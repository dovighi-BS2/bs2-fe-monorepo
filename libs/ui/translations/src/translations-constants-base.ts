import { CustomValidatorMessages } from './types/custom-validator.messages';
import { TranslationsConstantsPt } from './locales/translations-constants-pt';
import { TranslationsConstantsZh } from './locales/translations-constants-zh';
import { TranslationsConstantsEn } from './locales/translations-constants-en';

export abstract class TranslationsConstantsBase {
  public static _instance: TranslationsConstantsBase;

  public static get instance(): TranslationsConstantsBase {
    return this._instance;
  }

  public static createInstance(localeId: string): void {
    if (localeId === 'en') {
      TranslationsConstantsBase._instance = new TranslationsConstantsEn();
      return;
    }

    if (localeId === 'zh') {
      TranslationsConstantsBase._instance = new TranslationsConstantsZh();
      return;
    }

    TranslationsConstantsBase._instance = new TranslationsConstantsPt();
  }

  public abstract customValidatorMessages(): CustomValidatorMessages;
}
