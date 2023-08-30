import { useEffect, useState, Dispatch, SetStateAction } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const useAppDispatch: () => RootDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useThemeColor = (): [string, Dispatch<SetStateAction<string>>] => {
  const [themeColor, setThemeColor] = useState<string>("#191919");

  useEffect(() => {
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", themeColor);
  }, [themeColor]);

  return [themeColor, setThemeColor];
};
