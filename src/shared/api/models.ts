export type Task = {
  id: string;
  title: string;
  completed: boolean;
  description?: string;
  color?: string;
};

export type User = {
  uid: string;
  displayName: string;
  photoURL: string | null;
  email: string;
};
