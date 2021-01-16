import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../firebase';

type TInitialContext = {
  signup: (email: string, password: string) => Promise<any>;
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  currentUser: any;
};

const initialContext: TInitialContext = {
  signup: (email: string, password: string) =>
    new Promise((resolve, reject) => {
      return null;
    }),
  login: (email: string, password: string) =>
    new Promise((resolve, reject) => {
      return null;
    }),
  logout: () =>
    new Promise((resolve, reject) => {
      return null;
    }),
  currentUser: null,
};

const AuthContext = createContext(initialContext);

export const AuthContextProvider: FC<ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };
  const login = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const shareThisData = { currentUser, signup, login, logout };

  return (
    <AuthContext.Provider value={shareThisData}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
