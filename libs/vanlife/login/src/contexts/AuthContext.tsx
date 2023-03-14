import { createContext, useContext, useState } from 'react';

interface AuthenticationContextType {
  loggedIn: boolean;
  signin: (callback?: VoidFunction) => void;
  signout: (callback?: VoidFunction) => void;
}

const AuthenticationContext = createContext<AuthenticationContextType>(null!);

export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState(false);

  const signin = (callback?: VoidFunction) => {
    setLoggedIn(true);
    callback && callback();
  };

  const signout = (callback?: VoidFunction) => {
    setLoggedIn(false);
    callback && callback();
  };

  const value = { loggedIn, signin, signout };

  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}

export function useAuthentication() {
  return useContext(AuthenticationContext);
}
