import { app } from "@/shared/api";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

export async function signUp(name: string, email: string, password: string) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(userCredential.user, { displayName: name });

    return auth.currentUser;
  } catch (err) {
    alert(err);
  }
}

export async function signIn(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (err) {
    alert(err);
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    alert(err);
  }
}
