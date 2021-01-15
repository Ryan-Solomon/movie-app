import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { auth } from '../firebase';

const initialContext = {};

const AuthContext = createContext(initialContext);

export const AuthContextProvider: FC<ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<null | any>(null);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user));
    return () => unsubscribe();
  }, []);

  const shareThisData = { currentUser, signup };

  return (
    <AuthContext.Provider value={shareThisData}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
