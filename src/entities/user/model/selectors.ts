import { useAppSelector } from "@/app/store";

export function useUser() {
  return useAppSelector((state) => state.user.data);
}

export function useAuth() {
  return !!useUser();
}
