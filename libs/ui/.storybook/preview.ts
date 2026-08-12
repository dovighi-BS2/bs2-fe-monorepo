import { setCompodocJson } from '@storybook/addon-docs/angular';
import { applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import docJson from '../documentation.json';

setCompodocJson(docJson);

export const decorators = [
  applicationConfig({ providers: [provideHttpClient()] }),
];
