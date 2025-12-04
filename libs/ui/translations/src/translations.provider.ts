import { APP_INITIALIZER, inject, LOCALE_ID, Provider } from '@angular/core';
import { TranslationsConstantsBase } from './translations-constants-base';
import { TranslationsConstantsEn } from './locales/translations-constants-en';
import { TranslationsConstantsZh } from './locales/translations-constants-zh';
import { TranslationsConstantsPt } from './locales/translations-constants-pt';

export function provideDesignSystemTranslations(): Provider[] {
  return [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const localeId = inject(LOCALE_ID);
        return () => setTranslationsConstantsInstance(localeId);
      },
    },
  ];
}

export function setTranslationsConstantsInstance(localeId = 'pt') {
  TranslationsConstantsBase.instance = translationsConstantsInstance(localeId);
}

function translationsConstantsInstance(localeId: string): TranslationsConstantsBase {
  if (localeId === 'en') {
    return new TranslationsConstantsEn();
  }

  if (localeId === 'zh') {
    return new TranslationsConstantsZh();
  }

  return new TranslationsConstantsPt();
}
