import { useAppSelector } from "@/app/store";

export function useViewer() {
  return useAppSelector((state) => state.viewer.data);
}

export function useAuth() {
  return !!useViewer();
}
