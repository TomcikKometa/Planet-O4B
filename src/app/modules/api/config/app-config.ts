
import { CurrencyMaskConfig } from 'ng2-currency-mask';

export const CURRENCY_CONFIG: CurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  decimal: ',',
  precision: 2,
  prefix: '',
  suffix: '',
  thousands: ' ',
};

export const APP_LANGUAGES: string[] = ['pl', 'en', 'de', 'ua'];
export const APP_DEFAULT_LANG: string = 'pl';
export const APP_USER_LANG : string = 'pl';