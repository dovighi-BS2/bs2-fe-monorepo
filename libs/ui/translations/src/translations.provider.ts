import { APP_INITIALIZER, inject, LOCALE_ID, Provider } from '@angular/core';
import { TranslationsConstantsBase } from './translations-constants-base';

export function provideDesignSystemTranslations(): Provider[] {
  return [
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => {
        const localeId = inject(LOCALE_ID);
        TranslationsConstantsBase.createInstance(localeId);
      },
    },
  ];
}
