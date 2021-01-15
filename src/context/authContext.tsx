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
  signup: (email: string, password: string) => void;
  currentUser: any;
};

const initialContext: TInitialContext = {
  signup: (email: string, password: string) => null,
  currentUser: null,
};

const AuthContext = createContext(initialContext);

export const AuthContextProvider: FC<ReactNode> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<null | any>(null);
  const [isLoading, setIsLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const shareThisData = { currentUser, signup };

  return (
    <AuthContext.Provider value={shareThisData}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
