import { Dispatch, SetStateAction, createContext } from "react";

type DockContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const DockContext = createContext<DockContextType>({
  open: false,
  setOpen: () => {
    console.log("sdsd");
  },
});
