import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import docJson from '../documentation.json';
import { setTranslationsConstantsInstance } from '@bs2/design-system/translations';

setCompodocJson(docJson);
setTranslationsConstantsInstance();

export const decorators = [
  applicationConfig({ providers: [provideHttpClient()] }),
];
