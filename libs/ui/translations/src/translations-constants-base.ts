import { CustomValidatorMessages } from './types/custom-validator.messages';
import { PlaceHolderMessages } from './types/placeholder.messages';

export abstract class TranslationsConstantsBase {
  private static _instance: TranslationsConstantsBase;

  public static get instance(): TranslationsConstantsBase {
    return this._instance;
  }

  public static set instance(value: TranslationsConstantsBase) {
    TranslationsConstantsBase._instance = value;
  }

  public abstract customValidatorMessages(): CustomValidatorMessages;

  public abstract placeholderMessages(): PlaceHolderMessages;
}
