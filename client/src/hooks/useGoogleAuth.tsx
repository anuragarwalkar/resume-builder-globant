import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase-init";
import { addUserAuth } from "../slices/profile-slice";

function useGoogleAuth() {
  const dispatch = useDispatch();
  const authSub: any = useRef();
  const [gAuth, setAuth] = useState<any>({ token: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authSub.current = auth.onAuthStateChanged(async (user: any) => {
      if (user) {
        const { accessToken: token, displayName: name, email, uid: id } = user;
        dispatch(addUserAuth({ token, name, email, id }));
        setAuth({ token, name, email, id });
      }
      setLoading(false);
    });
    return () => {
      if (authSub.current) {
        authSub.current();
      }
    };
  }, [dispatch]);
  return [gAuth, loading];
}

export default useGoogleAuth;
