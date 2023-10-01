import { User } from "@/shared/api";
import { User as FirebaseUser } from "firebase/auth";

export * from "./slice";
export * from "./selectors";

export function normalizeUser(firebaseUser: FirebaseUser): User {
  if (firebaseUser.email) {
    return {
      displayName: firebaseUser.displayName || "User",
      photoURL: firebaseUser.photoURL,
      email: firebaseUser.email,
      uid: firebaseUser.uid,
    };
  } else {
    throw new Error("Email is required");
  }
}
