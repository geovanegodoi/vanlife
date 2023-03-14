import { createContext, useContext, useState } from 'react';

interface AuthenticationContextType {
  loggedIn: boolean;
  signin: (callback?: VoidFunction) => void;
  signout: (callback?: VoidFunction) => void;
}

const AuthenticationContext = createContext<AuthenticationContextType>(null!);
const STOTAGE_KEY = 'loggedin';

export function AuthenticationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem(STOTAGE_KEY) as unknown as boolean
  );

  const signin = (callback?: VoidFunction) => {
    setLoggedIn(true);
    localStorage.setItem(STOTAGE_KEY, 'true');
    callback && callback();
  };

  const signout = (callback?: VoidFunction) => {
    setLoggedIn(false);
    localStorage.removeItem(STOTAGE_KEY);
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
