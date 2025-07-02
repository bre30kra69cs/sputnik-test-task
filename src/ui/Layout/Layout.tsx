import { type FC, type ReactNode } from "react";
import { clsx } from "clsx";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ className, children }) => {
  return (
    <main
      className={clsx(
        "bg-gray-950 min-h-screen flex justify-center items-center",
        className,
      )}
    >
      {children}
    </main>
  );
};
