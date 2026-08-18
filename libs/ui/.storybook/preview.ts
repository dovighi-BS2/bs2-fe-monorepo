import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { setTranslationsConstantsInstance } from '@bs2/design-system/translations';
setCompodocJson(docJson);
setTranslationsConstantsInstance();
