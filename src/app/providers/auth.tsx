import { User, app } from "@/shared/api";
import { Backdrop, CircularProgress } from "@mui/material";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FC, PropsWithChildren, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store";
import { viewerModel } from "@/entities/viewer";

const auth = getAuth(app);

export const AuthProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const viewer: User = {
          displayName: user.displayName as string,
          email: user.email as string,
          photoURL: user.photoURL,
          uid: user.uid,
        };

        dispatch(viewerModel.setViewer(viewer));
        setLoading(false);
        navigate("/tasks");
      } else {
        dispatch(viewerModel.setViewer(undefined));
        setLoading(false);
        navigate("/signin");
      }
    });
  }, []);

  if (loading) {
    return (
      <>
        <Backdrop
          open
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {children}
      </>
    );
  }

  return <>{children}</>;
};
