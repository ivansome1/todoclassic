import { useAppSelector } from "@/shared/model";

export function useUser() {
  return useAppSelector((state) => state.user.data);
}

export function useAuth() {
  return !!useUser();
}
