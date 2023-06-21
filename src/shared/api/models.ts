export type Task = {
  id: number;
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
