import { FC, PropsWithChildren } from "react";

export const Icon: FC<PropsWithChildren> = ({ children }) => {
  return <span className="material-symbols-outlined">{children}</span>;
};
