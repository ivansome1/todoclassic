import { FC, PropsWithChildren } from "react";

interface IconProps extends PropsWithChildren {
  fontSize?: "small" | "medium" | "large";
}

export const Icon: FC<IconProps> = ({ children }) => {
  return <span className="material-symbols-rounded">{children}</span>;
};
