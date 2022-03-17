import { Prefix, Option, Alert } from './models/temporary-models';
import { LanguageCode, LanguageNames } from '@app/core/translations';
import { AccommodationOffer } from '@app/core/api';

export const PREFIXES: Prefix[] = [
  {
    countryCode: LanguageCode.ru_RU,
    prefix: '7',
  },
  {
    countryCode: LanguageCode.en_GB,
    prefix: '44',
  },
  {
    countryCode: LanguageCode.pl_PL,
    prefix: '48',
  },
  {
    countryCode: LanguageCode.uk_UA,
    prefix: '380',
  },
];

export const LANGUAGES: Option[] = [
  { code: AccommodationOffer.HostLanguageEnum.Pl, label: LanguageNames.POLISH },
  { code: AccommodationOffer.HostLanguageEnum.Ua, label: LanguageNames.UKRAINIAN },
];

export const LENGTHOFSTAY: Option[] = [
  { code: AccommodationOffer.LengthOfStayEnum.Week1, label: '1 tydzień ' },
  { code: AccommodationOffer.LengthOfStayEnum.Week2, label: '2 tygodnie' },
  { code: AccommodationOffer.LengthOfStayEnum.Month1, label: '1 miesiąc ' },
  { code: AccommodationOffer.LengthOfStayEnum.Month2, label: '2 miesiące' },
  { code: AccommodationOffer.LengthOfStayEnum.Longer, label: 'dłużej' },
];

export const OFFER_SENT_ALERT: Alert = {
  header: 'Twoje głoszenie zostało opublikowane',
  content:
    'Sprawdzaj swoją skrzynkę i – jeśli podajesz numer – odbieraj telefon. W każdej chwili ktoś może odpowiedzieć na twoje ogłoszenie.',
};
