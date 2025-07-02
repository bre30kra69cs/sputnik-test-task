import { type Currency } from "../types/Currency";
import { type Locale } from "../types/Locale";

type Options = {
  price: number;
  currency: Currency;
  locale: Locale;
};

export const formatPrice = ({ price, currency, locale }: Options): string => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
  }).format(price);
};
