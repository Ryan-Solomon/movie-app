import React, { createContext, FC, ReactNode, useContext } from 'react';

const initialContext = {};

const AuthContext = createContext(initialContext);

export const AuthContextProvider: FC<ReactNode> = ({ children }) => {
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
