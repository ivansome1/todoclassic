import { Dispatch, SetStateAction, createContext } from "react";

type AddTaskDrawerContextType = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export const AddTaskDrawerContext = createContext<AddTaskDrawerContextType>({
  open: false,
  setOpen: () => {
    console.log("sdsd");
  },
});
