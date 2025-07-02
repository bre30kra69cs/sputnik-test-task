import { type FC } from "react";
import { clsx } from "clsx";

import { type Currency } from "../../types/Currency";
import { formatPrice } from "../../lib/formatPrice";
import { guard } from "../../lib/guard";
import { Picture } from "../Picture";

type Props = {
  title?: string;
  origin?: string;
  price?: number;
  currency?: Currency;
  imageUrl?: string;
  className?: string;
};

export const ProductCard: FC<Props> = ({
  title,
  origin,
  price,
  currency = "RUB",
  imageUrl,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex flex-row max-[500px]:flex-col gap-4 max-[500px]:gap-2 bg-white p-6 max-[500px]:p-4 rounded-3xl",
        className,
      )}
    >
      <Picture alt="product-image" imageUrl={imageUrl} />
      <div className="flex flex-col">
        {!!title && <p className="font-bold">{title}</p>}
        {!!origin && <p className="text-sm text-neutral-400">{origin}</p>}
        {guard.number(price) && (
          <p className="text-green-800">
            {formatPrice({
              price,
              currency,
              locale: "ru-RU",
            })}
          </p>
        )}
      </div>
    </div>
  );
};
