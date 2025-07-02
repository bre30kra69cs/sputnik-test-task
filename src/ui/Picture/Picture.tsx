import { type FC } from "react";
import { clsx } from "clsx";

type Props = {
  alt?: string;
  imageUrl?: string;
  className?: string;
};

export const Picture: FC<Props> = ({
  alt = "picture",
  imageUrl,
  className,
}) => {
  if (!imageUrl) {
    return (
      <div
        className={clsx("w-3xs h-64 bg-neutral-300 rounded-xl", className)}
      />
    );
  }

  return (
    <img alt={alt} className={clsx("w-3xs h-3xs", className)} src={imageUrl} />
  );
};
