/* eslint-disable react/prop-types */
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currecntUser, setcurrecntUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signinWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const logout = () => {
    signOut(auth);
  };

  const value = {
    currecntUser,
    setcurrecntUser,
    signinWithGoogle,
    logout,
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      setcurrecntUser(user);
      setLoading(false);
    });

    return unsubsribe;
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
